const iconMap = {
  'Gestión de Alumnos':      '📋',
  'Sesiones y Planificación': '📅',
  'IA Hub — Reportes Inteligentes': '🤖',
  'Reportes PDF Profesionales': '📄',
  'Portal de Tutores':        '👨‍👩‍👧',
  'Seguridad AES-256':        '🔐',
};

function ProjectCard({ project }) {
  const icon = iconMap[project.name] || '✨';

  return (
    <div className="group relative rounded-2xl border border-slate-100 bg-white p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center text-2xl group-hover:bg-brand-blue/10 transition-colors">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <h3 className="text-lg font-bold text-slate-800">{project.name}</h3>
            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-brand-green/10 text-brand-green">
              {project.role}
            </span>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tools.map((tool, i) => (
              <span key={i} className="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-600">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;