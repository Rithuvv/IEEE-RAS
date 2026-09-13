// All facts in this file are drawn from publicly verifiable sources:
// ieee-ras.org, robohub.org, IEEE RAS LinkedIn/Facebook, and IEEE RAS VIT Chennai's
// own public LinkedIn, Instagram and VIT Chennai (SENSE school) pages.
// No statistics, members, or events are invented.

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "domains", label: "Domains" },
  { id: "activities", label: "Activities" },
  { id: "projects", label: "Projects" },
  { id: "resources", label: "Resources" },
  { id: "contact", label: "Contact" },
];

export const ABOUT_STATS = [
  { value: "45+", label: "Technical committees across RAS worldwide" },
  { value: "160+", label: "Countries with active RAS members" },
  { value: "ICRA / IROS", label: "RAS-sponsored flagship conferences" },
];

export const ABOUT_TEXT = {
  lede:
    "IEEE RAS is the leading professional society dedicated to the theory and practice of robotics and automation engineering, operating as part of the world's largest technical professional organization, IEEE.",
  mission:
    "To foster the development and facilitate the exchange of scientific and technological knowledge in robotics and automation that benefits members, the profession, and humanity.",
  vision:
    "To be the most recognized and respected global organization in robotics and automation.",
  distinction:
    "Robotics research emphasizes intelligence and adaptability for unstructured environments, while automation research emphasizes efficiency, reliability and productivity in structured ones — RAS spans and connects both.",
  chapter:
    "The IEEE RAS Student Chapter at VIT Chennai brings this global mission to campus — a community under the School of Electronics Engineering (SENSE) where students explore robotics and automation beyond the classroom, through workshops, hands-on builds and technical sessions with industry practitioners.",
};

export const DOMAINS = [
  {
    code: "ROB",
    title: "Robotics",
    icon: "Bot",
    short: "Systems that sense, move and act in the physical world.",
    detail:
      "The design and study of systems built from sensors and actuators that operate autonomously or alongside humans. RAS's core field of interest emphasizes intelligence and adaptability so machines can cope with unstructured, unpredictable environments.",
  },
  {
    code: "AUT",
    title: "Automation",
    icon: "Cog",
    short: "Structured systems built for efficiency and reliability.",
    detail:
      "Automation research focuses on efficiency, productivity, quality and reliability — systems that run autonomously, often in structured settings, over extended periods. It's the discipline of engineering repeatable, dependable processes.",
  },
  {
    code: "AI",
    title: "Artificial Intelligence",
    icon: "BrainCircuit",
    short: "The reasoning layer behind autonomous decision-making.",
    detail:
      "AI supplies the decision-making and learning capability that lets robotic systems interpret situations and choose actions — from classical planning algorithms to modern machine learning approaches applied to real-world robotics.",
  },
  {
    code: "CV",
    title: "Computer Vision",
    icon: "ScanEye",
    short: "Turning camera and sensor data into machine understanding.",
    detail:
      "Computer and robot vision is one of RAS's dedicated technical committee areas — extracting meaning from images, depth data and video so robots can recognize objects, map their surroundings and navigate safely.",
  },
  {
    code: "CTRL",
    title: "Control Systems",
    icon: "SlidersHorizontal",
    short: "The feedback loops that keep motion precise and stable.",
    detail:
      "Control systems engineering deals with how a robot's actuators respond to sensor feedback in real time — the mathematics and engineering that keep a robotic arm precise or a drone stable in flight.",
  },
  {
    code: "HRI",
    title: "Human-Robot Interaction",
    icon: "Users",
    short: "Designing how people and machines work side by side.",
    detail:
      "HRI studies how robots and humans communicate, collaborate and build trust — an increasingly central concern as robotics moves from isolated factory cells into shared human spaces.",
  },
  {
    code: "AUTON",
    title: "Autonomous Systems",
    icon: "Navigation",
    short: "Machines that perceive, decide and act without a human loop.",
    detail:
      "Autonomous systems combine perception, planning and control so a machine can operate with minimal human intervention — from mobile ground robots to aerial and underwater vehicles.",
  },
  {
    code: "IND",
    title: "Industrial Robotics",
    icon: "Factory",
    short: "Automation at the scale of real manufacturing floors.",
    detail:
      "Industrial robotics applies manipulators, automation and control at production scale — the domain where RAS's roots in manufacturing and process engineering remain deeply active today.",
  },
];

// Activities: verified public events organized by / involving IEEE RAS VIT Chennai,
// plus general categories of activity the chapter and RAS commonly run.
export const EVENTS = [
  {
    name: "RoverX — The Hardware Workshop",
    date: "31 Oct – 2 Nov 2025",
    type: "Workshop",
    description:
      "A hands-on hardware workshop organized by IEEE RAS VIT Chennai as part of TechnoVIT, VIT Chennai's national-level technology festival. Participants built DIY rovers and robotic systems using ESP32 microcontrollers.",
    link: "https://www.linkedin.com/in/ieee-ras-student-chapter-vit-chennai-403208191/",
  },
  {
    name: "RAScade Hackathon",
    date: "Recent chapter activity",
    type: "Hackathon",
    description:
      "A hackathon run by the chapter with registrations hosted on Devfolio, bringing together student teams to build and pitch projects over a fixed time window.",
    link: "https://linktr.ee/IEEERASVITChennai",
  },
  {
    name: "IoT in Robotics — Demo Session",
    date: "19 Dec 2018",
    type: "Guest Session",
    description:
      "An interactive demo session on IoT in robotics, led by an industry expert as part of the chapter's regular technical activities on the VIT Chennai campus.",
    link: null,
  },
];

export const ACTIVITY_CATEGORIES = [
  {
    icon: "Wrench",
    title: "Hands-on Workshops",
    description:
      "Build-focused sessions — like RoverX's ESP32 rover build — where students assemble and program real hardware rather than only reading about it.",
  },
  {
    icon: "Trophy",
    title: "Hackathons & Competitions",
    description:
      "Timed team events such as RAScade that push students to design, build and present a working solution against the clock.",
  },
  {
    icon: "Presentation",
    title: "Technical & Guest Sessions",
    description:
      "Talks and demos led by faculty and industry practitioners covering emerging areas across robotics and automation.",
  },
  {
    icon: "FolderKanban",
    title: "Project-Based Learning",
    description:
      "Ongoing, longer-form builds where members apply robotics and automation concepts to a self-directed project over a semester.",
  },
];

export const PROJECT_AREAS = [
  {
    icon: "Bot",
    title: "Autonomous Robots",
    description:
      "Mobile platforms that combine sensing, planning and control to move through an environment with minimal human input.",
  },
  {
    icon: "ScanEye",
    title: "Computer Vision Systems",
    description:
      "Vision pipelines for object detection, tracking and mapping — the perception layer that lets a robot understand its surroundings.",
  },
  {
    icon: "Grip",
    title: "Robotic Manipulators",
    description:
      "Arms and grippers engineered for precise, repeatable manipulation tasks, from pick-and-place to fine assembly.",
  },
  {
    icon: "CircuitBoard",
    title: "Embedded Robotics",
    description:
      "The microcontroller and firmware layer — like the ESP32 platform used in RoverX — that turns code into physical motion.",
  },
  {
    icon: "BrainCircuit",
    title: "AI-Powered Robotics",
    description:
      "Applying machine learning to perception, decision-making and adaptive behaviour in robotic systems.",
  },
  {
    icon: "Compass",
    title: "Autonomous Navigation",
    description:
      "Localization, mapping and path-planning techniques that let a robot find its way through unknown or changing spaces.",
  },
];

export const ECOSYSTEM_STAGES = [
  {
    key: "sense",
    title: "Sense",
    subtitle: "Sensors",
    description:
      "Cameras, LIDAR, IMUs and other sensors gather raw signals from the physical environment.",
    icon: "Radar",
  },
  {
    key: "perceive",
    title: "Perceive",
    subtitle: "Computer Vision",
    description:
      "Perception systems interpret raw sensor data into structured understanding — objects, distances, surfaces.",
    icon: "ScanEye",
  },
  {
    key: "decide",
    title: "Decide",
    subtitle: "AI / Planning",
    description:
      "Decision-making layers — from classical planners to learned policies — choose what action to take next.",
    icon: "BrainCircuit",
  },
  {
    key: "act",
    title: "Act",
    subtitle: "Control Systems",
    description:
      "Control systems translate decisions into precise, stable motor and actuator commands.",
    icon: "SlidersHorizontal",
  },
  {
    key: "learn",
    title: "Learn",
    subtitle: "Feedback",
    description:
      "Outcomes feed back into the system, refining future sensing, perception and decisions over time.",
    icon: "RefreshCw",
  },
];

export const RESOURCES = [
  {
    category: "IEEE RAS",
    title: "IEEE Robotics and Automation Society",
    description: "The official global RAS website — news, technical committees, and ways to get involved.",
    url: "https://www.ieee-ras.org/",
  },
  {
    category: "IEEE RAS",
    title: "RAS Resource Center",
    description: "Webinars, conference presentations and workshops for education and professional development.",
    url: "https://resourcecenter.ieee-ras.org/",
  },
  {
    category: "IEEE RAS",
    title: "IEEE RAS on LinkedIn",
    description: "Global RAS updates, award announcements and technical committee opportunities.",
    url: "https://www.linkedin.com/company/ieee-ras",
  },
  {
    category: "Publications",
    title: "IEEE Xplore Digital Library",
    description: "Search peer-reviewed robotics and automation research, including RAS transactions and journals.",
    url: "https://ieeexplore.ieee.org/",
  },
  {
    category: "Publications",
    title: "arXiv — Robotics (cs.RO)",
    description: "Open-access preprints covering the latest research across robotics.",
    url: "https://arxiv.org/list/cs.RO/recent",
  },
  {
    category: "Learning",
    title: "ROS — Robot Operating System",
    description: "Documentation and tutorials for the open-source framework underlying much of modern robotics software.",
    url: "https://www.ros.org/",
  },
  {
    category: "Learning",
    title: "IEEE Robotics & Automation Magazine",
    description: "IEEE's magazine covering trends, tutorials and perspectives across the field.",
    url: "https://www.ieee-ras.org/publications/ram",
  },
  {
    category: "IEEE",
    title: "IEEE.org",
    description: "The main IEEE website — membership, standards, and the broader professional organization.",
    url: "https://www.ieee.org/",
  },
  {
    category: "Conferences",
    title: "ICRA — International Conference on Robotics and Automation",
    description: "One of RAS's two flagship annual conferences.",
    url: "https://www.ieee-ras.org/conferences",
  },
  {
    category: "Chapter",
    title: "IEEE RAS VIT Chennai — Instagram",
    description: "Photos and updates from the chapter's activities on campus.",
    url: "https://www.instagram.com/ieeerasvitc/",
  },
];

export const CONTACT_LINKS = [
  {
    icon: "Globe",
    label: "IEEE RAS (Global)",
    value: "ieee-ras.org",
    href: "https://www.ieee-ras.org/",
  },
  {
    icon: "Instagram",
    label: "Instagram",
    value: "@ieeerasvitc",
    href: "https://www.instagram.com/ieeerasvitc/",
  },
  {
    icon: "Linkedin",
    label: "LinkedIn",
    value: "IEEE RAS Student Chapter VIT Chennai",
    href: "https://www.linkedin.com/in/ieee-ras-student-chapter-vit-chennai-403208191/",
  },
  {
    icon: "Mail",
    label: "Email",
    value: "ieeerasvitchennai@gmail.com",
    href: "mailto:ieeerasvitchennai@gmail.com",
  },
  {
    icon: "MapPin",
    label: "Campus",
    value: "School of Electronics Engineering, VIT Chennai",
    href: "https://chennai.vit.ac.in/",
  },
];

export const CONTACT_EMAIL = "ieeerasvitchennai@gmail.com";
