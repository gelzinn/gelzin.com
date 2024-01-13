import { CSSProperties } from "react";
import * as LucideIcons from "lucide-react";

type IconName = keyof typeof LucideIcons;

interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
  style?: CSSProperties;
}

export const Icon = ({
  name,
  size = 16,
  strokeWidth,
  className,
  style,
}: IconProps) => {
  if (!name) return null;

  const exists = Object.keys(LucideIcons).some((key) => {
    if (key.toLowerCase() === name.toLowerCase()) return true;
    else return false;
  });

  if (!exists) return null;

  const IconComponent = LucideIcons[name] as React.FC<
    React.SVGProps<SVGSVGElement>
  >;

  if (!IconComponent) return null;

  return (
    <IconComponent
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      className={className}
      style={style}
    />
  );
};
