import { toast } from "react-hot-toast";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "nameRequired")
    .max(100, "nameTooLong")
    .trim(),
  email: z
    .string()
    .min(1, "emailRequired")
    .max(254, "emailTooLong")
    .email("emailInvalid")
    .trim()
    .toLowerCase(),
  subject: z
    .string()
    .min(1, "subjectRequired")
    .max(200, "subjectTooLong")
    .trim(),
  message: z
    .string()
    .min(1, "messageRequired")
    .max(5000, "messageTooLong")
    .trim(),
  botcheck: z
    .string()
    .max(0, "botDetected")
    .optional(),
});

export const useContactForm = (reset, t) => {
  const onSubmit = async (data) => {
    if (!import.meta.env.VITE_WEB3FORMS_KEY) {
      toast.error("Configuration error: Web3Forms key is missing");
      return;
    }

    const parsed = contactFormSchema.safeParse(data);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      const errorKey = firstError.message;
      const message = t.validations?.[errorKey] || errorKey;
      toast.error(message);
      return;
    }

    const loadingToast = toast.loading(t.sendingText);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          ...parsed.data,
        }),
      });

      const result = await res.json();
      toast.dismiss(loadingToast);

      if (result.success) {
        toast.success(t.successText);
        reset();
      } else {
        toast.error(t.errorText);
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      console.error("Error al enviar el formulario:", error);
      toast.error(t.errorGeneric || "Ocurrió un problema al enviar el mensaje");
    }
  };

  return onSubmit;
};
