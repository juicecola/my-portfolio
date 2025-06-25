// src/data/projects.js
export const aiProjects = [
  {
    id: 'neuroscribe-content-pipeline', // Or use 'content-creation-ai' if updating
    title: 'Neuroscribe: Multi-Agent AI Content Pipeline',
    description: 'Developed "Neuroscribe," a multi-agent AI system using Google ADK and Vertex AI (Gemini & Imagen) to automate the creation of a complete content package—article, image, and social posts—from a single topic.',
    imageUrl: '/my-portfolio/images/neuroscribe.png', // NEW IMAGE: e.g., a flow diagram
    githubLink: 'https://github.com/juicecola/Content_Creation_AI', // Confirm this repo is "Neuroscribe"
    demoLink: 'https://contentcreationai-efu5cu4kj9v3smd2pxgvlu.streamlit.app/', // Replace or set to null
    technologies: [
      'Python',
      'Google ADK',
      'Vertex AI',
      'Gemini Pro', 
      'Imagen',
      'Multi-Agent Systems',
      'AI Content Automation'
    ]
  },

  {
    id: 'aiqtoolkit-enhancements',
    title: 'NVIDIA AIQToolkit: LLM Integrations, API & React Chat UI', // Updated title
    description: 'Enhanced a fork of NVIDIA\'s AIQToolkit by integrating Anthropic Claude and NVIDIA NIMs, implementing conversational memory, developing a backend API, and building a dedicated React & TypeScript chatbot UI for seamless agent interaction.', // Updated description
    imageUrl: '/my-portfolio/images/aiqtoolkit-streamlit-ui.png', // NEW IMAGE - update filename as needed
    githubLink: 'https://github.com/juicecola/AIQToolkit',
    demoLink: 'https://drive.google.com/file/d/1VAaBNBJA6VTpnK65KB37eYHaJWP846t8/view?usp=sharing', // Or live React UI URL if backend is also live
    technologies: [
      'NVIDIA AIQToolkit',
      'Python (Backend)',
      'React (Frontend)',
      'TypeScript',
      'Vite',
      'LangChain',
      'Anthropic Claude',
      'NVIDIA NIMs',
      'API Development',
      'Conversational Memory',
      // 'Streamlit (Legacy UI)', // Optional: keep if still relevant or remove
    ]
  },
  {
    id: 'construct-agent',
    title: 'ConstructAgent: AI Site Operations Assistant (ConTech Hackathon)',
    description: 'Built an AI assistant for construction sites using Python (Flask), Dialogflow CX, and Africa\'s Talking to manage hazard logs, attendance, and deliveries via SMS/USSD, with a real-time React dashboard.',
    imageUrl: '/my-portfolio/images/construct-agent-dashboard.png', // Create this image and place in my-ai-portfolio/public/images/
    // or imageUrl: constructAgentImage,
    githubLink: 'https:///github.com/juicecola/construct_agent_agent', // Replace YOUR_USERNAME with juicecola or your actual username
    //demoLink: 'YOUR_CONSTRUCT_AGENT_DEMO_URL_OR_VIDEO_LINK_HERE', // Replace or set to null
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
    imageUrl: '/my-portfolio/images/uchumi-connect-dashboard.png', // Replace with your actual image path
    // or imageUrl: uchumiConnectImage,
    githubLink: 'https://github.com/juicecola/marketpulse-kenya', // Verify this is the correct public link
    //demoLink: 'YOUR_STREAMLIT_DEMO_URL_OR_VIDEO_LINK_HERE', // Replace this or set to null
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
