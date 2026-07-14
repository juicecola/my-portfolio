// src/data/projects.js
export const aiProjects = [
  {
    id: 'nse-kenya-market-dashboard',
    title: 'NSE Kenya Market Dashboard: Full-Stack Data Pipeline & Analytics',
    description: 'Built an end-to-end data engineering pipeline for the Nairobi Securities Exchange — scraping daily market data, orchestrating ETL with Apache Airflow, loading into PostgreSQL, and serving it through a FastAPI backend to a React dashboard with a Power BI export.',
    imageUrl: '/my-portfolio/images/nse-dashboard.png',
    githubLink: 'https://github.com/juicecola/nse-dashboard',
    demoLink: 'https://nsedashboard-beta.vercel.app',
    technologies: [
      'Python',
      'Apache Airflow',
      'ETL Pipelines',
      'PostgreSQL',
      'SQLAlchemy',
      'FastAPI',
      'React',
      'TypeScript',
      'Docker',
      'Power BI',
      'Web Scraping',
      'Data Engineering'
    ]
  },
  {
    id: 'artisanal-crafts-marketplace',
    title: 'Artisanal Crafts Marketplace',
    description: 'A full-stack e-commerce platform for artisanal crafts, built with Flask. Handles product listings, cart and checkout flow, and order management backed by a relational database.',
    imageUrl: '/my-portfolio/images/marketplace.png',
    githubLink: 'https://github.com/juicecola/Artisanal-Crafts-MarketPlace',
    demoLink: 'https://artisanal-crafts-marketplace.onrender.com',
    technologies: [
      'Python',
      'Flask',
      'SQLAlchemy',
      'PostgreSQL',
      'HTML/CSS',
      'JavaScript',
      'E-commerce'
    ]
  },,

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
    id: 'chumz-ai-whatsapp-bot',
    title: 'Chumz AI — WhatsApp Savings Assistant',
    description: 'A Gemini-powered WhatsApp chatbot for a Kenyan micro-savings platform. Handles webhook verification, per-user conversation sessions, daily rate limiting, and automatic retries against the Gemini API, with a WhatsApp Business API integration for sending replies.',
    imageUrl: '/my-portfolio/images/whatsapp.png',
    githubLink: 'https://github.com/juicecola/chumz-demo-bot',
    demoLink: 'https://drive.google.com/file/d/13hz7p0AKLkfOQCfilmhbXerXXZDIWz2U/view?usp=drive_link',
    technologies: [
      'Python',
      'FastAPI',
      'Google Gemini API',
      'WhatsApp Business API',
      'Webhooks',
      'Async/Background Tasks'
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
