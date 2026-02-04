/*
 * DESIGN: Minimalist Editorial / Swiss Design
 * - Ruthless simplicity with strong typographic hierarchy
 * - Generous whitespace, single accent color (teal)
 * - Libre Baskerville for headings, Source Sans 3 for body
 */

import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Resume Data
const resumeData = {
  name: "John Xu",
  title: "Senior Data Engineer & Architect",
  email: "johnx93@gmail.com",
  linkedin: "linkedin.com/in/xu-",
  location: "Vancouver, BC",
  summary: "Strategic Senior Data Engineer & Architect with 7+ years of experience building high-performance, scalable data platforms and AI-ready infrastructure. Expert in Modern Data Stack, Distributed Computing (Spark), and Cloud Architecture (Azure/AWS). Proven track record in reducing operational costs by 30% and improving data reliability through automated observability and CI/CD.",
  
  skills: {
    "Languages & Databases": ["Python", "SQL", "Scala", "R", "PostgreSQL", "Snowflake", "Azure SQL"],
    "Data Engineering": ["Apache Spark", "Databricks", "Delta Lake", "Apache Iceberg", "dbt", "Apache Airflow", "Azure Data Factory"],
    "Cloud & Infrastructure": ["Azure Synapse", "ADLS", "Event Hubs", "AWS S3", "Redshift", "Lambda", "Terraform", "Docker", "Kubernetes", "GitHub Actions"],
    "Observability & Governance": ["Monte Carlo", "Collibra", "LeanIX", "TOGAF 9"],
    "AI & Analytics": ["MLflow", "LangChain", "RAG Pipelines", "Power BI", "Plotly", "Scikit-learn"]
  },
  
  experience: [
    {
      title: "Data Architect / Senior Data Engineer",
      company: "Pacific Blue Cross",
      period: "Nov 2022 – Present",
      highlights: [
        "Architected and deployed a multi-petabyte Lakehouse architecture using Databricks and Delta Lake, improving query performance by 50%",
        "Engineered CI/CD pipelines using Azure DevOps and Terraform, automating deployment of 100+ data assets",
        "Optimized Spark jobs resulting in $15k/month reduction in Azure Synapse compute costs",
        "Integrated MLflow into production pipelines, ensuring 99.9% model serving reliability"
      ]
    },
    {
      title: "Business Intelligence Lead",
      company: "Provincial Health Services Authority (PHSA)",
      period: "Feb 2021 – Oct 2022",
      highlights: [
        "Scaled telemetry data ingestion to handle 5TB+ daily volume for Zoom Virtual Health platform",
        "Modernized legacy ETL processes, reducing data latency from 24 hours to near real-time",
        "Developed automated data quality frameworks, reducing manual reconciliation by 70%",
        "Delivered executive dashboards providing insights into 1M+ virtual health visits"
      ]
    },
    {
      title: "Business Process Analyst - Enterprise Architecture",
      company: "Island Health (VIHA)",
      period: "Dec 2018 – Jan 2021",
      highlights: [
        "Spearheaded cloud migration of medical imaging archives to AWS using Docker and Kubernetes",
        "Designed the Controlled Data Disclosure Environment (CDDE) ensuring 100% PII compliance",
        "Automated capacity forecasting models improving resource allocation accuracy by 25%"
      ]
    },
    {
      title: "Software Engineer",
      company: "CSG Smart Science and Technology Co., Ltd.",
      period: "Jan 2018 – Dec 2018",
      highlights: [
        "Developed NLP pipelines for Mandarin text processing using Jieba and NLTK",
        "Implemented ensemble classifiers achieving 15% improvement in model precision"
      ]
    }
  ],
  
  education: [
    { degree: "Bachelor of Science, Mathematics and Statistics", school: "University of Victoria" },
    { degree: "Bachelor of Engineering, Software Engineering", school: "McGill University" }
  ],
  
  certifications: ["TOGAF 9 Certified", "Certified SAFe® 6 Architect"],
  
  projects: [
    { name: "Arctic Sea Ice Analysis", description: "Led research using satellite data and R to project 15-year recession trajectories; awarded 'Best Project Overall'" },
    { name: "Turbulent Flow Modeling", description: "Conducted computational research on stochastic processing and advanced numerical analysis" },
    { name: "PMI Air Quality Sensor #82799", description: "Developed and deployed an air quality monitoring sensor for Cordova Bay, operating 24/7 year-round. Contributing to the open-source Sensor.Community project.", link: "https://sensor.community/en/" }
  ]
};

// Section Component
function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <motion.section 
      id={id}
      className="py-16 md:py-24 border-t border-border"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
              {label}
            </span>
          </div>
          <div className="lg:col-span-9">
            {children}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="font-serif text-lg font-bold">JX</a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">About</a>
              <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">Skills</a>
              <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">Experience</a>
              <a href="#education" className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline">Education</a>
            </div>
            <a 
              href="mailto:johnx93@gmail.com"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(/images/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center right'
          }}
        />
        
        <div className="container relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p 
              className="text-sm font-medium tracking-widest uppercase text-primary mb-4"
              variants={staggerItem}
            >
              {resumeData.title}
            </motion.p>
            <motion.h1 
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
              variants={staggerItem}
            >
              {resumeData.name}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl"
              variants={staggerItem}
            >
              Building high-performance data platforms and AI-ready infrastructure. 
              7+ years bridging complex data engineering with business-critical solutions.
            </motion.p>
            <motion.div 
              className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
              variants={staggerItem}
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {resumeData.location}
              </span>
              <span className="hidden sm:inline text-border">|</span>
              <a 
                href={`mailto:${resumeData.email}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                {resumeData.email}
              </a>
              <span className="hidden sm:inline text-border">|</span>
              <a 
                href={`https://${resumeData.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <Section id="about" label="About">
        <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
          {resumeData.summary}
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Specialized in bridging the gap between complex data engineering and business-critical AI/ML solutions. 
          Passionate about building systems that scale and deliver measurable business impact.
        </p>
      </Section>

      {/* Skills Section */}
      <Section id="skills" label="Technical Skills">
        <motion.div 
          className="space-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(resumeData.skills).map(([category, skills]) => (
            <motion.div key={category} variants={staggerItem}>
              <h3 className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" label="Experience">
        <motion.div 
          className="space-y-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {resumeData.experience.map((job, index) => (
            <motion.article key={index} variants={staggerItem} className="group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold">{job.title}</h3>
                  <p className="text-primary font-medium">{job.company}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{job.period}</span>
              </div>
              <ul className="space-y-3">
                {job.highlights.map((highlight, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-border group-hover:border-primary/30 transition-colors">
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      {/* Education Section */}
      <Section id="education" label="Education">
        <motion.div 
          className="space-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {resumeData.education.map((edu, index) => (
            <motion.div key={index} variants={staggerItem}>
              <h3 className="font-serif text-xl font-bold">{edu.degree}</h3>
              <p className="text-muted-foreground">{edu.school}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-4">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {resumeData.certifications.map((cert) => (
              <span 
                key={cert}
                className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" label="Projects">
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {resumeData.projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={staggerItem}
              className="p-6 bg-secondary/50 rounded-lg"
            >
              <h3 className="font-serif text-lg font-bold mb-2">{project.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  View Project
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Contact CTA */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container">
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Let's Build Something Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Open to discussing data engineering challenges, architecture decisions, 
              or new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="min-w-[200px]">
                <a href={`mailto:${resumeData.email}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[200px]">
                <a 
                  href={`https://${resumeData.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} John Xu. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a 
                href={`mailto:${resumeData.email}`}
                className="hover:text-foreground transition-colors"
              >
                Email
              </a>
              <a 
                href={`https://${resumeData.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
