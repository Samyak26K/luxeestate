interface LuxeSectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const LuxeSectionHeader = ({
  subtitle,
  title,
  description,
  align = "center",
}: LuxeSectionHeaderProps) => {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      } mb-12 md:mb-16`}
    >
      {subtitle && (
        <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default LuxeSectionHeader;
