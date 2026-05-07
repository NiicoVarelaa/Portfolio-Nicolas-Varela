import PropTypes from "prop-types";

const ProfileImageHome = ({ src, alt = "Nicolás Varela", children }) => (
  <div className="relative lg:w-1/2 flex justify-center lg:justify-end">
    <div className="relative w-[70vw] h-[70vw] max-w-[16rem] max-h-[16rem] sm:w-[60vw] sm:h-[60vw] sm:max-w-[20rem] sm:max-h-[20rem] lg:max-w-[22rem] lg:max-h-[22rem] xl:max-w-[24rem] xl:max-h-[24rem] rounded-full p-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-2xl group">
      <div className="w-full h-full rounded-full overflow-hidden relative">
        <img
          src={src}
          className="w-full h-full object-cover object-[center_25%] rounded-full transition-transform duration-700 ease-in-out group-hover:scale-110"
          alt={alt}
        />
      </div>
      {children}
    </div>
  </div>
);

ProfileImageHome.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  children: PropTypes.node,
};

export default ProfileImageHome;
