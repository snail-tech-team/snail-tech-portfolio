import {
  detail,
  footer,
  home,
  landingPage,
  landingPage2,
  login,
  register,
  successAdd,
  wishlist,
} from "../assets/xiaopee/index";

import {
  createEvent,
  editProfile,
  eTicket,
  eventDetail,
  introScreen1,
  landingPageMEvent,
  loginMEvent,
  midtrans,
  myTickets,
  nearbyEvent,
  paymentForm,
  profile,
  registerMEvent,
} from "../assets/m-event/index";

import {
  afterPaymentUcok,
  cmsBookingsUcok,
  cmsEditRoomUcok,
  cmsRoomsUcok,
  cmsUploadPhotoUcok,
  detailUcok,
  detailUcok2,
  homeUcok,
  homeUcok2,
  loginUcok,
  midtransUcok,
  myBookingUcok,
  registerUcok,
} from "../assets/omahucok/index";

import {
  boardChatApp,
  joinChatApp,
  landingPageChatApp,
  roomChatApp,
} from "../assets/chat-app/index";

import {
  companyList,
  exportCurrentView,
  exportOptions,
  exportOutput,
  itemList,
  landingPageErp,
  menuManagement,
  productionPlanCreate,
  productionPlanDetail,
  productionPlanList,
  productionPlanSearch,
  purchaseOrderCreate,
  purchaseOrderList,
  salesReceipt2,
  salesReceiptDetail,
  salesReceiptList,
  userAccessRight,
  userDetail,
  userManagementList,
} from "@/assets/erp";
import {
  hasilUnduh,
  landingPageNutrical,
  step1,
  step2,
  step3,
  step4,
} from "@/assets/nutrical";
import {
  aboutUs,
  blogDetail,
  blogs,
  cms1,
  cmsBlogs,
  cmsCreateBlog,
  cmsCreateProject,
  contactUs,
  landingPageZamasto,
  projectsZamasto,
  services,
} from "@/assets/zamasto";
import {
  addPostInstaClone,
  detailInstaClone,
  homeInstaClone,
  loginInstaClone,
  profileInstaClone,
  registerInstaClone,
  searchInstaClonefrom,
} from "../assets/instaclone/index";
export const PROJECTS = [
  {
    name: "Nutrical",
    features: [
      "Upload Excel file or manually input population data segmented by child age groups (6–12 months, 1–3 years, and above 3 years).",
      "Customize daily energy requirements based on nutritional status (calorie adjustment).",
      "Calculate procurement needs for PKGK products (e.g., SGM Ananda Gain 100, SGM Eksplor Optigrow, etc.).",
      "Generate detailed procurement summaries and calculations based on population input.",
      "Download the result as an Excel file or send it directly via WhatsApp.",
      "Simulate malnutrition prevalence reduction based on the intervention plan.",
    ],
    description: `Nutrical is a web-based tool designed to assist public health departments in planning nutritional interventions and calculating PKGK procurement needs.
The application was developed using Next.js (TypeScript) for the frontend with React Query and Axios for data fetching and state management. 
The backend is built using Express.js with Prisma ORM for database operations. This project focuses on user-friendly data input, real-time computation, and exporting features to aid in nutrition-related decision making.`,
    linkRepository: "-",
    photos: [landingPageNutrical, step1, step2, step3, hasilUnduh, step4],
    isMobile: false,
  },
  {
    name: "Zamasto Company Profile Website",
    features: [
      "Static pages for Home, About Us, Projects, Services, Blogs, and Contact Us.",
      "Content Management System (CMS) for managing blog posts and project listings.",
      "Integrated Google Apps Script to handle contact form submissions and send emails directly to admin inbox.",
      "SEO-friendly implementation using React Helmet for better search engine visibility.",
      "Responsive design for mobile and desktop devices.",
    ],
    description: `A company profile website built using React.js (JavaScript) on the frontend and Node.js + Express.js (JavaScript) on the backend, with PostgreSQL as the database.
This project includes a custom CMS for managing blog content and project showcases, integrates email automation via Google Apps Script, and follows SEO best practices to optimize discoverability.`,
    linkRepository: "-",
    photos: [
      landingPageZamasto,
      aboutUs,
      projectsZamasto,
      services,
      blogs,
      blogDetail,
      contactUs,
      cms1,
      cmsCreateProject,
      cmsBlogs,
      cmsCreateBlog,
    ],
    isMobile: false,
  },
  {
    name: "ERP System",
    features: [
      "🔒 User authentication and authorization using JWT with 3 roles: Super Admin, Admin, and User. Each role has different access permissions.",
      "📊 Responsive dashboard that displays total revenue, total cost, and total profit with monthly filters.",
      "🧾 Full sales workflow: Sales Estimates → Customers → Sales Orders → Delivery Orders → Invoices → Sales Receipts.",
      "📥 Complete purchase workflow: Suppliers → Purchase Orders → Item Receipts → Purchase Receipts → Bills → Expenses.",
      "🏭 Production module with Production Plan, Schedule, Workstations, Work Orders, Labors, and Bill of Materials.",
      "📦 Inventory tracking through Items and Stock Entry modules.",
      "⚙️ Administration tools: Tenants, Bank Accounts, Documents, Companies, Taxes, Currency Converter, Logo & Signature.",
      "⚙️ Settings menu for User Management and Menu Management.",
      "🔍 Search, filter, and pagination implemented on all major listing pages.",
      "🔗 Cross-document tracking and grep functionality based on Customer Name or Order Number.",
      "📤 Export data to Excel: supports exporting current view or selected custom fields.",
      "❓ Interactive 'Need Help?' chat assistant powered by AI that can answer questions about how to use the ERP system, and also provide insights or query internal data (e.g., sales performance, list of overdue invoices).",
      "🔍 Document status flow tracking for each module, as visualized in process flow diagrams (e.g. Sales → Invoice → Receipt, Purchase → Bill → Payment, etc.).",
      "📁 Image uploads integrated with AWS S3 for secure file storage.",
    ],
    description: `An end-to-end ERP web application built using Next.js (TypeScript) on the frontend with SOLID principle architecture, and Node.js + Express (TypeScript) on the backend using a structured folder system (route, controller, service, repository).
The application is deployed on AWS, uses AWS S3 for media storage, and supports full business workflows for Sales, Purchase, Production, Inventory, and Finance.
It features powerful admin tools, role-based access control, Excel export flexibility, and a built-in AI assistant for both functional help and data querying.`,
    linkRepository: "-",
    photos: [
      landingPageErp,
      salesReceiptList,
      salesReceiptDetail,
      salesReceipt2,
      purchaseOrderList,
      purchaseOrderCreate,
      companyList,
      exportCurrentView,
      exportOptions,
      exportOutput,
      itemList,
      menuManagement,
      productionPlanCreate,
      productionPlanDetail,
      productionPlanList,
      productionPlanSearch,
      userAccessRight,
      userDetail,
      userManagementList,
    ],
    isMobile: false,
  },
  {
    name: "M Event",
    features: [
      "Login (Applying JWT) and Register",
      "Displays a list of all available events, applies a search feature based on event name and sorting based on event category.",
      "Displays events around the user's location with a radius of 5km, using Expo Location, Expo MapView and Google Places API.",
      "Integrate payments using Midtrans.",
      "E-tickets ",
      "Create a free event ",
    ],
    description: `M event is a mobile-based event application created using the React Native, Expo, React Native Paper, ExpressJS stack with a PostgreSQL database.
    The client of this application is deployed using Expo,
    The server for this application is deployed using AWS, the database for this application is deployed using Supabase`,
    linkRepository: "https://github.com/HCK71-FP-Event",
    photos: [
      introScreen1,
      registerMEvent,
      loginMEvent,
      landingPageMEvent,
      eventDetail,
      paymentForm,
      midtrans,
      myTickets,
      eTicket,
      nearbyEvent,
      createEvent,
      profile,
      editProfile,
    ],
    isMobile: true,
  },
  {
    name: "Xiaopee",
    features: [
      "Display a list of products using the infinite scroll and search features",
      "Displays information about each product",
      "Login (Applying JWT) and Register",
      "Add products to wishlist ",
    ],
    description: `Xiaopee is a web-based e-catalogue application created using the TypeScript (NextJS), DaisyUI and MongoDB stack. 
    This application is deployed using Vercel`,
    linkRepository: "https://github.com/marcoabelz/xiaopee",
    photos: [
      landingPage,
      landingPage2,
      footer,
      home,
      detail,
      successAdd,
      wishlist,
      login,
      register,
    ],
    isMobile: false,
  },
  {
    name: "Instaclone",
    features: [
      "Login (apply JWT and Cookies) and Register",
      "Display feeds using flatlist, implementing Redis",
      "Implement like, comment and follow features",
      "Search, search for users based on username ",
    ],
    description: `Instaclone is a mobile-based Instagram cloning application created using React Native, Expo, React Native Paper, Apollo GraphQL and MongoDB
    The client of this application is deployed using Expo, the server of this application is deployed using AWS, the database of this application is deployed using Supabase`,
    linkRepository: "https://github.com/marcoabelz/instaclone",
    photos: [
      loginInstaClone,
      registerInstaClone,
      homeInstaClone,
      detailInstaClone,
      searchInstaClonefrom,
      addPostInstaClone,
      profileInstaClone,
    ],
    isMobile: true,
  },
  {
    name: "Chatting App",
    features: ["Real time chat "],
    description: `
    Chat app is a web-based chat application created using the Socket.IO stack.
    This application is deployed using Firebase`,
    linkRepository: "https://github.com/H8HCK71-Sprite-LadderSnakeGame",
    photos: [joinChatApp, roomChatApp, landingPageChatApp, boardChatApp],
    isMobile: false,
  },
  {
    name: "Omahucok CMS",
    features: [
      "Login (Applying JWT) and Register",
      "CMS Site CRUD",
      "Display rooms",
      "Displays room details and availability status",
      "Booking and integrating payments using Midtrans",
      "Displays user bookings",
      "Display all booking lists (CMS)",
      "Upload multiple room images using cloudinary (CMS) ",
    ],
    description: `Omahucok is a web-based hotel booking CMS application created using the ReactJS (Vite), Tailwind (Flowbite) and PostgreSQL stack.
    The client of this application is deployed using Firebase, the server of this application is deployed using AWS, the database of this application is deployed using Supabase`,
    linkRepository: "https://github.com/marcoabelz/IP-HCK71",
    photos: [
      loginUcok,
      registerUcok,
      homeUcok,
      homeUcok2,
      detailUcok,
      detailUcok2,
      midtransUcok,
      afterPaymentUcok,
      myBookingUcok,
      cmsRoomsUcok,
      cmsEditRoomUcok,
      cmsUploadPhotoUcok,
      cmsBookingsUcok,
    ],
    isMobile: false,
  },
];

export const SKILL_CATEGORIES = [
  {
    title: "Front-End",
    icon: "🎨",
    skills: [
      { name: "HTML", color: "from-orange-400 to-red-500", icon: "html.png" },
      {
        name: "JavaScript",
        color: "from-yellow-400 to-yellow-600",
        icon: "javascript.svg",
      },
      {
        name: "TypeScript",
        color: "from-blue-500 to-blue-700",
        icon: "typescript.svg",
      },
      {
        name: "Bootstrap",
        color: "from-purple-500 to-purple-700",
        icon: "bootstrap.svg",
      },
      {
        name: "Tailwind",
        color: "from-cyan-400 to-blue-500",
        icon: "tailwind.svg",
      },
      { name: "React", color: "from-cyan-300 to-cyan-500", icon: "react.svg" },
      { name: "Vite", color: "from-purple-400 to-pink-500", icon: "vite.svg" },
      {
        name: "React Native",
        color: "from-blue-400 to-purple-500",
        icon: "react-native.svg",
      },
      {
        name: "NextJS",
        color: "from-gray-700 to-gray-900",
        icon: "nextjs.svg",
      },
    ],
  },
  {
    title: "Back-End",
    icon: "⚙️",
    skills: [
      {
        name: "NodeJS",
        color: "from-green-500 to-green-700",
        icon: "nodejs.svg",
      },
      {
        name: "ExpressJS",
        color: "from-gray-600 to-gray-800",
        icon: "expressjs.svg",
      },
      {
        name: "MongoDB",
        color: "from-green-400 to-green-600",
        icon: "mongodb.svg",
      },
      {
        name: "PostgreSQL",
        color: "from-blue-600 to-blue-800",
        icon: "postgresql.svg",
      },
      {
        name: "Sequelize",
        color: "from-blue-500 to-indigo-600",
        icon: "sequelize.svg",
      },
      { name: "Jest", color: "from-red-500 to-pink-600", icon: "jest.svg" },
      {
        name: "GraphQL",
        color: "from-pink-500 to-purple-600",
        icon: "graphql.svg",
      },
      {
        name: "Postman",
        color: "from-orange-500 to-red-500",
        icon: "postman.svg",
      },
    ],
  },
  {
    title: "Quality Assurance",
    icon: "🔍",
    skills: [
      {
        name: "WinAMS",
        color: "from-blue-500 to-indigo-600",
        icon: "winams.svg",
      },
      {
        name: "Excel",
        color: "from-green-500 to-green-700",
        icon: "excel.svg",
      },
    ],
  },
];

export const EXPERIENCES = [
  {
    office: "PT Delta Anugrah",
    period: "August 2024 - Present",
    icon: "💻",
    projects: [
      {
        position: "Full-Stack Developer",
        description:
          "Developed a full-featured ERP (Enterprise Resource Planning) web application using Next.js (TypeScript) for the frontend and Express.js (TypeScript) for the backend, deployed on AWS.",
        tasks: [
          "Implemented core modules including Sales, Purchase, Production, Inventory, Administration, and Settings with full CRUD functionality.",
          "Built reusable UI components with Tailwind CSS and managed global state effectively using React hooks.",
          "Integrated AWS S3 for secure image/file storage and used JSON Web Token (JWT) for authentication and role-based access control (Super Admin, Admin, User).",
          "Developed complex features like customer-based document chaining, order status tracking, and dynamic search/filter with pagination across all modules.",
          "Created Excel export for various documents (Sales Orders, Invoices, Bills, etc.), and grep-like linking for document consistency by order/customer reference.",
          "Designed dashboard to visualize total revenue, cost, and profit with month-based filtering.",
          "Applied SOLID principles in backend code using service, controller, and repository structure to ensure clean and scalable architecture.",
        ],
      },
    ],
  },

  {
    office: "PT SYS Indonesia",
    period: "September 2021 - December 2023",
    icon: "🧪",
    projects: [
      {
        position: "Quality Assurance Staff",
        description:
          "Performed white box unit testing for automatic transmission control systems using the C programming language and WinAMS tool.",
        tasks: [
          "Read and analyzed source code logic in C to identify and resolve bugs based on internal standards and automotive regulations.",
          "Designed and executed unit test cases with 100% coverage requirement, focusing on transmission systems for VW, BMW, FIAT, and SUZUKI vehicles.",
          "Used WinAMS to simulate and validate outputs from the embedded system, comparing results with expected behavior and internal specifications.",
          "Created test reports and coverage analysis documents to be reviewed by QA Leader and R&D teams.",
          "Developed Excel-based formulas to validate simulation results and cross-check with system logs.",
        ],
      },
    ],
  },
];
