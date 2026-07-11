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
    <section id="contact" className="py-16 md:py-24 bg-ink-900 border-t border-ink-700 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Column: Text and Social Links (as before) */}
          <div className="text-slate-400">
            {/* ... your "Let's Connect" text and social links ... */}
             <p className="font-mono text-brand-secondary text-sm mb-2 tracking-wide">$ ./connect.sh</p>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 flex items-center">
              Let's Connect!
              <span role="img" aria-label="envelope" className="ml-3 text-2xl">✉️</span>
            </h2>
            <p className="mb-6 leading-relaxed">
              Interested in collaborating, have a question, or just want to chat about data engineering and AI?
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
                className="w-full px-4 py-3 bg-ink-800 border border-ink-600 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary shadow-sm placeholder-slate-500 text-slate-200"
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
                className="w-full px-4 py-3 bg-ink-800 border border-ink-600 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary shadow-sm placeholder-slate-500 text-slate-200"
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
                className="w-full px-4 py-3 bg-ink-800 border border-ink-600 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary shadow-sm placeholder-slate-500 text-slate-200"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting} // Disable button while submitting
                className="w-full bg-brand-secondary hover:bg-brand-secondary-dark text-ink-950 font-mono font-semibold py-3 px-6 rounded-md transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2 focus:ring-offset-ink-900 disabled:opacity-50"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </div>
            {submitStatus === 'success' && <p className="text-emerald-400 mt-2 font-mono text-sm">Message sent successfully!</p>}
            {submitStatus === 'error' && <p className="text-rose-400 mt-2 font-mono text-sm">Failed to send message. Please try again or contact me directly.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;