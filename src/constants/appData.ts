import { CompanyInterface } from "../interfaces/CompanyInterface";
import { CertificateInterface } from "../interfaces/CertificateInterface";
import { TestimonialModel } from "../interfaces/TestimonialModel";
import { ProjectModalProps } from "../interfaces/ProjectModalProps";

// Personal Information
export const personalInfo = {
  name: "Madhav Trivedi",
  linkedInUrl: "https://www.linkedin.com/in/madhavpt",
  workEmail: "madhavtrivedi.work17@gmail.com",
  logoPath: "./android-chrome-192x192.png",
  resumePath: "./assets/Madhav_Trivedi_Resume.pdf",
};

// Home Page Data
export const homePageData = {
  greeting: "Hello world!",
  name: "I'm Madhav Trivedi",
  roles: ["Software Engineer", "Musician", "Traveler"],
};

// Navigation Items
export const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Career", href: "#career" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#footer" },
];

// About Page Data
export const aboutPageData = {
  description: [
    
    "Software Engineer with 6+ years of experience designing and scaling high-performance distributed systems and full-stack applications. Strong in Node.js, Python, React, and microservices architecture, with deep expertise in system design, reliability, and performance optimization.",
    "Product-centric engineer who owns features end-to-end from design to deployment and building scalable platforms that drive measurable business impact.",
    "I escapse standups and retros by hiking a trail or jamming on my guitar.",
    "Always up for a good conversation on tech, global events, or startup ideas. Deal is to have coffee involved.",
  ],
  techStackProficiency: [
    { name: "NestJs", proficiency: "85%" },
    { name: "NodeJs", proficiency: "85%" },
    { name: "AWS (Amazon Web Services)", proficiency: "80%" },
    { name: "SQL", proficiency: "70%" },
    { name: "Python", proficiency: "70%" },
    { name: "Angular", proficiency: "70%" },
    { name: "React", proficiency: "60%" },
    { name: "System Design", proficiency: "65%" },
    { name: "Data structures and Algorithms", proficiency: "60%" },
    { name: "NoSQL", proficiency: "55%" },
    { name: "Docker", proficiency: "55%" },
    { name: "Problem solving", proficiency: "90%" },
  ],
  interests: [
    "Global Affairs/Events",
    "Investment & Trading",
    "Astrophysics",
    "Music (Guitar, Ukulele, Singing)",
    "Reading",
    "Cooking",
    "Swimming",
    "Photography",
  ],
};

// Career Data
export const companyList: CompanyInterface[] = [
  {
    id: 1,
    company: "Madison Logic",
    companySite: "https://www.madisonlogic.com/",
    companyLogo: ".\\assets\\logos\\company\\thinkbridge.jpeg",
    position: "Senior Backend Engineer",
    location: {
      city: "Pune,",
      state: "MH,",
      country: "India",
    },
    joining: "Dec 2024",
    ending: "Present",
    summary: [
      "Led migration from monolithic architecture to highly scalable distributed microservices, defining service boundaries, API contracts, and deployment strategies to improve system resilience and independent scalability.",
      "Owned and delivered a custom lead delivery platform in collaboration with client teams, driving a 50% revenue increase and doubling operational efficiency.",
      "Designed and built a data-driven Lead Scoring Engine leveraging predictive scoring models to enable real-time decision making and optimize campaign performance.",
      "Owned production release strategy for 15+ revenue impacting applications, introducing Blue/Green deployments and controlled A/B rollouts to minimize downtime and business risk.",
      "Implemented the Outbox Pattern with Kafka and orchestrated Saga workflows, ensuring guaranteed event delivery, eliminating distributed locking, and achieving eventual consistency.",
      "Built and standardized Datadog observability for backend services, reducing incident resolution time and enabling proactive monitoring through APM and infrastructure-level metrics.",
    ],
  },
  {
    id: 2,
    company: "ThinkBridge Software",
    companySite: "https://www.thinkbridge.com/",
    companyLogo: ".\\assets\\logos\\company\\thinkbridge.jpeg",
    position: "Software Engineer",
    location: {
      city: "Remote,",
      state: "",
      country: "India",
    },
    joining: "Nov 2020",
    ending: "Dec 2024",
    summary: [
      "Implemented internationalization (I18N) and localization (L10N) to expand global accessibility, while optimizing data handling and client-side caching strategies, resulting in over ~80% revenue growth and increased international adoption.",
      "Designed a high-performance client-side search architecture supporting 1M+ records with fuzzy search capabilities, reducing page load times by ~50% and significantly improving user experience.",
      "Engineered and maintained multiple business platforms including FinTech applications, a Career Services Portal, and a Product Subscription system, ensuring scalability, reliability, and continuous feature delivery.",
      "Directed requirement analysis and delivery execution, translating business needs into technical solutions, delegating tasks, conducting code reviews, and managing CI/CD pipelines for consistent and reliable releases.",
    ],
  },
  {
    id: 3,
    company: "Ubisoft India",
    companySite: "https://www.ubisoft.com/en-us/",
    companyLogo: ".\\assets\\logos\\company\\ubisoft_india.jpeg",
    position: "Junior Web Developer",
    location: {
      city: "Pune,",
      state: "MH,",
      country: "India",
    },
    joining: "Jan 2020",
    ending: "Nov 2020",
    summary: [
      "Drove key initiatives at Ubisoft India, crafting responsive UI screens, developing APIs, and optimizing backend systems.",
      "Developed an automated HR system, enhancing accuracy by up to 15% and reducing manual workload by 80%.",
    ],
  }
];

// Certifications Data
export const certificateList: CertificateInterface[] = [
  {
    id: 1,
    certificateImg: ".\\assets\\certificates\\systemDesignGFG.png",
    name: "System Design from Low Level to High Level",
    organization: "GeeksForGeeks",
    skills: [
      "System Architecture",
      "High Level System Design",
      "Low Level System Design",
      "Design Patterns",
    ],
    link: "",
  },
  {
    id: 2,
    certificateImg: ".\\assets\\certificates\\virtualInternshipFORAGE.png",
    name: "J.P. Morgan's Software Engineering Virtual Experience ",
    organization: "Forage",
    skills: ["Python", "Data Analysis", "Data Processing"],
    link: "",
  },
  {
    id: 3,
    certificateImg: ".\\assets\\certificates\\dataAnalysisFCC.png",
    name: "Data Analytics with Python",
    organization: "FreeCodeCamp",
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "MatplotLib",
      "Data Analysis",
      "Data Visualization",
    ],
    link: "https://www.freecodecamp.org/certification/madhavtrivedi77/data-analysis-with-python-v7",
  },
  {
    id: 4,
    certificateImg: ".\\assets\\certificates\\pythonFCC.png",
    name: "Scientific Computing with Python",
    organization: "FreeCodeCamp",
    skills: ["Python", "Problem Solving"],
    link: "https://www.freecodecamp.org/certification/madhavtrivedi77/scientific-computing-with-python-v7",
  },
  {
    id: 5,
    certificateImg: ".\\assets\\certificates\\dataStructureJavaScriptFCC.png",
    name: "JavaScript Algorithms and Data Structures",
    organization: "FreeCodeCamp",
    skills: ["JavaScript", "ES6", "Data Structures", "Problem Solving"],
    link: "https://www.freecodecamp.org/certification/madhavtrivedi77/javascript-algorithms-and-data-structures",
  },
  {
    id: 6,
    certificateImg: ".\\assets\\certificates\\nodejsFCC.png",
    name: "Back End Development and APIs",
    organization: "FreeCodeCamp",
    skills: ["NodeJS"],
    link: "https://www.freecodecamp.org/certification/madhavtrivedi77/back-end-development-and-apis",
  },
];

// Testimonials Data
export const testimonialList: TestimonialModel[] = [
  {
    id: 1,
    profilePicture: ".\\assets\\profile-pictures\\salaad-nur.jpeg",
    name: "Salaad Nur",
    designation: "Principal & Solution Architect",
    company: "Samla Technology, Inc.",
    testimony:
      "I have worked with Madhav on a complex Cash Management solution for Consero Global. He is a consummate professional who understands complex projects. He was a key resource for deliverables. The business need was to manage cash processes for 200+ clients, with combined volumes of tens of thousands of transactions daily, within a 4 hour window. With his support, we delivered a solution that allowed clients to get their updated cash positions by the start of their business day. I would recommend Madhav to anyone looking for a highly skilled developer.",
    linkedIn: "https://www.linkedin.com/in/sanur/",
  },
  {
    id: 2,
    profilePicture: ".\\assets\\profile-pictures\\thomas-hessler.jpeg",
    name: "Thomas Hessler",
    designation: "Co-Founder & Managing Director",
    company: "One Stop German Shop Inc.",
    testimony:
      "I had the pleasure of working with Madhav during his time at Thinkbridge and I got to know him as a dedicated and extremely knowledge full stack developer that is very easy to work with. Not having a developer background myself, Madhav was always able to break down complex problems in an easily understandable manner to enable everyone to find the best solution moving forward.",
    linkedIn: "https://www.linkedin.com/in/thomas-hessler/",
  },
  {
    id: 3,
    profilePicture: ".\\assets\\profile-pictures\\abhinav-das.jpeg",
    name: "Abhinav Das",
    designation: "Head of Engineering",
    company: "Stealth",
    testimony:
      "Madhav brings strong engineering craft and utmost reliability to his team. At Talent, Inc., he was involved with the successful operation of our core revenue generating products. Madhav has also shown that he's able to pick up new technologies with ease.",
    linkedIn: "https://www.linkedin.com/in/theabhinavdas/",
  },
  {
    id: 4,
    profilePicture: ".\\assets\\profile-pictures\\cedric-richardeau.jpeg",
    name: "Cedric Richardeau",
    designation: "Studio Operations Director",
    company: "Ubisoft",
    testimony:
      "As Madhav's senior manager at Ubisoft India, I was consistently impressed by his performance as a Junior Web Developer. His work on automating routine emails for our HR Portal reduced manual workload by 40%. Madhav's quick learning, strong coding practices, and collaborative approach made him a valuable asset to our team. I'm confident Madhav would be an excellent addition to any organization.",
    linkedIn: "https://www.linkedin.com/in/cedric-richardeau/",
  },
  {
    id: 5,
    profilePicture: ".\\assets\\profile-pictures\\rishi-nanda.jpeg",
    name: "Rishi Nanda",
    designation: "IT Manager Enterprise",
    company: "Ubisoft",
    testimony:
      "I had the pleasure of managing Madhav, who played a crucial role in developing our HR portal and Workday integrations. His expertise in PHP, SharePoint, and SQL resulted in high-quality solutions with minimal bugs. Madhav's ability to translate complex requirements into reliable code, along with his collaborative and positive attitude, made him a valuable asset. I highly recommend him for any development role.",
    linkedIn: "https://www.linkedin.com/in/rishi-nanda/",
  },
  {
    id: 6,
    profilePicture: ".\\assets\\profile-pictures\\rajneesh-bali.jpeg",
    name: "Rajneesh Bali",
    designation: "Associate Director Corporate Relations",
    company: "Indira Group of Institutes, Pune",
    testimony:
      "I am delighted to recommend Madhav Trivedi for his outstanding contributions to the Training and Placement Cell at MIT WPU, Pune. He built a strong company relationships, enhancing our campus recruitment efforts. His organizational skills, proactive approach, and professionalism were commendable. Madhav's skills and positive attitude will be a great asset to any organization.",
    linkedIn: "https://www.linkedin.com/in/rajneesh-bali-052968b/",
  },
  {
    id: 7,
    profilePicture: ".\\assets\\profile-pictures\\hasmukh-tank.jpeg",
    name: "Hasmukh Tank",
    designation: "Senior Technical Project Manager",
    company: "career.io",
    testimony:
      "Madhav is an exceptionally dedicated professional who consistently goes above and beyond. His problem-solving skills and commitment greatly contributed to our team's success and helped meet critical deadlines. His ability to create efficient solutions and his collaborative spirit made him an invaluable team member. I highly recommend Madhav and would be thrilled to work with him again.",
    linkedIn: "https://www.linkedin.com/in/hasmukh-tank-5/",
  },
  {
    id: 8,
    profilePicture: ".\\assets\\profile-pictures\\priyanka-raikar.jpeg",
    name: "Priyanka Raikar",
    designation: "Senior Test Engineer",
    company: "Visa",
    testimony:
      "As a Full-Stack developer, Madhav showed exceptional design and usability skills. His expertise in front-end and back end technologies was evident seamlessly. Beyond his technical acumen, Madhav's collaborative nature and innovative insights greatly benefited team discussions. His analytical and creative problem-solving approach led to effective solutions for our key challenges.",
    linkedIn: "https://www.linkedin.com/in/priyanka-raikar-64274119b/",
  },
  {
    id: 9,
    profilePicture: ".\\assets\\profile-pictures\\rakesh-kodagali.jpeg",
    name: "Rakesh Kodagali",
    designation: "Senior Engineer - Product Development",
    company: "Harman Connected Services",
    testimony:
      "Madhav is an exceptional web app developer with outstanding JavaScript skills. At Thinkbridge, despite his primary expertise in Angular, he contributed significantly to a React project. As the team's go-to person for TypeScript, he provided invaluable support. His deep knowledge of the JS ecosystem is impressive. I wish him all the best!",
    linkedIn: "https://www.linkedin.com/in/rakesh-kodagali/",
  },
];

// Portfolio Data
export const projectList: ProjectModalProps[] = [
  {
    id: 1,
    title: "Tab's Archive",
    logo: ".\\assets\\logos\\portfolios\\tabs-archive.png",
    data: {
      screenshotsList: [
        "./assets/project-screenshots/Tabs-archive/Home.png",
        "./assets/project-screenshots/Tabs-archive/Open.png",
        "./assets/project-screenshots/Tabs-archive/Archive.png",
        "./assets/project-screenshots/Tabs-archive/Window.png",
      ],
      description:
        "Tab's Archive, a Chrome extension designed to close inactive windows and tabs, saving them in local storage for easy retrieval. With Tab's Archive, you can instantly boost RAM performance, enhance browsing speed, and reduce clutter. Perfect for anyone who handles multiple windows and tabs, aiming for a smoother browsing experience. Your saved archive stays intact until you decide to delete it.",
      techList: [
        "HTML",
        "CSS",
        "JavaScript",
        "Chrome APIs",
        "Design Patterns",
        "Problem solving",
      ],
      learnings: [
        {
          heading: "Project Management",
          data: "Breaking down tasks, setting timelines, and organizing tasks to achieve goals within timelines.",
        },
        {
          heading: "Low-Level System Design",
          data: "Breaking down tasks, setting timelines, and organizing tasks to achieve goals within timelines. Designing and optimizing system components at a detailed level to enhance performance and scalability.",
        },
        {
          heading: "Design Patterns",
          data: "Implemented design patterns for better scalability, performance, and maintenance.",
        },
        {
          heading: "Chrome API",
          data: "Utilizing Chrome's API for data retrieval and integration.",
        },
        {
          heading: "JavaScript",
          data: "Implementing logic and functionality using JavaScript, including asynchronous programming.",
        },
        {
          heading: "Problem Solving",
          data: "Applying analytical and creative thinking to solve challenges encountered during development.",
        },
      ],
      projectURL:
        "https://chromewebstore.google.com/detail/tabs-archive/pjidfmalicjodbajneapigbaahobhgdh",
      sourceCode: "https://github.com/Madhav-77/TabsArchive",
    },
  },
  {
    id: 2,
    title: "Curve 19",
    logo: ".\\assets\\logos\\portfolios\\curve19.png",
    data: {
      screenshotsList: [
        "./assets/project-screenshots/Curve-19/Dashboard.png",
        "./assets/project-screenshots/Curve-19/Dashboard2.png",
        "./assets/project-screenshots/Curve-19/Dashboard3.png",
        "./assets/project-screenshots/Curve-19/District Details.png",
        "./assets/project-screenshots/Curve-19/District List Table.png",
        "./assets/project-screenshots/Curve-19/District List.png",
        "./assets/project-screenshots/Curve-19/Home.png",
        "./assets/project-screenshots/Curve-19/Searching.png",
        "./assets/project-screenshots/Curve-19/State List.png",
        "./assets/project-screenshots/Curve-19/Watch List.png",
      ],
      description:
        "Curve-19 aimed to spread awareness about Covid-19 and monitor its rising cases. Using Flutter, Dart, and Firebase, I developed a mobile app to receive notifications for new cases in selected regions. I utilized an open-source API (https://www.covid19india.org/) for data collection and integrated data visualization libraries for a better user experience. I planned to release Curve on iOS and Android, but work constraints paused development. Taking a real-world problem from concept to 70% completion solo fills me with pride. It's a testament to perseverance, learning, and ability to understand and solve real-world problems.",
      techList: [
        "Flutter",
        "Dart",
        "Firebase",
        "Data Visualization",
        "Design Patterns",
        "Problem solving",
      ],
      learnings: [
        {
          heading: "Project Management",
          data: "Breaking down tasks, setting timelines, and organizing tasks to achieve goals within timelines.",
        },
        {
          heading: "Low-Level System Design",
          data: "Breaking down tasks, setting timelines, and organizing tasks to achieve goals within timelines. Designing and optimizing system components at a detailed level to enhance performance and scalability.",
        },
        {
          heading: "Design Patterns",
          data: "Implemented design patterns for better scalability, performance, and maintenance.",
        },
        {
          heading: "Firebase",
          data: "Implemented push notifications using firebase.",
        },
        {
          heading: "Problem Solving",
          data: "Applying analytical and creative thinking to solve challenges encountered during development.",
        },
      ],
      projectURL: "",
      sourceCode: "https://github.com/Madhav-77/Curve",
    },
  },
  {
    id: 3,
    title: "Face Detection System",
    logo: ".\\assets\\logos\\portfolios\\face-detection-attendance.png",
    data: {
      screenshotsList: [],
      description:
        "During my time at college, I identified a common issue with manual attendance marking that could be streamlined using existing resources. Observing that CCTV cameras were installed in all classrooms, I saw an opportunity to use this existing infrastructure to automate the attendance process. I wrote a Python script that utilizes the classroom CCTV system for attendance tracking. The project involved a two-step process: <ul><li><b>Initial Setup:</b> I collected and processed eight clear images of each student to create a reliable reference dataset.</li><li><b>Automated Attendance:</b> Using these reference images, I designed a Python script that integrates with the CCTV feeds to capture and analyze images on a daily basis. The script automatically compares the captured images against the reference dataset to mark attendance and then logs the results in an Excel sheet.</li></ul> This approach not only streamlined the attendance process but also utilized the available infrastructure effectively, reducing the need for additional hardware and manual intervention.",
      techList: [
        "Python",
        "OpenCV",
        "Microsoft Cognitive Services",
        "Problem solving",
      ],
      learnings: [
        {
          heading: "Project Management",
          data: "Breaking down tasks, setting timelines, and organizing tasks to achieve goals within timelines.",
        },
        {
          heading: "Problem Solving",
          data: "Identifying a real world issue and developing an efficient solution for the same.",
        },
      ],
      projectURL: "",
      sourceCode: "",
    },
  },
  {
    id: 4,
    title: "Fund GOGO",
    logo: ".\\assets\\logos\\portfolios\\fund-gogo.png",
    data: {
      screenshotsList: [],
      description:
        "Developed during the Smart India Hackathon 2019 at IIT Kanpur, Fund GOGO is a platform that enables small and mid-scale businesses to directly connect with investors, banks, and financial institutions. It streamlines communication and facilitates the showcasing of business profiles, making it easier for SMEs to secure financial support.",
      techList: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Problem solving",
        "Leadership",
      ],
      learnings: [
        {
          heading: "Project Management",
          data: "Breaking down tasks, setting timelines, and organizing tasks to achieve goals within timelines.",
        },
        {
          heading: "Team Management",
          data: "As a team lead, I got an exposure to collaborate with 6 team members and lead the project to completion within deadlines.",
        },
        {
          heading: "JavaScript",
          data: "Implementing logic and functionality using JavaScript.",
        },
        {
          heading: "Problem Solving",
          data: "Applying analytical and creative thinking to solve challenges encountered during development.",
        },
      ],
      projectURL: "",
      sourceCode: "",
    },
  },
];

// Social Media Links
export const socialMediaLinks = [
  {
    title: personalInfo.workEmail,
    href: "#",
    iconPath: "./assets/svg/mail.svg",
    alt: "email",
    width: 30,
    height: 30,
    onClick: "copyEmail", // Special handler
  },
  {
    title: "LinkedIn",
    href: personalInfo.linkedInUrl,
    iconPath: "./assets/svg/linkedin.svg",
    alt: "linkedIn",
    width: 30,
    height: 30,
  },
  {
    title: "GitHub",
    href: "https://github.com/Madhav-77",
    iconPath: "./assets/svg/github.svg",
    alt: "github",
    width: 30,
    height: 30,
  },
  {
    title: "Hacker Rank",
    href: "https://www.hackerrank.com/profile/madhavtrivedi_77",
    iconPath: "./assets/svg/hackerrank.svg",
    alt: "hacker rank",
    width: 35,
    height: 35,
  },
  {
    title: "Geeks For Geeks",
    href: "https://www.geeksforgeeks.org/user/madhavtrivedi77/",
    iconPath: "./assets/svg/geeksforgeeks.svg",
    alt: "geeks for geeks",
    width: 30,
    height: 30,
  },
  {
    title: "Free Code Camp",
    href: "https://www.freecodecamp.org/madhavtrivedi77",
    iconPath: "./assets/svg/freecodecamp.svg",
    alt: "free code camp",
    width: 30,
    height: 30,
  },
  {
    title: "Download Resume",
    href: personalInfo.resumePath,
    iconPath: "./assets/svg/resume.svg",
    alt: "resume",
    width: 30,
    height: 30,
    download: "Madhav_Trivedi_Resume.pdf",
  },
];

// Footer Data
export const footerData = {
  subHeading: "Thanks for stopping by, let's connect!",
  heading: personalInfo.name,
  linkedInUrl: personalInfo.linkedInUrl,
  copyrightText: "All Rights Reserved.",
  builtFromScratch: "Built from scratch! >B",
};
