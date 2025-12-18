interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export const SectionTitle = ({ title, subtitle, align = "center" }: SectionTitleProps) => (
  <div className={`mb-12 flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
    <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tighter text-stone-100 mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground text-lg max-w-2xl font-serif italic">
        {subtitle}
      </p>
    )}
    <div className="h-1 w-24 bg-red-800 mt-4 rounded-full"></div>
  </div>
);
