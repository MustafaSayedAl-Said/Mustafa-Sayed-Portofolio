import { ArrowRight, ExternalLink, Github, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Document Management System",
    description: "A web application for managing documents with user authentication, workspace management, and real-time action logging.",
    image: "/dms.png",
    link: "https://dms-client-production.up.railway.app",
    tags: ["Angular", ".NET Core", "PostgreSQL", "Docker", "RabbitMQ", "SignalR"],
    demoUrl: "https://dms-client-production.up.railway.app",
    githubUrl: "https://github.com/MustafaSayedAl-Said/DMS-Deployment",
  },
  {
    id: 2,
    title: "Movies App",
    description: "A movie browsing application that allows users to search, and filter various movies using The Movie Database (TMDb) API.",
    image: "/movies-app.png",
    link: "https://react-movies-app-ten-indol.vercel.app/",
    tags: ["React", "TypeScript", "TMDb API", "Tailwind CSS"],
    demoUrl: "https://react-movies-app-ten-indol.vercel.app/",
    githubUrl: "https://github.com/MustafaSayedAl-Said/react-movies-app"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold md:text-4xl mb-4 text-center">
          {" "}
          Featured
          <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my featured projects that showcase my skills and
          expertise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-secondary text-secondary-foreground border rounded-full px-2 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      title="Read More"
                    >
                      <FileText size={20} />
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/MustafaSayedAl-Said"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};
