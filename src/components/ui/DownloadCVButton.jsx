import { FileDown } from "lucide-react";
import PropTypes from "prop-types";

const DownloadCVButton = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="group flex items-center gap-2 px-6 py-2.5 text-sm bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 whitespace-nowrap hover:scale-105 active:scale-95"
  >
    <FileDown
      size={18}
      className="transition-transform duration-300 group-hover:translate-y-1"
    />
    {label}
  </button>
);

DownloadCVButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default DownloadCVButton;
