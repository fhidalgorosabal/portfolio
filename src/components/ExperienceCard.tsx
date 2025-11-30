import { useTranslation } from "../hooks/useTranslation";
import type { ExperienceCardType } from "../types/Experience";
import { COLOR_MAP } from "../utils/constants";


const ExperienceCard = ({
  name,
  data,
  company,
  description,
  skills,
  color = "sky",
}: ExperienceCardType & { color?: keyof typeof COLOR_MAP }) => {
  const { translate } = useTranslation();

  const colors = COLOR_MAP[color] ?? COLOR_MAP.sky;

  return (
    <div
      className={`bg-gray-100 dark:bg-gray-800 px-5 py-3 rounded-lg border-l-4 ${colors.border} shadow-lg`}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {translate(name)}
        </h3>
        <span className={`${colors.text} font-medium`}>
          {translate(data)}
        </span>
      </div>
      <h4 className="text-md dark:text-gray-600 text-gray-300 mb-1">
        {translate(company)}
      </h4>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {translate(description)}
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`${colors.badgeBg} ${colors.badgeText} px-3 py-1 rounded-full text-sm`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
