import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface PlaceholderImageProps {
  label: string;
  className?: string;
  aspectRatio?: "video" | "square" | "portrait" | "wide" | "hero";
  overlay?: boolean;
  children?: React.ReactNode;
}

/**
 * Drop-in placeholder for images the client will provide later.
 * Replace the whole component with an <img> tag when ready.
 *
 * Usage:
 *   <PlaceholderImage label="hero-main" aspectRatio="hero" />
 *
 * When client supplies the image, swap to:
 *   <img src="/images/hero-main.jpg" alt="..." className="..." />
 */
const PlaceholderImage = ({
  label,
  className,
  aspectRatio = "video",
  overlay = false,
  children,
}: PlaceholderImageProps) => {
  const ratioClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    wide: "aspect-[21/9]",
    hero: "aspect-[16/7]",
  };

  return (
    <div
      className={cn(
        "relative bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rounded-xl overflow-hidden",
        ratioClasses[aspectRatio],
        className
      )}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Center icon + label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground/40">
        <ImageIcon className="h-8 w-8" />
        <span className="text-xs font-mono uppercase tracking-wider">{label}</span>
      </div>

      {/* Optional dark overlay for text readability */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      )}

      {/* Children render on top */}
      {children && <div className="relative z-10 h-full">{children}</div>}
    </div>
  );
};

export default PlaceholderImage;
