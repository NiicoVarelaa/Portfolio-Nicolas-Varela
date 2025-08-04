import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaTag, FaRegCommentDots } from 'react-icons/fa';
import { toast, Toaster } from 'react-hot-toast';
import { useLanguage } from '../context/LanguageContext';
import es from "../locales/es";
import en from "../locales/en";

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
                    ...data
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
            toast.error('Ocurrió un problema al enviar el mensaje');
        }
    };

    return (
        <section className="mx-auto max-w-xl w-full min-h-screen px-4 sm:px-10 py-20 flex items-center justify-center" id="contacto">
            <Toaster position="top-right" />

            <div className="w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-8 text-center relative after:content-[''] after:block after:h-[3px] after:w-16 after:bg-orange-500 after:mt-2 after:mx-auto"
                >
                    {t.sectionTitle}
                </motion.h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input type="checkbox" style={{ display: "none" }} {...register("botcheck")} />

                    <Input
                        label={t.name}
                        name="name"
                        register={register}
                        required={t.validations.nameRequired}
                        error={errors.name}
                    />

                    <Input
                        label={t.email}
                        name="email"
                        type="email"
                        register={register}
                        required={t.validations.emailRequired}
                        pattern={{
                            value: /^\S+@\S+$/i,
                            message: t.validations.emailInvalid
                        }}
                        error={errors.email}
                    />

                    <Input
                        label={t.subject}
                        name="subject"
                        register={register}
                        required={t.validations.subjectRequired}
                        error={errors.subject}
                    />

                    <Textarea
                        label={t.message}
                        name="message"
                        register={register}
                        required={t.validations.messageRequired}
                        error={errors.message}
                    />

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2"
                    >
                        <FaPaperPlane /> {isSubmitting ? t.sending : t.send}
                    </motion.button>
                </form>
            </div>
        </section>
    );
};

const Input = ({ label, name, type = "text", register, required, pattern, error }) => {
    const icons = {
        name: <FaUser className="text-orange-500" />,
        email: <FaEnvelope className="text-orange-500" />,
        subject: <FaTag className="text-orange-500" />,
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-1"
        >
            <label htmlFor={name} className="block text-md font-medium text-gray-800 dark:text-gray-100">{label}</label>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {icons[name]}
                </span>
                <input
                    type={type}
                    id={name}
                    className="w-full pl-10 pr-4 py-2 bg-white/80 dark:bg-blue-950/30 border border-gray-200 dark:border-gray-500 text-gray-800 dark:text-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    {...register(name, { required, pattern })}
                />
            </div>
            {error && <p className="text-sm text-red-600">{error.message}</p>}
        </motion.div>
    );
};

const Textarea = ({ label, name, register, required, error }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-1"
    >
        <label htmlFor={name} className="block text-md font-medium text-gray-800 dark:text-gray-100">{label}</label>
        <div className="relative">
            <span className="absolute top-3 left-3 text-orange-500">
                <FaRegCommentDots />
            </span>
            <textarea
                id={name}
                rows="5"
                className="w-full pl-10 pr-4 py-2 bg-white/80 dark:bg-blue-950/30 border border-gray-200 dark:border-gray-500 text-gray-800 dark:text-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                {...register(name, { required })}
            ></textarea>
        </div>
        {error && <p className="text-sm text-red-600">{error.message}</p>}
    </motion.div>
);

export default Contact;
