import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, FileText } from "lucide-react";
import { Toaster } from "react-hot-toast";
import useLanguage from "../../../hooks/useLanguage.js";
import { useContactForm } from "../../../hooks/useContactForm.js";
import ContactHeader from "./ContactHeader.jsx";
import FormInput from "./FormInput.jsx";
import FormTextarea from "./FormTextarea.jsx";
import es from "../../../locales/es.js";
import en from "../../../locales/en.js";

const languages = { es, en };

const Contact = () => {
  const { lang } = useLanguage();
  const t = languages[lang].contact;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = useContactForm(reset, t);

  return (
    <section
      className="relative w-full min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden"
      id="contacto"
      aria-labelledby="contact-heading"
    >
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />

      <div className="relative w-full max-w-2xl z-10">
        <ContactHeader title={t.sectionTitle} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-xl"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            noValidate
          >
            <input
              type="checkbox"
              style={{ display: "none" }}
              {...register("botcheck")}
              tabIndex={-1}
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormInput
                label={t.name}
                name="name"
                icon={User}
                register={register}
                required={t.validations.nameRequired}
                error={errors.name}
              />

              <FormInput
                label={t.email}
                name="email"
                type="email"
                icon={Mail}
                register={register}
                required={t.validations.emailRequired}
                pattern={{
                  value: /^\S+@\S+$/i,
                  message: t.validations.emailInvalid,
                }}
                error={errors.email}
              />
            </div>

            <FormInput
              label={t.subject}
              name="subject"
              icon={FileText}
              register={register}
              required={t.validations.subjectRequired}
              error={errors.subject}
            />

            <FormTextarea
              label={t.message}
              name="message"
              icon={MessageSquare}
              register={register}
              required={t.validations.messageRequired}
              error={errors.message}
            />

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
              aria-label={isSubmitting ? t.sending : t.send}
            >
              {isSubmitting ? (
                <>
                  <div
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                    aria-hidden="true"
                  />
                  <span>{t.sending}</span>
                </>
              ) : (
                <>
                  <Send size={18} aria-hidden="true" />
                  <span>{t.send}</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

