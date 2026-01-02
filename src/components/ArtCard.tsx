interface ArtCardProps {
  id: number;
  title: string;
  category: string;
  onClick: () => void;
}

const ArtCard = ({ title, category, onClick }: ArtCardProps) => {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer relative aspect-[4/5] bg-muted rounded-lg overflow-hidden hover-lift"
    >
      {/* Placeholder for artwork */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/80 flex items-center justify-center">
        <div className="text-center p-6">
          <div className="w-16 h-16 mx-auto mb-4 border-2 border-dashed border-muted-foreground/30 rounded-full flex items-center justify-center">
            <span className="text-muted-foreground/50 text-2xl">+</span>
          </div>
          <span className="text-muted-foreground/60 text-xs font-body">
            Adicionar arte
          </span>
        </div>
      </div>

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
      </div>

      {/* Corner accent */}
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-primary-foreground/50 transition-colors duration-500" />
    </article>
  );
};

export default ArtCard;
