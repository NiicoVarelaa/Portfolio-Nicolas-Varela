import { useCallback } from "react";

/**
 * Hook personalizado para manejar la descarga del CV
 * @param {string} cvPath - Ruta del archivo PDF del CV
 * @param {string} fileName - Nombre del archivo a descargar
 * @returns {Function} Función para iniciar la descarga
 */
const useDownloadCV = (cvPath, fileName = "CV.pdf") => {
  const downloadCV = useCallback(() => {
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [cvPath, fileName]);

  return downloadCV;
};

export default useDownloadCV;
