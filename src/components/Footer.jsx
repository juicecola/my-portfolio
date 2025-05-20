// src/components/Footer.jsx
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 text-center text-gray-500 border-t border-gray-200 mt-16">
      <p>© {currentYear} Eric Munyi. All rights reserved.</p>
      <div className="mt-3 space-x-4">
        <a href="https://github.com/juicecola" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
          LinkedIn
        </a>
        {/* Add other links like Twitter or a professional blog if you have one */}
      </div>
    </footer>
  );
}
export default Footer;
