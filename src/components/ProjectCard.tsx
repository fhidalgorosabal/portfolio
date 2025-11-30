import { useTranslation } from "../hooks/useTranslation";
import type { ProjectCardType } from "../types/Project";
import Button from "./Button";

const ProjectCard = ({
  name,
  description,
  imageUrl,
  codeUrl,
  demoUrl,
}: ProjectCardType) => {
  const { translate } = useTranslation();

  return (
    <div className="group relative w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Image Container */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-sm text-gray-600 dark:text-gray-300 flex-1 mb-4">
          <span className="font-bold">{name}: </span>
          {description}
        </p>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          {codeUrl && (
            <Button
              onClick={() => window.open(codeUrl, "_blank")}
              variant="primary"
              size="sm"
              className="flex-1"
            >
              {translate("Ver Código")}
            </Button>
          )}
          {demoUrl && (
            <Button
              onClick={() => window.open(demoUrl, "_blank")}
              variant="success"
              size="sm"
              className="flex-1"
            >
              {translate("Ver Demo")}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
