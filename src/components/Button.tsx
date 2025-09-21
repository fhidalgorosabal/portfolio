import type { ButtonType } from "../types";
import { useTranslation } from "../hooks/useTranslation";
import {
  BUTTON_BASE_STYLES,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from "../utils/StylesButton";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  className = "",
  withCounter = false,
  ...props
}: ButtonType) => {
  const { translate } = useTranslation();
  const getVariantClass = () => {
    return BUTTON_VARIANTS[variant];
  };

  return (
    <button
      className={`${BUTTON_BASE_STYLES} ${getVariantClass()} ${
        BUTTON_SIZES[size]
      } ${withCounter ? "relative" : ""} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? translate("loading-label") : children}
    </button>
  );
};

export default Button;
