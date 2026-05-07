import { toast } from "sonner";
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
  const onSubmit = async (data, token) => {
    if (!import.meta.env.VITE_API_URL) {
      toast.error(t.configError || "Configuration error: API URL is missing");
      return;
    }

    if (!token) {
      toast.error(t.validations?.captchaRequired || "Please complete the security verification");
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

    toast.promise(
      fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "cf-turnstile-response": token,
          ...parsed.data,
        }),
      }).then(async (res) => {
        const result = await res.json();
        if (!result.success) throw new Error(result.message || "Error");
        return result;
      }),
      {
        loading: t.sendingText,
        success: () => {
          reset();
          return t.successText;
        },
        error: (err) => {
          if (err.message === "Error") return t.errorText;
          return t.errorGeneric || "Ocurrió un problema al enviar el mensaje";
        },
      }
    );
  };

  return onSubmit;
};
