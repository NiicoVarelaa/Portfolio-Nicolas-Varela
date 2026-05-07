import { useCallback } from "react";

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
