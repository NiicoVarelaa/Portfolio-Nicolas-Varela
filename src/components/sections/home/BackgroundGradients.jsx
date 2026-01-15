import { memo } from "react";

const BackgroundGradients = memo(() => (
  <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
    <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]" />
    <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
  </div>
));

BackgroundGradients.displayName = "BackgroundGradients";

export default BackgroundGradients;
