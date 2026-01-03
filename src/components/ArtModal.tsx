import { X } from "lucide-react";
import { useEffect } from "react";

interface Artwork {
  id: number;
  title: string;
  category: string;
  description: string;
  year: string;
  image?: string;
  technique?: string;
  dimensions?: string;
}

interface ArtModalProps {
  artwork: Artwork | null;
  isOpen: boolean;
  onClose: () => void;
}

const ArtModal = ({ artwork, isOpen, onClose }: ArtModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !artwork) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm animate-fade-in" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-auto bg-card rounded-lg shadow-hover animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="aspect-square md:aspect-auto bg-muted flex items-center justify-center">
            <img
              src={artwork.image || "/placeholder.svg"}
              alt={artwork.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="text-xs font-body text-muted-foreground tracking-widest uppercase mb-4">
              {artwork.category} • {artwork.year}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
              {artwork.title}
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              {artwork.description}
            </p>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground font-body">
                <span className="font-medium text-foreground">Técnica:</span> {artwork.technique ?? "A ser definida"}
              </p>
              <p className="text-sm text-muted-foreground font-body mt-2">
                <span className="font-medium text-foreground">Dimensões:</span> {artwork.dimensions ?? "A ser definida"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtModal;
