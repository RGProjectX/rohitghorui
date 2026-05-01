import { GraduationCap, Award, Calendar, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
  link?: string;
}

const education: Education[] = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "University of Mumbai",
    period: "2020 – 2024",
    description: "Focused on Data Structures, Algorithms, Operating Systems, and Database Management Systems.",
  },
];

const certifications: Certification[] = [
  {
    name: "Java SE 11 Developer",
    issuer: "Oracle",
    year: "2023",
  },
  {
    name: "Spring Professional Certification",
    issuer: "VMware",
    year: "2023",
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
  },
];

const EducationSection = () => (
  <section id="education" className="section-padding relative overflow-hidden">
    <div className="container-narrow relative z-10">
      <ScrollReveal>
        <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
          Academics
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Education & Certifications
        </h2>
        <div className="h-1 w-12 rounded-full mb-12 bg-gradient-to-r from-primary to-secondary" />
      </ScrollReveal>

      {/* Education */}
      <div className="mb-14">
        {education.map((edu, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay={idx * 100}
            className="rounded-xl border border-border/20 bg-card/30 p-6 transition-all duration-300 hover:border-primary/20 hover:bg-card/50"
          >
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 shrink-0 mt-0.5">
                <GraduationCap className="h-5 w-5 text-primary" />
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                <p className="text-sm text-primary font-medium mt-0.5">{edu.institution}</p>
                <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {edu.period}
                </div>
                {edu.description && (
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <ScrollReveal>
        <h3 className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-6">
          Certifications
        </h3>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay={idx * 100}
            className="group rounded-xl border border-border/20 bg-card/30 p-5 transition-all duration-300 hover:border-primary/20 hover:bg-card/50"
          >
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/10 shrink-0">
                <Award className="h-4 w-4 text-primary" />
              </span>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-foreground leading-snug">
                  {cert.name}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground/60 mt-0.5">{cert.year}</p>
              </div>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary/50 hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
