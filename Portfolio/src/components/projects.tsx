import Card from "./card";
interface Project {
  title: string;
  description: string;
}
const Projects = () =>{
const projects: Project[] = [
    {
      title: "Get-a-Way | github.com/mighty-morphin-power-rangers/getaway",
      description:
        "Developed a TypeScript-based habit tracker with Node.js and MySQL into a full-stack application. Worked collaboratively with designers and product managers in an Agile environment, utilizing Scrum methodology to ensure the timely delivery of features and functionality. Configured an nginx server as a reverse proxy for the application, load balancing traffic and caching resources to improve performance, while also securing the application with SSL encryption using Certbot.",
    },
    {
      title: "CRUDology | github.com/the-crudologists/crudstrology",
      description:
        "Revamped a legacy codebase and improved the overall performance of the social media platform. Implemented a journaling feature utilizing Quill.js for a more intuitive user experience. Maintained a strong commitment to best coding practices, including utilizing CRUD methodologies and regularly conducting code reviews to ensure optimal functionality.",
    },
    {
      title: "Travel Flix | github.com/AppleBoat/TravelFlix",
      description:
        "Collaborated with a team of developers to design and implement a travel app using React, integrating an API to provide users with up-to-date information on Netflix availability from country to country. Utilized Material-UI's pre-built UI components and styling system to rapidly develop a polished and professional-looking user interface, while also customizing and extending components as needed. Implemented a dark mode feature, improving accessibility for users with visual impairments. Deployed on an Amazon AWS EC2 Instance, configuring server infrastructure and setup security groups.",
    },
    // Add more projects here...
  ];


  return (
   
    <div className="m-8">
      {/* Your other sections */}
      <section id="projects">
        {projects.map((project, index) => (
          <Card key={index} title={project.title} description={project.description} />
        ))}
      </section>
    </div>
  );
}

export default Projects
