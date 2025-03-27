import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div
            className="mx-auto w-full min-h-[50vh] px-4 sm:px-6 lg:px-8"
            id="contact"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-4xl mx-auto mt-16 flex items-center justify-center flex-col gap-8 sm:gap-12"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-400"
                >Contactame</motion.h1>

                <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-300 text-lg text-center max-w-2xl leading-relaxed"
                >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nulla
                </motion.p>
                <button className="relative overflow-hidden group bg-gradient-to-r from-orange-600 via-amber-500 to-orange-400 px-8 py-4 md:text-lg rounded-full font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 text-white">
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
            </motion.div>
        </div>
    );
};

export default Contact;
