import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
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
        Swal.fire({
            title: t.sendingTitle,
            text: t.sendingText,
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

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
        Swal.close();

        if (result.success) {
            Swal.fire({
                title: t.successTitle,
                text: t.successText,
                icon: 'success',
                confirmButtonColor: '#f97316',
                confirmButtonText: 'OK'
            });
            reset();
        } else {
            Swal.fire({
                title: t.errorTitle,
                text: t.errorText,
                icon: 'error',
                confirmButtonColor: '#ef4444',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <section className="mx-auto max-w-6xl w-full min-h-screen px-4 sm:px-10 py-20 flex items-center" id="contacto">
            <div className="w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-8 sm:mb-8"
                >
                    {t.sectionTitle}
                </motion.h2>

                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-1/2 space-y-6">
                        <Info icon={<FaPhone />} title={t.phone} text="+54 381 3487-709" />
                        <Info icon={<FaEnvelope />} title="Email" text="niicovarelaa@gmail.com" />
                        <Info icon={<FaMapMarkerAlt />} title={t.location} text="Tucumán, Argentina" />
                    </div>

                    <div className="w-full lg:w-1/2">
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
                </div>
            </div>
        </section>
    );
};

const Info = ({ icon, title, text }) => (
    <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
        <div className="text-orange-500 mt-1">{icon}</div>
        <div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{text}</p>
        </div>
    </motion.div>
);

const Input = ({ label, name, type = "text", register, required, pattern, error }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-1"
    >
        <label htmlFor={name} className="block text-md font-medium text-orange-500">{label}</label>
        <input
            type={type}
            id={name}
            className="w-full px-4 py-2 bg-white/80 dark:bg-blue-900/60 border border-orange-200 dark:border-orange-500 text-orange-950 dark:text-orange-100 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
            {...register(name, { required, pattern })}
        />
        {error && <p className="text-sm text-red-600">{error.message}</p>}
    </motion.div>
);

const Textarea = ({ label, name, register, required, error }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-1"
    >
        <label htmlFor={name} className="block text-md font-medium text-orange-500">{label}</label>
        <textarea
            id={name}
            rows="5"
            className="w-full px-4 py-2 bg-white/80 dark:bg-blue-900/60 border border-orange-200 dark:border-orange-500 text-orange-950 dark:text-orange-100 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
            {...register(name, { required })}
        ></textarea>
        {error && <p className="text-sm text-red-600">{error.message}</p>}
    </motion.div>
);

export default Contact;
