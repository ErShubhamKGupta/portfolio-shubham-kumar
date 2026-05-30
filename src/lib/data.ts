export const siteConfig = {
  name: "Shubham Kumar",
  role: ".NET & Azure Backend Engineer",
  tagline:
    "Building scalable enterprise applications, APIs, and microservices for modern businesses.",
  email: "shubhamkr.7368@gmail.com",
  github: "https://github.com/ErShubhamKGupta",
  linkedin: "https://linkedin.com",
  medium: "https://medium.com/@itsshubhamk",
  twitter: "https://x.com",
};

export const about = {
  paragraphs: [
    "I'm a Senior Software Engineer with 8+ years of experience designing and shipping production-grade backend systems for enterprise clients. My expertise spans the .NET ecosystem, cloud-native development on Azure, and microservices architecture — with deep experience in the insurance domain.",
    "Over the years I've architected and delivered 10+ production microservices, designed RESTful APIs serving hundreds of thousands of users, and worked closely with stakeholders to translate complex business requirements into clean, maintainable systems.",
    "Beyond code, I'm invested in growing the next generation of engineers — having mentored 10+ freshers into their first professional roles, guiding them through software design principles, clean code practices, and career development.",
  ],
  cards: [
    { value: "8+", label: "Years of Experience" },
    { value: "10+", label: "Microservices Built" },
    { value: "10+", label: "Developers Mentored" },
    { value: "Insurance", label: "Domain Expertise" },
  ],
};

export const skills = [
  {
    category: "Backend",
    items: [".NET", "C#", "ASP.NET Core", "Web API", "Entity Framework Core", "Microservices"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Azure", "Azure Functions", "Azure AI Services", "Azure DevOps", "CI/CD Pipelines"],
  },
  {
    category: "Database",
    items: ["SQL Server", "Database Design", "Query Optimization", "Stored Procedures"],
  },
  {
    category: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "jQuery", "HTML", "CSS", "Bootstrap"],
  },
  {
    category: "Architecture",
    items: [
      "Clean Architecture",
      "SOLID Principles",
      "Design Patterns",
      "Domain-Driven Design",
      "REST APIs",
    ],
  },
  {
    category: "AI Tools & LLMs",
    items: ["ChatGPT", "Claude", "Claude Code", "GitHub Copilot", "Gemini", "Azure OpenAI", "Cursor"],
  },
];

export const experience = [
  {
    company: "Lorem Ipsum Technologies",
    position: "Senior Software Engineer",
    duration: "2022 – Present",
    location: "Remote, India",
    achievements: [
      "Architected and delivered 5+ microservices for a large-scale insurance platform handling 100K+ users",
      "Led migration from monolith to microservices, reducing deployment time by 60%",
      "Integrated Azure AI Services for intelligent document processing, cutting manual effort by 40%",
      "Mentored 4 junior developers and established team-wide coding standards and review practices",
    ],
  },
  {
    company: "Dolor Sit Amet Ltd",
    position: "Software Engineer",
    duration: "2019 – 2022",
    location: "Pune, India",
    achievements: [
      "Built RESTful APIs with ASP.NET Core for insurance claims and policy management systems",
      "Designed normalized SQL Server schemas handling millions of records with optimized query performance",
      "Implemented Azure DevOps CI/CD pipelines achieving fully automated deployments for 3 services",
      "Collaborated with cross-functional teams across India and the UK",
    ],
  },
  {
    company: "Consectetur Adipiscing Co",
    position: "Junior Software Developer",
    duration: "2017 – 2019",
    location: "Mumbai, India",
    achievements: [
      "Built internal enterprise web applications using ASP.NET MVC and jQuery",
      "Wrote and optimized complex SQL queries, improving report generation speed by 35%",
      "Took full ownership of 2 end-to-end modules within the first year",
    ],
  },
];

export const projects = [
  {
    name: "Anthropic SDK POC",
    description:
      "Integrates the official Anthropic C# SDK into Azure Functions v4 (.NET 8 isolated worker), showcasing three real-world AI patterns: chat with prompt caching, streaming responses via IAsyncEnumerable, and an agentic tool-use loop where Claude invokes custom functions.",
    stack: [".NET 8", "Azure Functions v4", "C#", "Anthropic SDK"],
    architecture: "Serverless · Agentic AI",
    github: "https://github.com/ErShubhamKGupta/anthropic-sdk-poc",
    demo: null,
  },
  {
    name: "RazorCRUD",
    description:
      "A full-stack ASP.NET Core app built with Razor Pages, Onion Architecture, Repository Pattern, and Unit of Work. Features jQuery DataTables, AJAX-powered CRUD, Bootstrap Modals, and client-side validation — a comprehensive clean-architecture reference.",
    stack: ["ASP.NET Core", "Razor Pages", "EF Core", "jQuery", "Bootstrap"],
    architecture: "Onion Architecture · Repository Pattern",
    github: "https://github.com/ErShubhamKGupta/RazorCRUD",
    demo: null,
  },
  {
    name: "APIverse",
    description:
      "A publicly accessible API built with ASP.NET Core and C#, providing educational endpoints that demonstrate authentication, data retrieval, rate limiting, and API integration patterns — designed for developers learning how to consume and build APIs.",
    stack: ["ASP.NET Core", "C#", "Web API", "REST"],
    architecture: "RESTful API",
    github: "https://github.com/ErShubhamKGupta/APIverse",
    demo: null,
  },
  {
    name: "BankTransaction",
    description:
      "A .NET 6 MVC web application for managing bank transaction records with full CRUD operations, Entity Framework Core code-first migrations, and a clean MVC structure with HTML/CSS views.",
    stack: [".NET 6", "ASP.NET Core MVC", "EF Core", "C#", "SQL Server"],
    architecture: "MVC · Code-First DB",
    github: "https://github.com/ErShubhamKGupta/BankTransaction",
    demo: null,
  },
  {
    name: "NotificationFactory.Api",
    description:
      "A notification gateway API built on .NET 9 that dynamically routes messages across Email, SMS, and Push channels using the Factory Design Pattern — fully extensible via the Open/Closed Principle with Swagger UI and structured DI.",
    stack: [".NET 9", "ASP.NET Core", "C#", "Factory Pattern", "Swagger"],
    architecture: "Factory Design Pattern · SOLID",
    github: "https://github.com/ErShubhamKGupta/NotificationFactory.Api",
    demo: null,
  },
  {
    name: "EndpointX",
    description:
      "A .NET 8 Web API for employee management featuring ASP.NET Identity for authentication and authorization, Entity Framework Core with SQL Server, custom user identity fields, and built-in logging — structured for enterprise scalability.",
    stack: [".NET 8", "ASP.NET Identity", "EF Core", "SQL Server", "C#"],
    architecture: "Clean API · Auth & Authz",
    github: "https://github.com/ErShubhamKGupta/EndpointX",
    demo: null,
  },
];

export const achievements = [
  { value: "8+", label: "Years of Experience", sub: "Enterprise software development" },
  { value: "10+", label: "Microservices Shipped", sub: "In production environments" },
  { value: "10+", label: "Developers Mentored", sub: "Into their first engineering roles" },
  { value: "100K+", label: "Users Served", sub: "Across enterprise platforms" },
];

export const blogs = [
  {
    title: "The ASP.NET Core Middleware Mistakes Developers Keep Making",
    excerpt:
      "A few months ago, I was debugging an issue in one of our ASP.NET Core APIs that made absolutely no sense at first — a deep dive into the middleware pitfalls that catch even experienced developers off guard.",
    date: "May 2026",
    readTime: "6 min read",
    url: "https://medium.com/write-a-catalyst/the-asp-net-core-middleware-mistakes-developers-keep-making-441b1bdc635f",
    tags: ["ASP.NET Core", "Microservices", "C#"],
  },
  {
    title: "Building an AI Chatbot in .NET Using Azure OpenAI APIs",
    excerpt:
      "AI has moved from 'interesting' to something users actually expect in applications. A practical walkthrough of building a real chatbot in .NET backed by Azure OpenAI.",
    date: "Apr 2026",
    readTime: "8 min read",
    url: "https://medium.com/write-a-catalyst/building-an-ai-chatbot-in-net-using-azure-openai-apis-f442fe3cab8b",
    tags: ["AI", "Azure OpenAI", ".NET"],
  },
  {
    title: "JWT Authentication & Role-Based Authorization in ASP.NET Core (Without Overcomplicating It)",
    excerpt:
      "If you've worked on any real-world ASP.NET Core app, you've implemented authentication at least once. Here's how to do JWT and role-based auth the right way — clearly and without the usual boilerplate mess.",
    date: "Apr 2026",
    readTime: "7 min read",
    url: "https://medium.com/write-a-catalyst/jwt-authentication-role-based-authorization-in-asp-net-core-without-overcomplicating-it-1ca3f25a3f98",
    tags: ["ASP.NET Core", "Auth", ".NET"],
  },
];

export const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Engineering Manager, Synechron",
    initials: "RS",
    quote:
      "Shubham is one of the most reliable engineers I've worked with. His ability to break down complex problems and deliver clean, scalable solutions is exceptional. A fantastic mentor too.",
  },
  {
    name: "Priya Mehta",
    role: "Senior Developer, Nihilent",
    initials: "PM",
    quote:
      "Working with Shubham elevated our entire team. His deep .NET and Azure knowledge, combined with his focus on best practices, set a consistently high bar for code quality.",
  },
  {
    name: "David O'Brien",
    role: "Project Lead, Nihilent UK",
    initials: "DO",
    quote:
      "Shubham delivered critical API integrations ahead of schedule with zero production defects. His cross-timezone communication and ownership mindset made him invaluable.",
  },
  {
    name: "Ankit Verma",
    role: "Junior Developer (Mentee)",
    initials: "AV",
    quote:
      "Shubham mentored me fresh out of college. His patient explanations of SOLID principles, clean code, and architecture gave me a foundation I still rely on every day.",
  },
];
