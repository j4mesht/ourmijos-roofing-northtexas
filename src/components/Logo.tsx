import { cn } from "@/lib/utils";
import logoImage from "@/assets/ourmijos-logo.png";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "icon" | "text";
  showText?: boolean;
}

const Logo = ({ 
  className, 
  size = "md", 
  variant = "full", 
  showText = true 
}: LogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-auto",
    md: "h-12 w-auto", 
    lg: "h-16 w-auto",
    xl: "h-24 w-auto"
  };

  // Use the actual logo image
  return (
    <img 
      src={logoImage} 
      alt="Ourmijos Home Service" 
      className={cn(sizeClasses[size], className)}
    />
  );
};

export default Logo;