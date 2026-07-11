// src/components/HeroSection.jsx
function HeroSection() {
  const pipelineStages = [
    { label: 'EXTRACT', detail: 'Scrape / ingest raw sources' },
    { label: 'TRANSFORM', detail: 'Clean, model, validate' },
    { label: 'LOAD', detail: 'Warehouse / serve via API' },
  ];

  return (
    <section className="container mx-auto py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="font-mono text-brand-secondary text-sm mb-3 tracking-wide">
          $ whoami
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-100 mb-4 leading-tight">
          Hi, I'm Eric Munyi.
        </h1>
        <p className="text-xl sm:text-2xl text-slate-400 max-w-2xl mx-auto">
          I'm a{' '}
          <span className="text-brand-secondary font-semibold">Data Engineer</span>{' '}
          passionate about building reliable pipelines and data infrastructure that power intelligent systems.
        </p>
      </div>

      {/* Terminal-style summary card */}
      <div className="max-w-2xl mx-auto rounded-lg border border-ink-700 bg-ink-900 shadow-2xl overflow-hidden mb-14">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-ink-700 bg-ink-800">
          <span className="term-dot bg-red-500/70" />
          <span className="term-dot bg-amber-400/70" />
          <span className="term-dot bg-emerald-400/70" />
          <span className="ml-3 font-mono text-xs text-slate-500">eric@data-eng: ~</span>
        </div>
        <div className="px-5 py-5 font-mono text-sm space-y-2">
          <p className="text-slate-500">
            <span className="text-brand-secondary">eric@data-eng</span>:~$ cat focus.txt
          </p>
          <p className="text-slate-300">
            Designing ETL/ELT pipelines, orchestrating workflows, and modeling data
            that's reliable enough to build real products on.
          </p>
          <p className="text-slate-500 pt-2">
            <span className="text-brand-secondary">eric@data-eng</span>:~${' '}
            <span className="animate-pulse text-slate-300">_</span>
          </p>
        </div>
      </div>

      {/* Simple ETL pipeline visual */}
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {pipelineStages.map((stage, i) => (
          <div key={stage.label} className="flex items-center gap-3 sm:flex-1">
            <div className="flex-1 rounded-md border border-ink-700 bg-ink-900/60 px-4 py-3 text-center">
              <p className="font-mono text-xs text-brand-secondary tracking-wider mb-1">{stage.label}</p>
              <p className="text-xs text-slate-500">{stage.detail}</p>
            </div>
            {i < pipelineStages.length - 1 && (
              <span className="hidden sm:block text-brand-secondary/60 text-lg">→</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
export default HeroSection;
