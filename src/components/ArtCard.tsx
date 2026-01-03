interface ArtCardProps {
  id: number;
  title: string;
  category: string;
  imageSrc?: string;
  year?: string;
  onClick: () => void;
}

const ArtCard = ({ title, category, imageSrc, year, onClick }: ArtCardProps) => {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer relative aspect-[4/5] rounded-lg overflow-hidden hover-lift"
    >
      <img
        src={imageSrc || "/placeholder.svg"}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-xs font-body text-primary-foreground/70 tracking-widest uppercase mb-2 block">
          {category}
        </span>
        <h3 className="text-xl font-display text-primary-foreground font-medium">
          {title}
        </h3>
        {year && (
          <span className="mt-1 text-xs font-body text-primary-foreground/70 block">
            {year}
          </span>
        )}
      </div>

      {/* Corner accent */}
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-primary-foreground/50 transition-colors duration-500" />
    </article>
  );
};

export default ArtCard;
