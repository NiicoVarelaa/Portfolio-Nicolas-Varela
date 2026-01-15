import { memo } from "react";

const CategoryHeader = memo(
  ({ icon: Icon, title, skillsCount, technologiesLabel }) => (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
          <Icon size={24} className="text-white" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {skillsCount} {technologiesLabel}
          </p>
        </div>
      </div>
    </div>
  )
);

CategoryHeader.displayName = "CategoryHeader";
export default CategoryHeader;
