const NAV_ITEMS = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/expertise",
    label: "Expertise",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const EXPERIENCE_ITEMS = [
  {
    date: "2024 February - now",
    company: "MFMSoft",
    position: "Automation and Back-end Developer",
    description: {
      mainText:
        "I am a highly skilled and detail-oriented software developer with a strong foundation in server-side development and automation. With a focus on creating efficient, scalable, and maintainable solutions, I have extensive experience in Node.js, Express, MySQL, and cloud integration. My expertise lies in designing robust server-side solutions, managing and optimizing APIs, and implementing seamless automation workflows to enhance business processes.",
      bulletPoints: [
        "Specialized in developing robust server-side solutions using Node.js, Express, and MySQL, and designed automated workflows with Node.js and Power Automate.",
        "Created and managed RESTful APIs with PM2, ensuring optimal performance and reliability while automating repetitive tasks such as data processing and API interactions.",
        " Integrated server applications with cloud services for scalability and maintainability, and utilized Power Automate for seamless integrations between business applications, enhancing information flow and reducing manual data entry.",
      ],
    },
  },
  {
    date: "2023 October - 2023 December",
    company: "PADC LLC",
    position: "Front-end Developer (Internship)",
    description: {
      mainText:
        "During my internship at PADC LLC, I delved into various facets of web development and acquired a wealth of valuable skills. This experience allowed me to focus on:",
      bulletPoints: [
        "Crafted web applications optimized for various devices using responsive design principles and enhanced code structure with TypeScript.",
        "Developed and interacted with RESTful APIs using Axios and managed asynchronous logic with Redux Thunk.",
        "Applied I18n practices for global audience reach and designed responsive user interfaces with Chakra UI.",
      ],
    },
  },
];

const EDUCATION_ITEMS = [
  {
    date: "March 2023 - August 2023",
    company: "GYUMRI INFORMATION TECHNOLOGIES CENTER",
    position: "Frontend Developer",
    description: {
      mainText:
        "During this course, I focused on mastering web development through various technologies and projects",
      bulletPoints: [
        "Acquired skills in HTML, CSS, and JavaScript, and advanced to using React, Redux Toolkit, and React Router for building interactive and state-managed web applications.",
        "Engaged in diverse projects that allowed me to apply my knowledge, enhancing my abilities and deepening my passion for web development.",
        "Developed interactive applications with a focus on responsive design and seamless navigation, ensuring a user-friendly experience.",
      ],
    },
  },
  {
    date: "August 2022 - December 2022",
    company: "Life Beget",
    position: "Frontend Developer",
    description: {
      mainText:
        "Throughout the course, I focused on mastering HTML, CSS, and JavaScript. I engaged in various hands-on projects and exercises to deepen my understanding of web development. While I didn't participate in specific clubs or societies, my individual projects allowed me to immerse myself fully in web development and enhance my skills.",
      bulletPoints: [
        "Gained proficiency in HTML, CSS, and JavaScript through immersive coursework and hands-on projects, enabling the creation of interactive and responsive web applications.",
        "Engaged in practical exercises that allowed for the application of learned skills, deepening understanding and preparing for real-world web development challenges.",
      ],
    },
  },
];

const SERVICES_ITEMS = [
  {
    title: "Front-end Development",
    description:
      "Elevate your web presence with cutting-edge front-end development using React and Next.js. We create dynamic, responsive user interfaces that deliver seamless performance and an engaging user experience. Leveraging React’s component-based architecture and Next.js’s server-side rendering capabilities, we ensure your website is not only visually stunning but also optimized for speed and SEO.",
  },
  {
    title: "Back-end Development",
    description:
      "Power your applications with robust and scalable back-end solutions. Our back-end development services include server-side programming, API development, database integration, and server management, ensuring your application runs smoothly and efficiently.",
  },
  {
    title: "Database Development",
    description:
      "Optimize your data management with our database development services. We design, implement, and maintain efficient databases, ensuring data integrity, security, and performance, tailored to meet your specific business needs.",
  },
  {
    title: "Automation Development",
    description:
      "Streamline your processes with custom automation solutions. Our automation system development services help you increase efficiency and reduce manual tasks by integrating advanced technologies to automate repetitive processes and workflows.",
  },
];

const SKILLS_ITEMS = {
  technologies: [
    {
      name: "JavaScript",
      logo: "https://spin.atomicobject.com/wp-content/uploads/JavaScript.png",
      description:
        "I am proficient in JavaScript, enabling me to create dynamic and interactive web applications.",
    },
    {
      name: "EcmaScript",
      logo: "https://s3.amazonaws.com/media-p.slid.es/uploads/sidneyb/images/1254820/logo_2.png",
      description:
        "I leverage the latest ECMAScript standards to write modern and efficient JavaScript code.",
    },
    {
      name: "TypeScript",
      logo: "https://miro.medium.com/v2/resize:fit:1187/1*H0bdRYh03hNm1y0QuJIhkg.png",
      description:
        "I am proficient in TypeScript, leveraging its static typing features to enhance code quality and catch errors early in the development process.",
    },
    {
      name: "React JS",
      logo: "https://www.pinclipart.com/picdir/big/385-3857336_react-logo-png-name-form-validation-clipart.png",
      description:
        "I specialize in building modern and responsive user interfaces using React.js. I excel in creating dynamic and interactive SPAs that provide a seamless user experience.",
    },
    {
      name: "Next JS",
      logo: "https://plugins.miniorange.com/wp-content/uploads/2022/02/next-js.webp",
      description:
        "I use Next.js for server-side rendering, static site generation, and building highly optimized and scalable React applications.",
    },
    {
      name: "i18n",
      logo: "https://avatars.githubusercontent.com/u/8546082?s=400&v=4",
      description:
        "I have experience implementing internationalization (i18n) in my projects, enabling the adaptation of content to different languages and regions.",
    },
    {
      name: "Redux",
      logo: "https://caclowers.github.io/img/about/redux.png",
      description:
        "I ensure a robust and organized architecture to facilitate efficient data flow within the application.",
    },
    {
      name: "Chakra UI",
      logo: "https://img.icons8.com/?size=512&id=hhZfccTvdhiR&format=png",
      description:
        "Chakra UI provides a set of customizable and themeable components that enable me to create consistent and visually appealing designs.",
    },
    {
      name: "Tailwind CSS",
      logo: "https://camo.githubusercontent.com/9ed4761d7d96fd3ee4efae89dca87bb5694e8d59103c91fd549e58572aba9b72/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f642f64352f5461696c77696e645f4353535f4c6f676f2e7376672f3230343870782d5461696c77696e645f4353535f4c6f676f2e7376672e706e67",
      description:
        "I use Tailwind CSS for its utility-first approach, allowing me to rapidly build custom and responsive designs.",
    },
    {
      name: "Axios",
      logo: "https://user-images.githubusercontent.com/8939680/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png",
      description:
        "I use Axios for making HTTP requests, handling responses, and integrating with RESTful APIs efficiently.",
    },
    {
      name: "REST API",
      logo: "https://cdn-ru.bitrix24.ru/b65191/landing/7d9/7d99bcc066b9dff8555de7fbd5aaf721/rest.png",
      description:
        "I design and develop RESTful APIs to enable seamless communication between the client and server.",
    },
    {
      name: "PHP",
      logo: "https://miro.medium.com/v2/resize:fit:1184/1*JGkOiiDXtsuXgq4koo5uJw.png",
      description:
        "I utilize PHP for server-side scripting, enabling the development of dynamic and interactive web applications.",
    },
    {
      name: "Node JS",
      logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/nodejs.png",
      description:
        "I use Node.js for building scalable and high-performance server-side applications.",
    },
    {
      name: "Express JS",
      logo: "https://www.simplilearn.com/ice9/tools_covered/ExpressJS-logo.png",
      description:
        "I use Express.js to create robust and flexible server-side applications with Node.js.",
    },
    {
      name: "Nest JS",
      logo: "https://epc-lnr.ru/tecnologies/nest.png",
      description:
        "I build efficient and scalable server-side applications using NestJS, a framework built on Node.js.",
    },
    {
      name: "Passport",
      logo: "https://s3.amazonaws.com/media-p.slid.es/uploads/1158813/images/6863206/passportJS.png",
      description:
        "I implement user authentication and authorization using Passport.js in Node.js applications.",
    },
    {
      name: "JSON Web Token",
      logo: "https://novakeith.net/wp-content/uploads/2022/01/JSON-Web-Token-Authentication-With-Node.png",
      description:
        "I use JSON Web Tokens (JWT) for secure and stateless authentication in web applications.",
    },
    {
      name: "Prisma ORM",
      logo: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/287/full/prismaHD.png",
      description:
        "I use Prisma ORM for database management, enabling efficient and type-safe data access.",
    },
    {
      name: "MySQL",
      logo: "https://streampipes.apache.org/img/pipeline-elements/org.apache.streampipes.connect.adapters.mysql.stream/icon.png",
      description:
        "I utilize MySQL for relational database management, ensuring efficient data storage and retrieval.",
    },
    {
      name: "PM2",
      logo: "https://ping.pm2.io/pm2.png",
      description:
        "I use PM2 for managing and monitoring Node.js applications, ensuring high availability and performance.",
    },
    {
      name: "GIT",
      logo: "https://3.bp.blogspot.com/-xhNpNJJyQhk/XIe4GY78RQI/AAAAAAAAItc/ouueFUj2Hqo5dntmnKqEaBJR4KQ4Q2K3ACK4BGAYYCw/s1600/logo+git+icon.png",
      description:
        "I use Git for version control, enabling collaborative development and efficient code management.",
    },
  ],
  softSkills: [
    {
      name: "Team Leadership",
      logo: "https://clipart-library.com/2023/transactional-leadership-management-style-transformational-leadership-student-leader-leadership-style-team-leader-leadership-development-smoking-cessation-teamwork-risk.png",
      description:
        "I lead teams effectively, fostering collaboration and achieving project goals.",
    },
    {
      name: "Problem Solving",
      logo: "https://static.wixstatic.com/media/bf91d2_7e3a8dbf06ed4ba18504a565f34458f7~mv2.png/v1/fill/w_1000,h_664,al_c,q_90,usm_0.66_1.00_0.01/bf91d2_7e3a8dbf06ed4ba18504a565f34458f7~mv2.png",
      description:
        "I excel in identifying and resolving complex issues, ensuring smooth project execution.",
    },
    {
      name: "Critical Thinking",
      logo: "https://clipart-library.com/2023/507-5075238_solve-problem-clipart-good-learning-environment-symbol-hd.png",
      description:
        "I apply critical thinking skills to analyze situations and make informed decisions.",
    },
    {
      name: "Time Management",
      logo: "https://www.kindpng.com/picc/m/357-3578151_the-lottery-book-review-written-communication-proficiency-time.png",
      description:
        "I manage time efficiently, prioritizing tasks to meet deadlines and achieve objectives.",
    },
    {
      name: "Accountability",
      logo: "https://ashlinassociates.com/wp-content/uploads/2022/04/accountability5.jpeg",
      description:
        "I take responsibility for my actions and ensure accountability in all aspects of work.",
    },
    {
      name: "Communication",
      logo: "https://avatars.mds.yandex.net/i?id=71d73ae245333fd30a579c7a679a500db226b648-3267835-images-thumbs&n=13",
      description:
        "I communicate effectively with team members and stakeholders, ensuring clarity and understanding.",
    },
    {
      name: "Remote Teamwork",
      logo: "https://www.actioned.com/wp-content/uploads/2018/05/remote-team.jpg",
      description:
        "I collaborate effectively with remote teams, ensuring productivity and cohesion.",
    },
    {
      name: "Adaptability",
      logo: "https://mir-s3-cdn-cf.behance.net/projects/max_808/94868670192015.Y3JvcCwyODc3LDIyNTEsNjQsMA.jpg",
      description:
        "I adapt to changing environments and requirements, maintaining flexibility and resilience.",
    },
    {
      name: "Public Speaking",
      logo: "https://lingo-star.com/wp-content/uploads/2019/10/public-speaking-3159217_1920-2.jpg",
      description:
        "I am confident in public speaking, delivering presentations and conveying ideas effectively.",
    },
    {
      name: "Research Skills",
      logo: "https://images.squarespace-cdn.com/content/v1/5b51df5812b13fce46a6868b/1574625695702-XJJQDI90IBR5FZX8F3CP/research.png",
      description:
        "I conduct thorough research to gather information and support project development.",
    },
    {
      name: "Presentation Skills",
      logo: "https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/3a40a69a-839e-4329-afb3-98c47df98992_CI.png",
      description:
        "I create and deliver engaging presentations, effectively communicating concepts and information.",
    },
    {
      name: "Coaching",
      logo: "https://avatars.mds.yandex.net/i?id=a3cb13a9b114493edf62ed5198701d53e0150952-5433932-images-thumbs&n=13",
      description:
        "I provide guidance and mentorship to help others develop their skills and reach their full potential.",
    },
  ],
};

export {
  NAV_ITEMS,
  EXPERIENCE_ITEMS,
  EDUCATION_ITEMS,
  SERVICES_ITEMS,
  SKILLS_ITEMS,
};
