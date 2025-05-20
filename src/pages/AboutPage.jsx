// src/pages/AboutPage.jsx
import React from 'react';

function AboutPage() {
  const skills = [
    'Python', 'JavaScript', 'React', 'Node.js', 'Tailwind CSS',
    'Restful API', 'GCP', 'CI/CD Pipelines', 'Pandas', 'NumPy',
    'Natural Language Processing (NLP)', 'Computer Vision (CV)',
    'Machine Learning', 'Deep Learning', 'Git & GitHub', 'Docker',
    'MySQL', 'Redis', 'SSH', 'LLM', 'Linux', 'NoSQL'
  ];

  return (
    <div className="container mx-auto py-16 md:py-24 px-6 min-h-[calc(100vh-250px)]"> {/* Adjust min-h for footer height */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
          About Me
        </h2>

        {/* Optional: Profile Image */}
        {/* <div className="flex justify-center mb-10">
          <img
            src="/images/your-profile-photo.jpg" // Place in public/images
            alt="Your Name"
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />
        </div> */}

        <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 text-gray-700 leading-relaxed">
          <p>
            Hello! I'm Eric Munyi, a software developer with a profound interest in Artificial Intelligence and its potential to transform industries. My journey into tech was driven by a curiosity for how complex problems can be solved elegantly with code.
          </p>
          <p>
            I specialize in developing AI-driven applications, with a focus on Natural Language Processing and Computer Vision. I enjoy the entire lifecycle of an AI project, from conceptualization and data analysis to model development, deployment, and iteration.
          </p>
          <p>
            My technical toolkit includes Python for AI/ML development, frameworks like TensorFlow and PyTorch, and various libraries for data manipulation and visualization. On the front-end, I'm comfortable with React and modern JavaScript, and I appreciate creating intuitive user interfaces. I'm always eager to learn new technologies and methodologies to enhance my work.
          </p>
          <p>
            I believe in a collaborative and results-oriented approach. I'm passionate about leveraging AI to create meaningful impact and am always looking for challenging projects where I can contribute and grow.
          </p>
          <p>
            When I'm not coding, I enjoy cycling and watching soccer.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Core Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map(skill => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
