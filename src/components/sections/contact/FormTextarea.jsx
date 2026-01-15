import { memo } from "react";
import { motion } from "framer-motion";

const FormTextarea = memo(
  ({ label, name, icon: Icon, register, required, error }) => (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      <div className="relative group">
        <span className="absolute top-3.5 left-4 text-gray-400 group-focus-within:text-orange-500 transition-colors duration-300">
          <Icon size={18} aria-hidden="true" />
        </span>
        <textarea
          id={name}
          rows="5"
          className={`w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800/50 border ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-orange-500/20"
          } text-gray-900 dark:text-white rounded-xl shadow-sm focus:ring-4 focus:outline-none transition-all duration-300 resize-none`}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${name}-error` : undefined}
          {...register(name, { required })}
        />
      </div>
      {error && (
        <motion.p
          id={`${name}-error`}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-red-500 font-medium ml-1"
          role="alert"
        >
          {error.message}
        </motion.p>
      )}
    </div>
  )
);

FormTextarea.displayName = "FormTextarea";

export default FormTextarea;
