const ProfileImageHome = ({ src, alt = "Nicolás Varela", children }) => (
  <div className="relative lg:w-1/2 flex justify-center lg:justify-end">
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-2xl">
      <div className="w-full h-full rounded-full overflow-hidden relative">
        <img
          src={src}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 rounded-full"
          alt={alt}
        />
        <div className="absolute inset-0 rounded-full ring-inset ring-2 ring-black/5 dark:ring-white/10"></div>
      </div>
      {children}
    </div>
  </div>
);

export default ProfileImageHome;
