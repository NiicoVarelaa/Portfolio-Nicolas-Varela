const ProfileImageHome = ({ src, alt = "Nicolás Varela", children }) => (
  <div className="relative lg:w-1/2 flex justify-center lg:justify-end">
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-2xl group">
      <div className="w-full h-full rounded-full overflow-hidden relative">
        <img
          src={src}
          className="w-full h-full object-cover rounded-full transition-transform duration-700 ease-in-out group-hover:scale-110"
          alt={alt}
        />
      </div>
      {children}
    </div>
  </div>
);

export default ProfileImageHome;
