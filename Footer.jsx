// src/components/Footer.jsx
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 text-center text-slate-500 border-t border-ink-700 bg-ink-900">
      <p className="font-mono text-xs">© {currentYear} Eric Munyi. All rights reserved.</p>
      <div className="mt-3 space-x-4 font-mono text-sm">
        <a href="https://github.com/juicecola" target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors">
          LinkedIn
        </a>
        {/* Add other links like Twitter or a professional blog if you have one */}
      </div>
    </footer>
  );
}
export default Footer;
