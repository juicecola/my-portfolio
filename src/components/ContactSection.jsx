// src/components/ContactSection.jsx
import React from 'react';
// Optional: Import icons if you want to use a library like react-icons
// For example, to match a tech theme, you might use icons from FontAwesome or Heroicons via react-icons
// import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa'; // Example for social icons
// import { HiOutlineMail } from 'react-icons/hi'; // Example for envelope icon

function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement form submission logic (e.g., using Formspree, Netlify Forms, or a backend)
    alert("Form submitted! (This is a placeholder - actual submission not implemented yet)");
    event.target.reset();
  };

  return (
    // Use a light gray or off-white background for the section, or keep it white
    <section id="contact" className="py-16 md:py-24 bg-slate-100 dark:bg-slate-800 px-6"> {/* Light gray for light mode, darker for dark mode */}
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Left Column: Text and Social Links */}
          <div className="text-slate-700 dark:text-slate-300">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center">
              Let's Connect!
              {/* Using a simple emoji or a themed icon from react-icons */}
              <span role="img" aria-label="envelope" className="ml-3 text-2xl">✉️</span>
              {/* Or <HiOutlineMail className="ml-3 text-3xl" /> */}
            </h2>
            <p className="mb-6 leading-relaxed">
              Interested in collaborating, have a question, or just want to chat about AI and tech?
              Feel free to reach out through my social channels or send me a message using the form.
            </p>
            <div className="flex space-x-6 mb-8 md:mb-0">
              <a
                href="https://linkedin.com/in/yourusername" // Replace
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors text-3xl"
              >
                {/* <FaLinkedinIn /> */}
                LI {/* Placeholder */}
              </a>
              <a
                href="https://twitter.com/yourusername" // Replace
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors text-3xl"
              >
                {/* <FaTwitter /> */}
                TW {/* Placeholder */}
              </a>
              <a
                href="https://github.com/juicecola" // Replace
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors text-3xl"
              >
                {/* <FaGithub /> */}
                GH {/* Placeholder */}
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 shadow-sm placeholder-slate-400 dark:placeholder-slate-500 text-slate-800 dark:text-slate-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 shadow-sm placeholder-slate-400 dark:placeholder-slate-500 text-slate-800 dark:text-slate-200"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                name="message"
                id="message"
                rows="6"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 shadow-sm placeholder-slate-400 dark:placeholder-slate-500 text-slate-800 dark:text-slate-200"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;