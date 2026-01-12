import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, FileText } from "lucide-react"; // Usamos Lucide para consistencia
import { toast, Toaster } from "react-hot-toast";
import useLanguage from "../hooks/useLanguage";
import es from "../locales/es";
import en from "../locales/en";

const languages = { es, en };

// Variantes de animación para el header (Mismo sistema que Skills/About)
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Contact = () => {
  const { lang } = useLanguage();
  const t = languages[lang].contact;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

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
          access_key: "8046450a-746b-45f8-8c2c-12ba1126f2d4",
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
      toast.error("Ocurrió un problema al enviar el mensaje");
    }
  };

  return (
    <section
      className="relative w-full min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden"
      id="contacto"
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {t.sectionTitle}
          </h2>

          <div className="flex justify-center mt-8">
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 via-orange-500 to-transparent rounded-full"></div>
          </div>
        </motion.div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-xl"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <input
              type="checkbox"
              style={{ display: "none" }}
              {...register("botcheck")}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                label={t.name}
                name="name"
                icon={User}
                register={register}
                required={t.validations.nameRequired}
                error={errors.name}
              />

              <Input
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

            <Input
              label={t.subject}
              name="subject"
              icon={FileText}
              register={register}
              required={t.validations.subjectRequired}
              error={errors.subject}
            />

            <Textarea
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
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>{t.sending}</span>
                </>
              ) : (
                <>
                  <Send size={18} />
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

// Componentes reutilizables actualizados con mejor UI
const Input = ({
  label,
  name,
  type = "text",
  icon: Icon,
  register,
  required,
  pattern,
  error,
}) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      <div className="relative group">
        <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-orange-500 transition-colors duration-300">
          <Icon size={18} />
        </span>
        <input
          type={type}
          id={name}
          className={`w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800/50 border ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-orange-500/20"
          } text-gray-900 dark:text-white rounded-xl shadow-sm focus:ring-4 focus:outline-none transition-all duration-300`}
          {...register(name, { required, pattern })}
        />
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-red-500 font-medium ml-1"
        >
          {error.message}
        </motion.p>
      )}
    </div>
  );
};

const Textarea = ({ label, name, icon: Icon, register, required, error }) => (
  <div className="space-y-2">
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
    >
      {label}
    </label>
    <div className="relative group">
      <span className="absolute top-3.5 left-4 text-gray-400 group-focus-within:text-orange-500 transition-colors duration-300">
        <Icon size={18} />
      </span>
      <textarea
        id={name}
        rows="5"
        className={`w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800/50 border ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-orange-500/20"
        } text-gray-900 dark:text-white rounded-xl shadow-sm focus:ring-4 focus:outline-none transition-all duration-300 resize-none`}
        {...register(name, { required })}
      ></textarea>
    </div>
    {error && (
      <motion.p
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs text-red-500 font-medium ml-1"
      >
        {error.message}
      </motion.p>
    )}
  </div>
);

export default Contact;
