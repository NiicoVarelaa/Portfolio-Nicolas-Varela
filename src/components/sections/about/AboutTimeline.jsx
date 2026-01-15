import { memo } from "react";
import TimelineItem from "./TimelineItem";

const AboutTimeline = memo(({ timeline }) => (
  <ol className="w-full lg:w-1/2 space-y-8 sm:space-y-10" role="list">
    {timeline.map((item, index) => (
      <TimelineItem
        key={item.icon || index}
        item={item}
        isLast={index === timeline.length - 1}
      />
    ))}
  </ol>
));

AboutTimeline.displayName = "AboutTimeline";

export default AboutTimeline;
