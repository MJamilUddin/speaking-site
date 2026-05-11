import Image from "next/image";

/** Full wordmark — JamTech Logo upscalled 4x.png (public/Jamtech logos/) */
export const JAMTECH_LOGO_SRC =
  "/Jamtech%20logos/JamTech%20Logo%20upscalled%204x.png";

type JamTechLogoProps = {
  variant: "footer" | "hero";
  className?: string;
};

export function JamTechLogo({ variant, className = "" }: JamTechLogoProps) {
  const box =
    variant === "footer"
      ? "h-11 w-[150px] sm:h-12 sm:w-[170px]"
      : "h-[6.8rem] w-[min(calc(100vw-3rem),462px)] sm:h-[4.5rem] sm:w-[252px] lg:h-[5.25rem] lg:w-[300px]";

  const sizes =
    variant === "footer"
      ? "(max-width: 640px) 150px, 170px"
      : "(max-width: 640px) 81vw, (max-width: 1024px) 252px, 300px";

  const imgClass =
    variant === "footer"
      ? "object-contain object-left"
      : "object-contain object-left object-top scale-100 [transform-origin:left_top] sm:scale-[1.2]";

  return (
    <span
      className={`relative inline-block shrink-0 overflow-visible ${box} ${className}`}
    >
      <Image
        src={JAMTECH_LOGO_SRC}
        alt=""
        fill
        className={imgClass}
        sizes={sizes}
        priority={variant === "hero"}
      />
    </span>
  );
}
