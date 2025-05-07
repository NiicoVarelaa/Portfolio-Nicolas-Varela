import { motion } from 'framer-motion';
import nico from "../../public/nico.jpeg";
import Badge from './Badge';
import SocialButtons from './SocialButtons';
import { FaLinkedinIn, FaFileDownload } from 'react-icons/fa';
import cvFile from "../../public/cv.pdf";
import { useLanguage } from "../context/LanguageContext";
import es from "../locales/es";
import en from "../locales/en";

const languages = { es, en };

const Home = () => {
    const { lang } = useLanguage();
    const t = languages[lang].home; // Acceder solo a la sección home

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = lang === 'es' ? 'CV_Nicolas_Varela.pdf' : 'CV_Nicolas_Varela.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="w-full min-h-[100vh] flex items-center justify-center py-10" id="home">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col items-center md:items-start gap-6 w-full md:w-1/2 text-center md:text-left"
                    >
                        <div className="w-full flex justify-center md:justify-start">
                            <Badge>{t.availableForWork}</Badge>
                        </div>

                        <div className="space-y-2 w-full">
                            <h2 className="text-gray-800 dark:text-gray-100 text-2xl md:text-3xl font-semibold">
                                {t.greeting} 👋 {t.iAm}
                            </h2>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-orange-500 leading-tight">
                                Nicolás Varela
                            </h1>
                            <h3 className="text-xl font-semibold md:text-2xl text-gray-700 dark:text-gray-200">
                                {t.fullStackDeveloper}
                            </h3>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 max-w-md">
                            {t.homeDescription}
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            <button 
                                onClick={handleDownloadCV}
                                className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors"
                            >
                                <FaFileDownload className="size-4" />
                                {t.downloadCV}
                            </button>
                            <SocialButtons href="https://www.linkedin.com/in/niicolasvarelaa/">
                                <FaLinkedinIn className="size-4" />
                                LinkedIn
                            </SocialButtons>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-[250px] md:w-[350px] aspect-square rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-700"
                    >
                        <img
                            src={nico}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            alt="Nicolas Varela"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
