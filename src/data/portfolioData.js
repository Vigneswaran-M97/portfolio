export const profile = {
  name: "Vigneswaran M",
  title: "Data Scientist",
  tagline: "Machine Learning  ·  Computer Vision  ·  Document Intelligence",
  about: `Data Scientist with 4+ years of experience building and deploying production-grade Machine Learning systems 
  in banking and large-scale document intelligence domains. Experienced in supervised learning, computer vision, 
  and high-throughput image processing pipelines handling over 120 million images in production. Strong foundation 
  in feature engineering, model evaluation, and ML deployment.`,
  stats: [
    { value: "4+", label: "Years Experience" },
    { value: "120M+", label: "Images Processed" },
    { value: "6+", label: "Production Projects" },
    { value: "3×", label: "Awards Won" },
  ],
};

export const projectCategories = [
  {
    id: "cv-ml",
    category: "Core Machine Learning & Computer Vision",
    projects: [
      {
        id: 1,
        title: "I-Masking – Aadhaar Compliance Automation",
        description:
          "Built a large-scale computer vision system to automatically detect and mask sensitive Aadhaar information in document images for regulatory compliance. Implemented a YOLO-based object detection pipeline and high-throughput image processing workflow using Python and OpenCV. Processed over 120 million images in production. Developed REST APIs using Django and stored audit metadata in MongoDB.",
        technologies: ["Python", "YOLO", "OpenCV", "Django REST Framework", "MongoDB"],
        featured: true,
      },
      {
        id: 2,
        title: "I-Vision – Invoice Intelligence System",
        description:
          "Developed an end-to-end machine learning pipeline to automate invoice digitization and structured data extraction. Implemented YOLO and FastRCNN for layout detection and SpaCy for entity extraction. Designed annotation workflows and deployed using Django on IIS. Received Innovation of the Month award (2024).",
        technologies: ["Python", "YOLO", "FastRCNN", "SpaCy", "Django"],
        featured: false,
        award: "Innovation of the Month 2024",
      },
      {
        id: 3,
        title: "OVD – KYC Document Intelligence",
        description:
          "Built an automated document intelligence system using Vision-Language Model (Qwen 2.5-VL 3B) integrated via Ollama. Converted unstructured document images into structured JSON outputs for banking workflows.",
        technologies: ["Python", "Django", "Ollama", "Vision-Language Models"],
        featured: false,
      },
    ],
  },
  {
    id: "classical-ml",
    category: "Classical Machine Learning",
    projects: [
      {
        id: 4,
        title: "Handwritten Character Recognition System",
        description:
          "Developed an SVM-based classification model trained on 500,000+ handwritten character samples. Applied preprocessing and feature extraction techniques and deployed the model for real-time inference.",
        technologies: ["Python", "Scikit-learn", "SVM"],
        featured: false,
      },
    ],
  },
  {
    id: "iot",
    category: "IoT & Systems Engineering",
    projects: [
      {
        id: 5,
        title: "Baby Sensor – IoT Health Monitoring",
        description:
          "Developed IoT-based real-time monitoring system for newborn health parameters. Built backend services and integrated MongoDB with GCP for continuous data streaming.",
        technologies: ["Node.js", "MongoDB", "GCP", "Firebase"],
        featured: false,
      },
      {
        id: 6,
        title: "TAP – IoT-Based Animal Monitoring",
        description:
          "Designed animal health monitoring system using Raspberry Pi and thermal cameras. Built backend services and deployed using AWS and Docker.",
        technologies: ["Raspberry Pi", "Node.js", "AWS", "Docker"],
        featured: false,
      },
    ],
  },
];

export const awards = [
  {
    id: 1,
    title: "Innovation of the Month",
    year: "2024",
    description: "Awarded for building I-Vision, an end-to-end invoice intelligence and document extraction system.",
    icon: "🏆",
  },
  {
    id: 2,
    title: "Exceptional Performer",
    year: "2023",
    description: "Recognised for outstanding contributions to production ML systems and delivery excellence.",
    icon: "⭐",
  },
  {
    id: 3,
    title: "Exceptional Performer",
    year: "2022",
    description: "Recognised for consistent high-impact delivery across banking document intelligence projects.",
    icon: "⭐",
  },
];

export const techStack = [
  {
    category: "Languages",
    icon: "{ }",
    items: ["Python", "SQL", "TypeScript"],
  },
  {
    category: "Machine Learning",
    icon: "🤖",
    items: ["Scikit-learn", "YOLO", "FastRCNN", "OpenCV", "SpaCy"],
  },
  {
    category: "Generative AI",
    icon: "✦",
    items: ["Vision-Language Models", "Ollama", "Qwen 2.5-VL"],
  },
  {
    category: "Backend",
    icon: "⚙",
    items: ["Django", "Django REST Framework", "Node.js"],
  },
  {
    category: "Databases",
    icon: "🗄",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁",
    items: ["AWS", "GCP", "Docker", "IIS", "Firebase"],
  },
];
