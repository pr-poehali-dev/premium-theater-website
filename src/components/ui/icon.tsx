import { LucideIcon, icons } from "lucide-react";

interface IconProps {
  name: keyof typeof icons;
  fallback?: keyof typeof icons;
  size?: number;
  className?: string;
}

const Icon = ({
  name,
  fallback = "CircleAlert",
  size = 24,
  className,
}: IconProps) => {
  const LucideIcon =
    (icons[name] as LucideIcon) || (icons[fallback] as LucideIcon);

  return <LucideIcon size={size} className={className} />;
};

export default Icon;
