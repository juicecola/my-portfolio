// src/data/projects.js
export const aiProjects = [
  {
    id: 'ai-chatbot-nlp',
    title: 'Intelligent Customer Support Chatbot',
    description: 'Developed an NLP-powered chatbot to handle customer inquiries, focusing on intent recognition and contextual understanding. Leveraged advanced NLP techniques for human-like conversation flow.',
    imageUrl: '/images/placeholder-chatbot.png', // Example: place in public/images/
    // Or import image from src/assets: import chatbotImg from '../assets/chatbot.png'; then use chatbotImg
    githubLink: 'https://github.com/yourusername/ai-chatbot',
    demoLink: null, // 'https://your-chatbot-demo.com',
    technologies: ['Python', 'NLTK', 'spaCy', 'Flask', 'Deep Learning', 'NLP']
  },
  {
    id: 'image-recognition-cv',
    title: 'Object Detection for Retail Analytics',
    description: 'Built a computer vision model to detect and classify products on shelves, providing insights for inventory management. Utilized transfer learning with a CNN for enhanced accuracy.',
    imageUrl: '/images/placeholder-cv.png', // Example: place in public/images/
    githubLink: 'https://github.com/yourusername/cv-object-detection',
    demoLink: 'https://your-cv-demo.com',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Computer Vision', 'CNN']
  },
  {
    id: 'uchumi-connect-marketpulse',
    title: 'Marketpulse: AI News Analysis for SMBs (Nation Hackathon 2.0)',
    description: 'Developed an AI-driven platform for Nation Hackathon 2.0 to scan news (Nation Media) and alert Kenyan SMBs to relevant economic opportunities (tenders, funding) via SMS (Africa\'s Talking) and a Streamlit web dashboard.',
    imageUrl: '/images/uchumi-connect-dashboard.png', // Replace with your actual image path
    // or imageUrl: uchumiConnectImage,
    githubLink: 'https://github.com/juicecola/marketpulse-kenya', // Verify this is the correct public link
    demoLink: 'YOUR_STREAMLIT_DEMO_URL_OR_VIDEO_LINK_HERE', // Replace this or set to null
    technologies: [
      'Python',
      'Flask (API)',
      'Streamlit (Dashboard)',
      'AI Agents',
      'Rule-Based NLP',
      'RSS Feed Parsing',
      'Africa\'s Talking (SMS)',
      'SQLite',
      'NLP'
      // 'React (Frontend Concept)', // Only if a React part was significantly built for the hackathon
    ]
  },
];
