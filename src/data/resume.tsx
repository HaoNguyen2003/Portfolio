import { Icons } from "@/components/icons";
import { Facebook, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Hao Tien",
  initials: "DV",
  url: "https://haonguyen2003.github.io/",
  location: "Thai Hoa, Tan Uyen Binh Duong, Viet Nam",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "From a passion for mathematics to a journey as a coder. Always eager to explore new things and keep learning.",
  summary:
    "In 2021, I started studying [Mathematics and Computer Science at VNUHCM - University of Science](/#education), dreaming of becoming a [mathematician](/#education). Along the way, I stumbled upon programming and realized how beautifully it connects with math. That discovery sparked my curiosity, [pushing me to apply mathematical thinking to coding](/#work). Now, I’m on a journey to become a [software developer](/#work), blending logic and creativity to build meaningful things.",
  avatarUrl: "/me.png",
  skills: [
    "C#",
    "PHP",
    "Java Script",
    "HTML",
    "CSS",
    "Blazor",
    "Docker",
    "React",
    "Postgres",
    "SQL server",
    "My SQL",
    "Git",
    "Github",
    "Postman",
    "Swagger"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
   
  ],
  contact: {
    email: "nguyentienhao12.3tpk@gmail.com",
    tel: "+(84) 878 193 742",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/HaoNguyen2003",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/ting.how/",
        icon: Icons.instagram,

        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/hao.tien.148",
        icon: Icons.facebook,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:nguyentienhao12.3tpk@gmail.com",
        icon: Icons.email,
        navbar: true,
    },    
    },
  },

  work: [
    {
      company: "HQSoft",
      href: "https://hqsoft.com.vn/",
      badges: [],
      location: "Office",
      title: ".Net Developer",
      logoUrl: "/Company1.png",
      start: "Oct 2024",
      end: "Present",
      description:
        "Participated in the development of the Xsprise project, focusing on fixing bugs in modules such as Purchasing and Account Payable to ensure system stability. Additionally, developed new features for the DMS module and improved shared components to enhance consistency, reusability, and user experience.",
    },
    
  ],
  education: [
    {
      school: "University of Science",
      href: "https://en.hcmus.edu.vn/",
      degree: "Bachelor's Degree of Mathematics and Computer Science (BCS)",
      logoUrl: "/School1.jpg",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "WearFlow API",
      href: "https://github.com/HaoNguyen2003/eShopSolution",
      dates: "Mar  2024 - Apr 2024",
      active: true,
      description:
        "Developed an e-commerce platform with product catalog, customer management, order processing, and payment integration.",
      technologies: [
        "N-Tier Architecture",
        "ASP.NET Core Web API",
        "Entity Framework Core",
        "ASP.NET Core Identity",
        "JWT",
        "2FA",
        "Cloudinary",
        "SignalR",
        "MailKit",
        "Vnpay",
        "Swagger",
        "Postman",
        "SQL Server",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/HaoNguyen2003/eShopSolution",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project1.png",
      video:
        "",
    },
    {
      title: "Online Quiz System",
      href: "https://github.com/HaoNguyen2003/ASP_trac_nghiem_onl",
      dates: "May 2023 - Jun 2023",
      active: true,
      description:
        "Developed an online quiz platform for quiz creation, management, and result tracking.",
      technologies: [
       "ASP.NET Core",
       "Entity Framework",
       "SQL Server", 
       "MVC",
       "HTML",
       "CSS",
       "jQuery"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/HaoNguyen2003/ASP_trac_nghiem_onl",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project2.png",
      video: "",
    },
    {
      title: "Sneaker Store App",
      href: "https://github.com/HaoNguyen2003/Project_TTDD",
      dates: "Mar 2023 - Apr 2023",
      active: true,
      description:
        "Developed a mobile e-commerce app for selling shoes, featuring product browsing, secure checkout, and order management.",
      technologies: [
        "PHP",
        "Java",
        "MySQL",
        "SQLite",
        "XML",
        "Swagger",
        "Android Studio"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/HaoNguyen2003/Project_TTDD",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dqtnqk8fq/video/upload/v1742713166/content1_isylcl.mp4",
    },
    {
      title: "Xsprise",
      href: "",
      dates: "Oct 2024 - Present",
      active: true,
      description:
        "Developed Xsprie, a solution addressing challenges in distribution, retail, and sales force automation (SFA), enhancing efficiency and operational management.",
      technologies: [
        "ASP.Net Core API",
        "PostgreSQL",
        "ABP Framework",
        "Blazor",
      ],
      links: [
        {
          type: "Website",
          href: "https://hqsoft.com.vn/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project4.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "A personal portfolio",
      dates: "",
      location: "Price: Contact",
      description:
        "A portfolio is basically your proof of work—it shows what you’ve done, what you’re good at, and why people should trust you. No matter what you do—tech, design, marketing, or anything else—having a solid portfolio helps you stand out and get noticed!",
      image:
        "/hireme6.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Web application",
      dates: "",
      location: "Price: Contact",
      description:
        "I can help you build a custom web application, whether it’s a simple landing page or a complex system with advanced features. Whatever your requirements, I’ll make sure it’s functional, user-friendly, and optimized for performance.",
      image:
        "/hireme10.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Mobile application",
      dates: "",
      location: "Price: Contact",
      description:
        "I can help you build a custom mobile application, whether it’s a simple app or a complex system with advanced features. Whatever your requirements, I’ll ensure it’s fast, user-friendly, and optimized for performance.",
      icon: "public",
      image:
        "/hireme3.jpg",
      links: [],
    },
    {
      title: "RESTful API",
      dates: "",
      location: "Price: Contact",
      description:
        "I can help you build a custom API, whether it’s for a small project or a large-scale system. I’ll ensure it’s secure, efficient, and scalable to meet your needs.",
      image:
        "/hireme4.png",
      links: [],
    }
    ,
    {
      title: "Design Database",
      dates: "",
      location: "Price: Contact",
      description:
        "I can help you design your database, providing feedback and suggestions to improve its structure, efficiency, and scalability.",
      image:
        "/hireme5.jpg",
      links: [],
    }
    
  ],
} as const;
