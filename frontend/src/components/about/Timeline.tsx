import React from "react";
import SectionHeading from "../common/SectionHeading";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineEvent[] = [
  {
    year: "2024",
    title: "Founded Levenn",
    description:
      "Started a company focused on affordable and clean renewable energy solutions using solar power.",
  },
  {
    year: "2023",
    title: "STEM Bootcamps",
    description:
      "Participated in STEM bootcamps in Tanzania and Rwanda, training students.",
  },
];

const Timeline: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <SectionHeading title="My Journey" />
        <div className="space-y-12">
          {timelineData.map((event, index) => (
            <div key={index} className="flex flex-col md:flex-row">
              <div className="md:w-1/4 text-center md:text-right pr-0 md:pr-8">
                <p className="text-gray-600 text-lg">{event.year}</p>
              </div>
              <div className="md:w-3/4 mt-4 md:mt-0">
                <h3 className="text-xl font-semibold text-gray-800">
                  {event.title}
                </h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;