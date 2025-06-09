// src/components/ContactSection.jsx
import React, { useState, useRef } from 'react'; // Added useRef
import emailjs from '@emailjs/browser';
// ... (your icons or other imports)

function ContactSection() {
  const form = useRef(); // Create a ref for the form
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', or ''

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // --- Access environment variables ---
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    if (!serviceID || !templateID || !userID) {
        console.error("EmailJS environment variables are not set!");
        setSubmitStatus('error');
        setIsSubmitting(false);
        alert("Configuration error. Message could not be sent.");
        return;
    }

    // The `sendForm` function takes the Service ID, Template ID, the form element (or its selector), and your User ID.
    // Ensure your form input fields have `name` attributes that match the variables in your EmailJS template
    // e.g., name="from_name", name="from_email", name="message"
    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
          console.log('EmailJS Success:', result.text);
          setSubmitStatus('success');
          setIsSubmitting(false);
          alert('Message sent successfully! Thank you.');
          form.current.reset(); // Reset the form fields
      }, (error) => {
          console.error('EmailJS Error:', error.text);
          setSubmitStatus('error');
setIsSubmitting(false);
          alert(`Failed to send message. Error: ${error.text || 'Unknown error'}`);
      });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-100 dark:bg-slate-800 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Column: Text and Social Links (as before) */}
          <div className="text-slate-700 dark:text-slate-300">
            {/* ... your "Let's Connect" text and social links ... */}
             <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center">
              Let's Connect!
              <span role="img" aria-label="envelope" className="ml-3 text-2xl">✉️</span>
            </h2>
            <p className="mb-6 leading-relaxed">
              Interested in collaborating, have a question, or just want to chat about AI and tech?
              Feel free to reach out through my social channels or send me a message using the form.
            </p>
            {/* ... your social media links ... */}
          </div>

          {/* Right Column: Contact Form */}
          {/* Add ref={form} to your form element */}
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              {/* Ensure 'name' attributes match your EmailJS template variables */}
              <input
                type="text"
                name="from_name" // Match EmailJS template variable, e.g., {{{from_name}}}
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
                name="from_email" // Match EmailJS template variable, e.g., {{{from_email}}}
                id="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 shadow-sm placeholder-slate-400 dark:placeholder-slate-500 text-slate-800 dark:text-slate-200"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                name="message" // Match EmailJS template variable, e.g., {{{message}}}
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
                disabled={isSubmitting} // Disable button while submitting
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 disabled:opacity-50"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </div>
            {submitStatus === 'success' && <p className="text-green-600 dark:text-green-400 mt-2">Message sent successfully!</p>}
            {submitStatus === 'error' && <p className="text-red-600 dark:text-red-400 mt-2">Failed to send message. Please try again or contact me directly.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;