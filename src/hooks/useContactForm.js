import { toast } from "react-hot-toast";

export const useContactForm = (reset, t) => {
  const onSubmit = async (data) => {
    const loadingToast = toast.loading(t.sendingText);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key:
            import.meta.env.VITE_WEB3FORMS_KEY ||
            "8046450a-746b-45f8-8c2c-12ba1126f2d4",
          ...data,
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
