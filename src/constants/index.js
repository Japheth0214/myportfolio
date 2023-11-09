import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  cypress,
  git,
  awb,
  fusion,
  teleperformance,
  rj,
  udemy,
  jira,
  user1,
  user2,


  realestate,
  ecommerce,
  tasklist,
  express,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Software Tester",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "Customer Service",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
   {
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "cypress",
    icon: cypress,
  },
  {
    name: "jira",
    icon: jira,
  },

];

const experiences = [
  {
    title: "Quality Engineer Intern",
    company_name: "Achieve Without Borders.Inc,,",
    icon: awb,
    iconBg: "#383E56",
    date: "Aug - Oct 2023",
    points: [
      "Quality Control (QC) and Quality Assurance (QA) processes are pivotal for ensuring software quality, involving both manual and automated testing with tools like Cypress.",
      "Effective project management is crucial for overseeing software development projects, often employing Agile methodology to facilitate iterative and collaborative processes.",
      "Understanding software product requirements is fundamental for creating and implementing comprehensive test cases and scripts to validate software functionality.",
      "Documenting and tracking software defects throughout the Software Development Life Cycle (SDLC) and Software Testing Life Cycle (STLC) ensures that issues are identified and resolved in a timely manner.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Udemy Bootcamp",
    icon: udemy,
    iconBg: "#383E56",
    date: "Dec 2022 - March 2023",
    points: [
      "Utilized HTML, CSS, and JavaScript, the foundational technologies of contemporary websites and web applications, to develop various web projects.",
      "Implemented React for front-end, Node.js for back-end, and MongoDB for database management, enabling the creation of diverse projects, from basic websites to comprehensive web applications.",
      "Demonstrated proficiency in building RESTful APIs using Node.js, facilitating effective communication between the front-end and back-end of web applications.",
      "Leveraged Github as a version control repository, enabling efficient collaboration and version management, while utilizing HTTP requests to retrieve data and employing data modeling in Mongoose for effective database management.",
    ],
  },
  {
    title: "Account Payables Specialist",
    company_name: "Fusion BPO Services",
    icon: fusion,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Sept 2022",
    points: [
      "Assisting customer on filing a claim and also on making a payment  over the phone for the renewal of their insurance and sending different types of documents via email, mail or fax if requested.",
    ],
  },
  {
    title: "Flight Travel Advisor",
    company_name: "Teleperformance",
    icon: teleperformance,
    iconBg: "#383E56",
    date: "Nov 2019 - Aug 2020",
    points: [
      "Assigned on different tasks like cancelling a flight ticket and rescheduling a flight schedule if requested by customer and processing refund if the ticket is refundable. Adding baggage allowance and seat selection is also one of our service",
    ],
  },
  {
    title: "Email Representative",
    company_name: "RJ Globus Solutions",
    icon: rj,
    iconBg: "#E6DEDD",
    date: "Feb 2019 - Aug 2019",
    points: [
      "Providing assistance thru emails and chats for those who want to return their item and would like to get a refund or replacement for faulty and damage items",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but you proved me wrong.",
    name: "Jannah Gilleine",
    designation: "Back End Developer",
    company: "Douhle House",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success is what he does.",
    name: "James Arcilla",
    designation: "Web Developer",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After you optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Real Estate",
    description:
      "Real estate website offers a comprehensive platform for users to browse, buy, sell, and rent properties effortlessly. Utilizing the power of the MERN stack - MongoDB for robust data storage, Express.js for efficient server-side handling, React for seamless and dynamic user interfaces, and Node.js for scalable and high-performance back-end operations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express JS",
        color: "pink-text-gradient",
      },
      {
        name: "Node JS",
        color: "orange-text-gradient",
      },
    ],
    image: realestate,
    source_code_link: "https://real-estate-com-u6ln.onrender.com/",
  },
  {
    name: "Ecommerce site",
    description:
      "Our simple e-commerce site allows users to easily add items to their cart, make purchases, and calculate the estimated total amount before proceeding to checkout. The site enables smooth functionality for adding and removing items from the cart, with a clear display of the selected products and their respective prices.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://japheth0214.github.io/shopping-cart/index.html",
  },
  {
    name: "Simple Task List",
    description:
      "Our simple CRUD Task list application provides users with a straightforward interface to create, read, update, and delete tasks, accompanied by clear error messages for any issues that may arise. It enables users to effortlessly add new tasks, view the existing tasks, update the status or details of the tasks, and delete tasks upon completion.",
    tags: [
      {
        name: "HTMML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
    ],
    image: tasklist,
    source_code_link: "https://japheth0214.github.io/task-list/",
  },
];

export { services, technologies, experiences, testimonials, projects };
