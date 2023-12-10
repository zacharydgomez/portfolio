import React from "react";
import Card from "./card";
interface ExperienceEntry {
  title: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

const Experience = () => {
  const experiences: ExperienceEntry[] = [
    {
      title: "Office Manager, Shelly G Therapy",
      duration: "2020-2023",
      location: "New Orleans, LA",
      responsibilities: [
        "Established a seamless workflow to transition the company to remote therapy services.",
        "Facilitated the onboarding process with insurance companies, handling the signing up and billing procedures.",
        "Effectively managed schedules and efficiently booked appointments for clients.",
      ],
    },
    {
      title: "Operations Specialist, Trilly CheeseSteaks",
      duration: "2017-2022",
      location: "New Orleans, LA",
      responsibilities: [
        "Developed recipes for the company's products, utilizing science-based approaches to create vegan meat.",
        "Designed and implemented efficient workflows to streamline production and increase productivity.",
        "Maintained strong relationships with suppliers, vendors, and stakeholders.",
      ],
    },
   
  ];

  return (

    // <div className="m-8">
    
    //   <section id="experience">
    //     {experiences.map((experience, index) => (
    //       <Card key={index} 
    //       title={experience.title} 
    //       responsibilities={experience.responsibilities} />
    //     ))}
    //   </section>
    // </div>


    <div className="m-8">
     
      <section id="experience">
        {experiences.map((experience, index) => (
          <div key={index}>
            <h1 className="text-xl font-semibold mb-2">{experience.title}</h1>
            <p className="text-base text-gray-700">
              {experience.duration} | {experience.location}
            </p>
            <ul className="list-disc pl-6">
              {experience.responsibilities.map((responsibility, i) => (
                <li key={i} className="text-base text-gray-700">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Experience;