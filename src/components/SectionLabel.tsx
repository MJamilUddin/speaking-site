interface SectionLabelProps {
  number?: string;
  text: string;
  className?: string;
}

export default function SectionLabel({ number, text, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`font-mono text-xs uppercase tracking-[0.15em] text-muted ${className}`}
    >
      {number && <>{number} / </>}
      {text}
    </span>
  );
}
