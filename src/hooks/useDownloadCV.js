import { useCallback } from "react";

const useDownloadCV = (cvPath, fileName = "CV.pdf") => {
  const downloadCV = useCallback(async () => {
    const response = await fetch(cvPath);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }, [cvPath, fileName]);

  return downloadCV;
};

export default useDownloadCV;