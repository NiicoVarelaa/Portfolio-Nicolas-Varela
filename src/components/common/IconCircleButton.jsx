import PropTypes from "prop-types";

const IconCircleButton = ({
  href,
  label,
  icon: Icon,
  className = "",
  iconSize = 20,
  ...props
}) => {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      type={!href ? "button" : undefined}
      className={`p-2.5 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 ${className}`}
      aria-label={label}
      tabIndex={0}
      {...props}
    >
      <Icon size={iconSize} className="text-gray-900 dark:text-white" />
    </Tag>
  );
};

IconCircleButton.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  className: PropTypes.string,
  iconSize: PropTypes.number,
};

export default IconCircleButton;
