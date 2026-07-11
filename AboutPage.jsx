// src/pages/AboutPage.jsx
import React from 'react';

function AboutPage() {
  const skillGroups = [
    {
      label: 'Data Engineering & Pipelines',
      skills: ['Apache Airflow', 'ETL/ELT Pipelines', 'Pandas', 'NumPy', 'SQLAlchemy', 'Web Scraping', 'Data Warehousing'],
    },
    {
      label: 'Languages & Databases',
      skills: ['Python', 'SQL', 'PostgreSQL', 'MySQL', 'NoSQL', 'Redis', 'JavaScript'],
    },
    {
      label: 'Infrastructure & DevOps',
      skills: ['Docker', 'CI/CD Pipelines', 'GCP', 'Linux', 'SSH', 'Git & GitHub'],
    },
    {
      label: 'APIs & Web',
      skills: ['FastAPI', 'Flask', 'Django', 'RESTful API', 'React', 'Node.js', 'Tailwind CSS'],
    },
    {
      label: 'AI / ML',
      skills: ['Machine Learning', 'Deep Learning', 'Natural Language Processing (NLP)', 'Computer Vision (CV)', 'LLM'],
    },
  ];

  return (
    <div className="container mx-auto py-16 md:py-24 px-6 min-h-[calc(100vh-250px)]">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-brand-secondary text-sm text-center mb-2 tracking-wide">$ cat about_me.md</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-10 text-center">
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

        <div className="rounded-lg border border-ink-700 bg-ink-900 shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-ink-700 bg-ink-800">
            <span className="term-dot bg-red-500/70" />
            <span className="term-dot bg-amber-400/70" />
            <span className="term-dot bg-emerald-400/70" />
            <span className="ml-3 font-mono text-xs text-slate-500">about_me.md</span>
          </div>
          <div className="p-8 space-y-6 text-slate-300 leading-relaxed">
            <p>
              Hello! I'm Eric Munyi, a data engineer with a profound interest in building the pipelines and infrastructure that turn raw, messy data into something reliable enough to power real products. My journey into tech was driven by a curiosity for how complex problems can be solved elegantly with code — and that curiosity now centers on how data moves, transforms, and scales.
            </p>
            <p>
              I specialize in designing and building ETL/ELT pipelines, orchestrating workflows with tools like Apache Airflow, and modeling data in relational databases such as PostgreSQL. I enjoy the entire lifecycle of a data project, from scraping and ingesting raw sources, to cleaning and transforming them, to serving analytics-ready data through APIs and dashboards.
            </p>
            <p>
              My technical toolkit includes Python for data processing (Pandas, SQLAlchemy), SQL for modeling and querying, Docker for containerized deployments, and CI/CD pipelines for reliable delivery. I also bring AI/ML experience — Natural Language Processing, Computer Vision, and LLM-based systems — to projects where intelligent processing sits on top of solid data foundations. On the front-end, I'm comfortable with React and modern JavaScript when a project calls for a dashboard or user-facing view of that data.
            </p>
            <p>
              I believe in a collaborative and results-oriented approach. I'm passionate about building dependable data systems that create meaningful impact and am always looking for challenging projects where I can contribute and grow.
            </p>
            <p>
              When I'm not coding, I enjoy cycling and watching soccer.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <p className="font-mono text-brand-secondary text-sm text-center mb-2 tracking-wide">$ cat skills.json</p>
          <h3 className="text-2xl font-semibold text-slate-100 mb-8 text-center">Core Skills</h3>
          <div className="space-y-6">
            {skillGroups.map(group => (
              <div key={group.label}>
                <h4 className="font-mono text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  {group.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className="font-mono bg-ink-800 border border-ink-600 text-slate-300 px-3 py-1.5 rounded text-xs hover:border-brand-secondary/50 hover:text-brand-secondary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
