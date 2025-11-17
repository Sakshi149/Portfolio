import { ArrowRight, ExternalLink } from "lucide-react";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills.",
    image: "/projects/portfolio-website.png",
    tags: ["React", "Tailwind CSS", "Vite"],
    demoUrl: "https://portfolio-ten-opal-9e0smn40qw.vercel.app/",
    githuburl: "https://github.com/Sakshi149/Portfolio.git",
  },
  {
    id: 2,
    title: "Weather Application",
    description:
      "A web app that provides real-time weather updates for any location.",
    image: "/projects/weather-app.png",
    tags: ["React", "CSS", "OpenWeatherMap API"],
    githuburl: "https://github.com/Sakshi149/Weather-Application.git",
  },
  {
    id: 3,
    title: "Library Management System",
    description:
      "A web application to manage library resources and track borrowed books.",
    image: "/projects/library-management.png",
    tags: ["React", "Node.js", "MySQL", "Lombok"],
    githuburl: "https://github.com/Sakshi149/Library-Management-System.git",
  },
  {
    id: 4,
    title: "Employee Management System",
    description:
      "A web application to manage employee records and track performance.",
    image: "/projects/employee-management.png",
    tags: ["React", "Node.js", "MySQL", "Lombok"],
    githuburl: "https://github.com/Sakshi149/Employee-Management-System.git",
  },
  {
    id: 5,
    title: "Task Management",
    description: "A web application to manage and track tasks efficiently.",
    image: "/projects/task-management.png",
    tags: ["React", "Node.js", "Material UI", "MySQL"],
    githuburl: "https://github.com/Sakshi149/Task_Management.git",
  },
  {
    id: 6,
    title: "Todo List App",
    description:
      "A simple and intuitive todo list application to organize tasks.",
    image: "/projects/todo-list.png",
    tags: ["React", "Typescript", "Material UI"],
    githuburl: "https://github.com/Sakshi149/ToDo-List.git",
  },
  {
    id: 7,
    title: "Product Management System",
    description: "A website to perform crud operation on the product.",
    image: "/projects/product-management.png",
    tags: ["React", "Node.js", "MySQL", "Bootstrap"],
    githuburl: "https://github.com/Sakshi149/Product-Management-System.git",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-purple-400"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in
          web development and problem-solving. Each project highlights my
          ability to create efficient and user-friendly applications using
          various technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}

                  {project.githuburl && (
                    <a
                      href={project.githuburl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/Sakshi149"
            target="_blank"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
