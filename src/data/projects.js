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
    id: 'construct-agent',
    title: 'ConstructAgent: AI Site Operations Assistant (ConTech Hackathon)',
    description: 'Built an AI assistant for construction sites using Python (Flask), Dialogflow CX, and Africa\'s Talking to manage hazard logs, attendance, and deliveries via SMS/USSD, with a real-time React dashboard.',
    imageUrl: '/images/construct-agent-dashboard.png', // Create this image and place in my-ai-portfolio/public/images/
    // or imageUrl: constructAgentImage,
    githubLink: 'https:///github.com/juicecola/construct_agent_agent', // Replace YOUR_USERNAME with juicecola or your actual username
    demoLink: 'YOUR_CONSTRUCT_AGENT_DEMO_URL_OR_VIDEO_LINK_HERE', // Replace or set to null
    technologies: [
      'Python',
      'Flask',
      'React',
      'TypeScript',
      'Dialogflow CX (NLP)',
      'Africa\'s Talking (SMS/USSD)',
      'API Development',
      , // Add if applicable
    ]
  },,
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
