import ExperienceCard from "../components/ExperienceCard";
import { useTranslation } from "../hooks/useTranslation";

const Experiencia = () => {
  const { translate } = useTranslation();

  return (
    <section id="experiencia" className="py-25 bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {translate('experience-title')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <ExperienceCard
              name="experience-name-1"
              data="experience-data-1"
              company="experience-company-1"
              description="experience-description-1"
              skills={["Angular", "TypeScript", "Tailwind", "Angular Material", "Amazon Web Services", "Figma", "Jira", "Bitbucket"]}
              color="orange"
            />            
            <ExperienceCard
              name="experience-name-2"
              data="experience-data-2"
              company="experience-company-2"
              description="experience-description-2"
              skills={["Angular", "React", "Laravel", "NestJS", "GitHub"]}
              color="sky"
            />
            <ExperienceCard
              name="experience-name-3"
              data="experience-data-3"
              company="experience-company-3"
              description="experience-description-3"
              skills={["Angular", "TypeScript", "Tailwind", "Ionic Framework", "Apache Cordova", "Figma", "Jira", "GitLab"]}
              color="yellow"
            />
            <ExperienceCard
              name="experience-name-4"
              data="experience-data-4"
              company="experience-company-4"
              description="experience-description-4"
              skills={["Laravel", "Angular", "Bootstrap", "jQuery", "PostgreSQL ", "GitHub"]}
              color="cyan"
            />
            <ExperienceCard
              name="experience-name-5"
              data="experience-data-5"
              company="experience-company-5"
              description="experience-description-5"
              skills={["PHP ", "HTML", "Java Script", "GitHub"]}
              color="indigo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
