import { Briefcase, Code, User } from "lucide-react";
import resumePDF from "../assets/Sakshi_Chavan_Resume.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-purple-400">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold">Curious Full Stack Developer | Continuously Evolving in the World of Web Technologies</h3>

            <p className="text-muted-foreground">
              I’m a passionate <strong>Full Stack Developer</strong> skilled in
              building dynamic, responsive, and efficient web applications using
              a wide range of modern technologies. I love transforming ideas
              into functional products that provide great user experiences and
              real-world impact.
            </p>

            <p className="text-muted-foreground">
              My technical toolkit includes <strong>HTML</strong>,{" "}
              <strong>CSS</strong>, and <strong>JavaScript</strong>… I use{" "}
              <strong>React.js</strong> on the frontend and{" "}
              <strong>Node.js</strong> / <strong>Python</strong> with{" "}
              <strong>MySQL</strong> / <strong>MongoDB</strong> on the backend.
            </p>

            <p className="text-muted-foreground">
              I also work with <strong>Java</strong> for backend logic, writing
              clean, maintainable code with a focus on performance and security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
              <a
                href={resumePDF}
                download="Sakshi_Chavan_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive, dynamic websites with modern
                    technologies and frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and engaging user
                    experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from concept to completion with effective
                    planning and execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
