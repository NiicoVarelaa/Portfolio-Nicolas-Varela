import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `mailto:niicovarelaa@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`)}`;
    };

    return (
        <div className="mx-auto max-w-6xl p-4 sm:p-10 text-white" id="contacto">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-6xl flex items-center gap-3 text-orange-950 dark:text-gray-50 mb-10"
            >
                <FaPaperPlane /> Contacto
            </motion.h1>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col lg:flex-row gap-10"
            >
                {/* Sección de información de contacto */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4"
                    >
                        <div className="text-orange-500 dark:text-orange-400 mt-1">
                            <FaPhone size={20} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-orange-950 dark:text-gray-100">Teléfono</h3>
                            <p className="text-gray-700 dark:text-gray-300">+54 11 1234-5678</p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4"
                    >
                        <div className="text-orange-500 dark:text-orange-400 mt-1">
                            <FaEnvelope size={20} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-orange-950 dark:text-gray-100">Email</h3>
                            <p className="text-gray-700 dark:text-gray-300">niicovarelaa@gmail.com</p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4"
                    >
                        <div className="text-orange-500 dark:text-orange-400 mt-1">
                            <FaMapMarkerAlt size={20} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-orange-950 dark:text-gray-100">Ubicación</h3>
                            <p className="text-gray-700 dark:text-gray-300">Buenos Aires, Argentina</p>
                        </div>
                    </motion.div>
                </div>

                {/* Formulario de contacto */}
                <div className="w-full lg:w-1/2">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-1"
                        >
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="space-y-1"
                        >
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-1"
                        >
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Asunto</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="space-y-1"
                        >
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
                            ></textarea>
                        </motion.div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2"
                        >
                            <FaPaperPlane /> Enviar Mensaje
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
