import PropTypes from "prop-types";

const ProfileImageAbout = ({
  src,
  alt = "Nicolás Varela - Desarrollador Full Stack",
}) => (
  <figure className="w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
    <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay z-10 pointer-events-none"></div>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
    />
  </figure>
);

ProfileImageAbout.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ProfileImageAbout;
