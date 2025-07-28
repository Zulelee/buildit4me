import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarBorder } from "@/components/ui/star-border";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";

// Sample project data - you can replace with your actual projects
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    timeline: "3 months",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    description:
      "A full-featured e-commerce platform with payment processing, inventory management, and admin dashboard.",
  },
  {
    id: 2,
    title: "AI Chatbot Assistant",
    timeline: "2 months",
    techStack: ["Python", "OpenAI", "FastAPI", "React"],
    description:
      "Intelligent chatbot for customer support with natural language processing and automated responses.",
  },
  {
    id: 3,
    title: "Mobile Fitness App",
    timeline: "4 months",
    techStack: ["React Native", "Firebase", "Redux", "Expo"],
    description:
      "Cross-platform mobile app for fitness tracking with workout plans and progress monitoring.",
  },
  {
    id: 4,
    title: "Real Estate Management System",
    timeline: "5 months",
    techStack: ["Next.js", "PostgreSQL", "Prisma", "AWS"],
    description:
      "Comprehensive property management system with tenant portal and financial tracking.",
  },
  {
    id: 5,
    title: "Voice-Controlled Smart Home",
    timeline: "3 months",
    techStack: ["Python", "Raspberry Pi", "WebRTC", "IoT"],
    description:
      "Voice-activated home automation system with device control and scheduling features.",
  },
  {
    id: 6,
    title: "Automated Workflow Platform",
    timeline: "4 months",
    techStack: ["Node.js", "Docker", "Kubernetes", "Redis"],
    description:
      "Business process automation platform with drag-and-drop workflow builder and analytics.",
  },
];

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="bg-black">
        {/* Header */}
        <div className="pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Work
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our portfolio of successful projects that showcase our
                expertise in web development, mobile apps, AI solutions, and
                automation systems.
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-black/50 backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:scale-105 group"
              >
                <div className="p-6">
                  {/* Project Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        {project.timeline}
                      </span>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-orange-500/10 text-orange-400 border border-orange-500/20 hover:bg-orange-500/20 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-black/50 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 mb-6">
                Let&apos;s discuss your ideas and bring your vision to life with
                our expert team.
              </p>
              <Chatbot>
                <StarBorder
                  className="text-lg font-semibold"
                  color="#ff6b35"
                  speed="4s"
                >
                  <span className="flex items-center gap-2">
                    Tell Us What You Need
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </StarBorder>
              </Chatbot>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
