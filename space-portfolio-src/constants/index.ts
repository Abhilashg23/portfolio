import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";

// ── Skill icons visible in /public/skills/
const HAS_ICON = new Set([
  "html.png","css.png","js.png","node.png","mongodb.png","express.png",
  "firebase.png","postgresql.png","mysql.png","docker.png","figma.png",
  "react.png","redux.png","ts.png","next.png","tailwind.png","graphql.png",
  "prisma.png","go.png","mui.png","framer.png","stripe.png",
  "reactnative.png","tauri.png","reactquery.png",
]);

export const SKILL_DATA = [
  { skill_name: "Python",       image: "python.svg",   width: 80, height: 80 },
  { skill_name: "Flask",        image: "flask.svg",    width: 80, height: 80 },
  { skill_name: "Django",       image: "django.svg",   width: 80, height: 80 },
  { skill_name: "Linux",        image: "linux.svg",    width: 80, height: 80 },
  { skill_name: "Docker",       image: "docker.png",   width: 70, height: 70 },
  { skill_name: "Git & GitHub", image: "git.svg",      width: 80, height: 80 },
  { skill_name: "HTML5",        image: "html.png",     width: 80, height: 80 },
  { skill_name: "CSS3",         image: "css.png",      width: 80, height: 80 },
  { skill_name: "JavaScript",   image: "js.png",       width: 65, height: 65 },
  { skill_name: "Bash Scripting", image: "bash.svg",   width: 70, height: 70 },
  { skill_name: "Nginx",        image: "nginx.svg",    width: 70, height: 70 },
] as const;

export const FRONTEND_SKILL = [
  { skill_name: "AWS",       image: "aws.svg",     width: 90, height: 90 },
  { skill_name: "EC2",       image: "ec2.png",     width: 60, height: 60 },
  { skill_name: "S3",        image: "s3.png",      width: 60, height: 60 },
  { skill_name: "RDS",       image: "rds.png",      width: 60, height: 60 },
  { skill_name: "Route 53",  image: "route53.png",  width: 60, height: 60 },
  { skill_name: "IAM",       image: "iam.png",      width: 60, height: 60 },
  { skill_name: "VPC",       image: "vpc.png",      width: 60, height: 60 },
  { skill_name: "CloudFront",image: "cloudfront.png", width: 60, height: 60 },
] as const;

export const DEVOPS_SKILL = [
  { skill_name: "Docker",                 image: "docker.png",       width: 70, height: 70 },
  { skill_name: "Kubernetes",            image: "kubernetes.svg",   width: 80, height: 80 },
  { skill_name: "Nginx",                 image: "nginx.svg",        width: 70, height: 70 },
  { skill_name: "CI/CD",                 image: "ci-cd.svg",        width: 70, height: 70 },
  { skill_name: "Infrastructure as Code", image: "iac.svg",         width: 70, height: 70 },
] as const;

export const BACKEND_SKILL = [
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 70, height: 70 },
  { skill_name: "MySQL",      image: "mysql.png",      width: 70, height: 70 },
  { skill_name: "REST APIs",  image: "node.png",       width: 80, height: 80 },
  { skill_name: "React",      image: "react.png",      width: 80, height: 80 },
] as const;

export const FULLSTACK_SKILL = [
  { skill_name: "Network Security", image: "netsec.svg",    width: 70, height: 70 },
  { skill_name: "Firewall (UFW)",   image: "firewall.svg",  width: 70, height: 70 },
  { skill_name: "Wireshark",        image: "wireshark.svg", width: 70, height: 70 },
  { skill_name: "Burp Suite",       image: "burp.svg",      width: 70, height: 70 },
  { skill_name: "Kali Linux",       image: "kali.svg",      width: 70, height: 70 },
  { skill_name: "Parrot OS",        image: "parrot.svg",    width: 70, height: 70 },
] as const;

export const OTHER_SKILL = [
  { skill_name: "Scikit-Learn",     image: "sklearn.svg",     width: 80, height: 80 },
  { skill_name: "TensorFlow",       image: "tensorflow.svg",  width: 80, height: 80 },
  { skill_name: "VS Code",          image: "vscode.svg",      width: 80, height: 80 },
  { skill_name: "Google Colab",     image: "colab.svg",       width: 70, height: 70 },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/abhilashg23/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Abhilashg23",
  },
] as const;

export const PROJECTS = [
  {
    title: "TalentIQ — AI Recruitment Platform",
    description:
      "AI-powered recruitment & candidate analytics platform built with Flask, MySQL, and Scikit-Learn. Containerized as Docker services and deployed through automated CI/CD workflows to support repeatable production releases.",
    image: "/projects/project-1.png",
    link: "https://github.com/Abhilashg23/TalentIQ",
  },
  {
    title: "IoT Security — Drone Vulnerability Analysis",
    description:
      "Analyzed IoT vulnerabilities using a Ryze Tello drone — implementing UDP socket attacks, Netcat packet injection & Wireshark analysis. Identified critical plain-text command injection vulnerabilities while validating secure deployment and monitoring practices.",
    image: "/projects/project-2.png",
    link: "https://github.com/Abhilashg23/tello-drone-control-analysis",
  },
  {
    title: "AWS LMS Deployment",
    description:
      "Deployed a full-stack Learning Management System on AWS from scratch — EC2, S3 for video storage, RDS PostgreSQL, Route 53 DNS, IAM roles, security groups, Nginx reverse proxy, and Docker-based delivery with CI/CD.",
    image: "/projects/project-3.png",
    link: "https://github.com/Abhilashg23",
  },
] as const;

export const ALL_PROJECTS = [
  {
    title: "TalentIQ",
    description: "AI-powered recruitment platform with resume parsing, sentiment analysis & fraud detection.",
    tech: ["Flask", "MySQL", "Scikit-Learn", "NLP"],
    link: "https://github.com/Abhilashg23/TalentIQ",
  },
  {
    title: "IoT Drone Vulnerability Research",
    description: "Demonstrated UDP command injection on Ryze Tello drones with Wireshark & Netcat analysis.",
    tech: ["Python", "UDP", "Wireshark", "Netcat"],
    link: "https://github.com/Abhilashg23/tello-drone-control-analysis",
  },
  {
    title: "AWS LMS Deployment",
    description: "Production-grade LMS deployed on AWS with EC2, S3, RDS, Route 53, IAM, Docker & CI/CD.",
    tech: ["AWS", "Django", "PostgreSQL", "Nginx", "Docker"],
    link: "https://github.com/Abhilashg23",
  },
  {
    title: "AI-Powered Smart Campus System",
    description: "Flask backend with intelligent query handling, real-time monitoring & secure REST APIs.",
    tech: ["Python", "Flask", "REST APIs", "AI"],
    link: "https://github.com/Abhilashg23",
  },
  {
    title: "Firewall Configuration Web App",
    description: "Flask web app automating Linux UFW firewall rules — reduced manual errors by 40%.",
    tech: ["Flask", "UFW", "Linux", "Python"],
    link: "https://github.com/Abhilashg23/firewall_app",
  },
  {
    title: "Leaf Disease Detection",
    description: "CNN model with Flask API classifying diseased leaves at 90%+ accuracy.",
    tech: ["Python", "TensorFlow", "Flask", "CNN"],
    link: "https://github.com/Abhilashg23/leaf-disease-detection",
  },
  {
    title: "Enhanced Weather Scraper",
    description: "Flask weather app with glassmorphism UI, 3-day forecasts, PDF reports & Indian city resolution.",
    tech: ["Flask", "Python", "API"],
    link: "https://github.com/Abhilashg23/weather-scraper-project",
  },
  {
    title: "NASA Space Yatra",
    description: "NASA Space Apps Challenge — visualizes missions & real-time space data with interactive UI.",
    tech: ["JavaScript", "NASA API", "HTML5"],
    link: "https://github.com/Abhilashg23/NASA_Space-yatra",
  },
  {
    title: "SinkedIn — Social Platform",
    description: "LinkedIn-inspired networking platform built for Bolt Hacks 2025 — world's largest hackathon.",
    tech: ["Django", "PostgreSQL", "JavaScript"],
    link: "https://github.com/Abhilashg23/sinkedin",
  },
  {
    title: "Edu-Morph Hackathon Project",
    description: "Adaptive learning platform built for SRUJANA 2025 at Chanakya University.",
    tech: ["Flask", "ML", "JavaScript"],
    link: "https://github.com/Abhilashg23/Srujana_hackathon_Edu-Morph",
  },
  {
    title: "Sparse Matrix for IPL Data",
    description: "Linked-list sparse matrix in Java cutting memory usage 70% vs 2D arrays.",
    tech: ["Java", "Data Structures"],
    link: "https://github.com/Abhilashg23/Linked_List_DSA",
  },
  {
    title: "Enhanced Regression for VRP",
    description: "Regression models predicting Genetic Algorithm outcomes for Vehicle Routing Problems.",
    tech: ["Python", "Scikit-learn", "ML Research"],
    link: "https://github.com/Abhilashg23/vrp-ga-prediction-",
  },
] as const;

export const EXPERIENCE = [
  {
    role: "Technical Intern",
    company: "Atom",
    period: "Mar 2026 – Jun 2026",
    bullets: [
      "Architected and deployed production-grade applications on AWS using EC2, S3, RDS, and Route 53; built automated CI/CD pipelines with Docker containerization and repeatable deployment workflows.",
      "Debugged critical production issues including authentication errors, timezone inconsistencies, and server-side failures; implemented monitoring solutions for RDS performance and cloud observability.",
      "Configured and maintained AWS infrastructure components — IAM access control, security groups, Route 53 DNS; collaborated on secure deployment practices and cost optimization.",
      "Performed full-stack debugging across backend and infrastructure layers — fixing responsive design issues, server errors, email template customization, and database query optimization.",
    ],
  },
  {
    role: "Project Intern",
    company: "Hrutha Technologies",
    period: "Jan 2024 – Jun 2024",
    bullets: [
      "Developed ML models for a Planetary Defense Early Warning System using Python, TensorFlow, and Flask.",
      "Improved prediction accuracy and reduced training time by 15% through optimized preprocessing and feature engineering.",
      "Deployed Flask ML API compatible with scalable deployment workflows.",
    ],
  },
] as const;

export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    specialization: "Cybersecurity",
    institution: "Chanakya University, Bengaluru",
    period: "Oct 2024 – Jun 2026",
    score: "CGPA: 8.06 (till 3rd sem)",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    specialization: "",
    institution: "Government Science College Autonomous, Hassan",
    period: "Nov 2021 – Apr 2024",
    score: "CGPA: 7.44",
  },
  {
    degree: "Intermediate (PCMB)",
    specialization: "",
    institution: "Government PU College For Boys, Hunsur",
    period: "2016 – 2021",
    score: "Percentage: 49.67%",
  },
  {
    degree: "SSLC",
    specialization: "",
    institution: "Minorities Morarji Desai Residential School, Piriyapatna",
    period: "2015 – 2016",
    score: "Percentage: 62.88%",
  },
] as const;

export const CERTIFICATIONS = [
  {
    title: "Getting Started with DevOps on AWS",
    issuer: "Amazon Web Services",
    period: "Jul 2026",
    link: "#",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    period: "May 2026",
    link: "#",
  },
  {
    title: "Introduction to Security Principles in Cloud Computing",
    issuer: "Google Cloud Skills Boost",
    period: "May 2025",
    link: "https://www.cloudskillsboost.google/public_profiles/edc94fa9-6c6b-47a1-afd9-3a98631261d6/badges/15670230",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    period: "Jun 2025",
    link: "#",
  },
  {
    title: "Introduction to Offensive Security with AI",
    issuer: "Red Team Leaders",
    period: "Feb 2026",
    link: "https://courses.redteamleaders.com/completion/5a2aee6f9c3f866c",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Coursera (Google Certificate)",
    period: "2025",
    link: "https://www.coursera.org/account/accomplishments/verify/VDSTFSULR775",
  },
] as const;

export const ACHIEVEMENTS = [
  {
    title: "AIR 1353 — Coding Ninjas National Programming Contest",
    description: "Secured All India Rank 1353 out of 10,000+ participants — top 14% nationally.",
    badge: "National Coding Contest",
  },
  {
    title: "NASA Space Apps Challenge",
    description: "Participated in NASA's International Space Apps Challenge — developed innovative space exploration solutions with global teams.",
    badge: "International Hackathon",
  },
  {
    title: "Bolt Hacks 2025 — World's Largest Hackathon",
    description: "Built SinkedIn (professional social platform) for Bolt Hacks 2025 on Devpost, competing with thousands worldwide.",
    badge: "Global Hackathon",
  },
  {
    title: "Code for Bharat — Season 2 Hackathon",
    description: "Participated in Code for Bharat Season 2 (Jul–Aug 2025) by Tech Masters India — developing digital transformation solutions.",
    badge: "National Hackathon",
  },
  {
    title: "SRUJANA 2025 — Chanakya University",
    description: "Competed in SRUJANA 2025, a 48-hour offline hackathon at Chanakya University, building Edu-Morph.",
    badge: "University Hackathon",
  },
  {
    title: 'Published: "Log4j — The Little Bug with a Big Bite"',
    description: "First cybersecurity article on System Weakness — breaking down the Log4Shell exploit, its security risks, and mitigation.",
    badge: "Cybersecurity Publication",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Links",
    data: [
      { name: "GitHub", icon: RxGithubLogo, link: "https://github.com/Abhilashg23" },
      { name: "LinkedIn", icon: RxLinkedinLogo, link: "https://www.linkedin.com/in/abhilashg23/" },
    ],
  },
  {
    title: "Contact",
    data: [
      { name: "abhilashg9113@gmail.com", icon: MdEmail, link: "mailto:abhilashg9113@gmail.com" },
    ],
  },
  {
    title: "Quick Links",
    data: [
      { name: "View Resume", icon: null, link: "/resume/ABHILASH_G_Resume_V7.pdf" },
      { name: "Contact Me", icon: null, link: "mailto:abhilashg9113@gmail.com" },
    ],
  },
] as const;

export const NAV_LINKS = [
  { title: "About Me", link: "#about-me" },
  { title: "Skills",   link: "#skills" },
  { title: "Projects", link: "#projects" },
  { title: "Experience", link: "#experience" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/Abhilashg23",
};
