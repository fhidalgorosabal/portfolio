const Habilidades = () => {
  const skills = [
    { name: "JavaScript", level: 90, category: "languages" },
    { name: "TypeScript", level: 85, category: "languages" },
    { name: "React", level: 90, category: "frontend" },
    { name: "Vue.js", level: 80, category: "frontend" },
    { name: "Node.js", level: 85, category: "backend" },
    { name: "Express", level: 80, category: "backend" },
    { name: "MongoDB", level: 75, category: "tools" },
    { name: "PostgreSQL", level: 70, category: "tools" },
    { name: "Git", level: 85, category: "tools" },
    { name: "Docker", level: 70, category: "tools" },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "languages":
        return "bg-blue-500";
      case "frontend":
        return "bg-green-500";
      case "backend":
        return "bg-purple-500";
      case "tools":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "languages":
        return "Lenguajes";
      case "frontend":
        return "Frontend";
      case "backend":
        return "Backend";
      case "tools":
        return "Herramientas";
      default:
        return "Otros";
    }
  };

  return (
    <section id="habilidades" className="py-25 bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Habilidades
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones
            innovadoras
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["languages", "frontend", "backend", "tools"].map((category) => (
              <div
                key={category}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
                  {getCategoryLabel(category)}
                </h3>
                <div className="space-y-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400 text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${getCategoryColor(
                              category
                            )} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
