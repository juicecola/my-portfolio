// src/components/HeroSection.jsx
function HeroSection() {
  return (
    <section className="container mx-auto py-16 md:py-24 text-center px-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
        Hi, I'm Eric Munyi.
      </h1>
      <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
        I'm a Software Developer specializing in Artificial Intelligence, passionate about building intelligent systems that solve real-world problems.
      </p>
      {/* Optional: Scroll down indicator or a subtle animation could go here */}
      {/* <a
        href="#projects"
        className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        View My AI Projects
      </a> */}
    </section>
  );
}
export default HeroSection;
