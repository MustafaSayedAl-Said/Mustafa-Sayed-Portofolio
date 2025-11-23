import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const projectsData = [
  {
    id: 1,
    title: "Project One",
    description: "Description for project one.",
    fullDescription: `
-User Authentication & Role Management: Secure login and registration using ASP Identity, with role-based access for Admins and Users.

-Workspace & Directory Management: Users can create, modify, and delete directories within their workspace.

-Document Operations: Full CRUD support for documents, with multi-part APIs for file uploads, downloads, and preview functionalities, with options for public/private visibility.

-Filtering & Sorting: Users can search directories and documents, and sort them by name or date for improved usability.

-Admin Features: Admins can list all users, view and edit the contents of user workspaces, and lock users to prevent login if needed.

-Action Logging with RabbitMQ & SignalR: Admins can monitor real-time action logs (upload, download, preview) with RabbitMQ handling messaging and SignalR delivering live notifications.

-Pagination: Added pagination to improve performance and the user experience when navigating large datasets.

-Soft Deletion: Users can soft-delete documents and directories, ensuring they can recover them later if necessary.

-Breadcrumbs for Navigation: Integrated breadcrumbs on the frontend to make navigation through workspaces and directories easier and more intuitive.
    `,
    image: "/dms.png",
    tags: ["Angular", ".NET Core", "PostgreSQL", "Docker", "RabbitMQ", "SignalR"],
    demoUrl: "https://dms-client-production.up.railway.app",
    githubUrl: "https://github.com/MustafaSayedAl-Said/DMS-Deployment",
    features: [
      "Workspace & Directory Management",
      "Document Operations",
      "Filtering & Sorting",
      "Admin Features",
      "Action Logging with RabbitMQ & SignalR",
      "Pagination"
    ],
    technologies: {
      frontend: ["Angular", "TypeScript", "RxJS", "Tailwind CSS"],
      backend: [".NET Core 8", "Entity Framework", "SignalR", "RabbitMQ"],
      database: ["PostgreSQL"],
      deployment: ["Docker", "Railway"]
    }
  }
    ,  {
    id: 2,
    title: "Movies App",
    description: "A movie browsing application that allows users to search, and filter various movies using The Movie Database (TMDb) API.",
    fullDescription: `
-Search & Filter: Users can search for movies by title and filter results based on genres, release dates, and ratings.
-Search Debouncing: Implemented debouncing to optimize API calls during user input, reducing unnecessary requests and improving performance.
`,
    image: "/movies-app.png",
    tags: ["React", "TypeScript", "TMDb API", "Tailwind CSS"],
    demoUrl: "https://react-movies-app-ten-indol.vercel.app/",
    githubUrl: "https://github.com/MustafaSayedAl-Said/react-movies-app"
    ,
    features: [
        "Search & Filter",
        "Search Debouncing"
        ],
    technologies: {
        frontend: ["React", "TypeScript", "Tailwind CSS"],
        backend: [],
        database: [],
        deployment: ["Vercel"]
        }
    }
    
];

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <ThemeToggle />
      <StarBackground />

      <main className="flex-1">
        <section className="py-24 px-4 relative">
          <div className="container max-w-4xl mx-auto">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>

            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="h-96 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-secondary text-secondary-foreground border rounded-full px-3 py-1 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mb-8">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button flex items-center gap-2"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button flex items-center gap-2"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>

                {/* About */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">About the Project</h2>
                  <p className="whitespace-pre-line text-muted-foreground leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-primary mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">
                        Frontend
                      </h3>
                      <ul className="space-y-1">
                        {project.technologies.frontend.map((tech, index) => (
                          <li key={index} className="text-muted-foreground">
                            • {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">
                        Backend
                      </h3>
                      <ul className="space-y-1">
                        {project.technologies.backend.map((tech, index) => (
                          <li key={index} className="text-muted-foreground">
                            • {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">
                        Database
                      </h3>
                      <ul className="space-y-1">
                        {project.technologies.database.map((tech, index) => (
                          <li key={index} className="text-muted-foreground">
                            • {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">
                        Deployment
                      </h3>
                      <ul className="space-y-1">
                        {project.technologies.deployment.map((tech, index) => (
                          <li key={index} className="text-muted-foreground">
                            • {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
