export interface JobPost {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string; // Full-time, Part-time, Contract, etc.
  salary: string;
  description: string;
  requirements: string[];
  postedDate: string;
  category: string;
}

export const jobPosts: JobPost[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description: "We are looking for an experienced Frontend Developer to join our dynamic team. You will be responsible for developing user-facing web applications using modern JavaScript frameworks.",
    requirements: [
      "5+ years of experience in frontend development",
      "Strong proficiency in React.js and Next.js",
      "Experience with TypeScript",
      "Knowledge of modern CSS frameworks",
      "Excellent problem-solving skills"
    ],
    postedDate: "2024-01-15",
    category: "Engineering"
  },
  {
    id: "2",
    title: "Product Manager",
    company: "Digital Solutions LLC",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    description: "Join our product team to drive innovation and deliver exceptional user experiences. You'll work closely with engineering, design, and business teams to define and execute product strategy.",
    requirements: [
      "3+ years of product management experience",
      "Strong analytical and strategic thinking",
      "Excellent communication skills",
      "Experience with agile methodologies",
      "Technical background preferred"
    ],
    postedDate: "2024-01-18",
    category: "Product"
  },
  {
    id: "3",
    title: "UX Designer",
    company: "Creative Minds Studio",
    location: "Remote",
    type: "Full-time",
    salary: "$90,000 - $110,000",
    description: "We're seeking a talented UX Designer to create intuitive and engaging user experiences. You'll collaborate with cross-functional teams to design products that users love.",
    requirements: [
      "4+ years of UX design experience",
      "Portfolio demonstrating strong design skills",
      "Proficiency in Figma or Adobe XD",
      "Understanding of user research methods",
      "Strong visual design skills"
    ],
    postedDate: "2024-01-20",
    category: "Design"
  },
  {
    id: "4",
    title: "Backend Developer",
    company: "Cloud Systems Corp",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    description: "Looking for a skilled Backend Developer to build scalable and efficient server-side applications. You'll work on APIs, databases, and cloud infrastructure.",
    requirements: [
      "4+ years of backend development experience",
      "Strong knowledge of Node.js or Python",
      "Experience with databases (SQL and NoSQL)",
      "Understanding of RESTful APIs",
      "Experience with cloud platforms (AWS, Azure, or GCP)"
    ],
    postedDate: "2024-01-22",
    category: "Engineering"
  },
  {
    id: "5",
    title: "Marketing Specialist",
    company: "Growth Marketing Agency",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$50,000 - $70,000",
    description: "We need a creative Marketing Specialist to develop and execute marketing campaigns. You'll work on content creation, social media, and digital advertising.",
    requirements: [
      "2+ years of marketing experience",
      "Strong writing and communication skills",
      "Experience with social media platforms",
      "Knowledge of SEO and content marketing",
      "Creative thinking and problem-solving abilities"
    ],
    postedDate: "2024-01-25",
    category: "Marketing"
  },
  {
    id: "6",
    title: "DevOps Engineer",
    company: "Infrastructure Solutions",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$125,000 - $155,000",
    description: "Join our DevOps team to manage and optimize our cloud infrastructure. You'll work on CI/CD pipelines, monitoring, and automation.",
    requirements: [
      "5+ years of DevOps experience",
      "Strong knowledge of Docker and Kubernetes",
      "Experience with CI/CD tools (Jenkins, GitLab CI)",
      "Proficiency in scripting (Bash, Python)",
      "Understanding of cloud infrastructure"
    ],
    postedDate: "2024-01-28",
    category: "Engineering"
  }
];
