import { useState } from "react";
import ArtCard from "./ArtCard";
import ArtModal from "./ArtModal";

const artworks = [
  {
    id: 1,
    title: "Título da Arte 1",
    category: "Pintura",
    description: "Descrição da obra de arte. Uma breve explicação sobre a inspiração, técnica utilizada e significado por trás da criação.",
    year: "2024",
    image: "/placeholder1.png",
  },
  {
    id: 2,  
    title: "Título da Arte 2",
    category: "Ilustração",
    description: "Descrição da obra de arte. Uma breve explicação sobre a inspiração, técnica utilizada e significado por trás da criação.",
    year: "2024",
    image: "/placeholder2.png",
  },
  {
    id: 3,
    title: "Título da Arte 3",
    category: "Digital",
    description: "Descrição da obra de arte. Uma breve explicação sobre a inspiração, técnica utilizada e significado por trás da criação.",
    year: "2023",
    image: "/placeholder3.png",
  },
  {
    id: 4,
    title: "Título da Arte 4",
    category: "Aquarela",
    description: "Descrição da obra de arte. Uma breve explicação sobre a inspiração, técnica utilizada e significado por trás da criação.",
    year: "2023",
    image: "/placeholder4.png",
  },
  {
    id: 5,
    title: "Título da Arte 5",
    category: "Escultura",
    description: "Descrição da obra de arte. Uma breve explicação sobre a inspiração, técnica utilizada e significado por trás da criação.",
    year: "2024",
    image: "/placeholder5.png",     
  },
  {
    id: 6,
    title: "Título da Arte 6",
    category: "Mixed Media",
    description: "Descrição da obra de arte. Uma breve explicação sobre a inspiração, técnica utilizada e significado por trás da criação.",
    year: "2024",
    image: "/placeholder6.png", 
  },
];

const Gallery = () => {
  const [selectedArt, setSelectedArt] = useState<typeof artworks[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (artwork: typeof artworks[0]) => {
    setSelectedArt(artwork);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedArt(null), 300);
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="text-xs font-body text-muted-foreground tracking-widest uppercase mb-4 block">
            Portfólio
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
            Galeria de <span className="italic font-normal">Obras</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Uma coleção de trabalhos selecionados que atravessam diferentes momentos e linguagens visuais.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ArtCard
                id={artwork.id}
                title={artwork.title}
                category={artwork.category}
                year={artwork.year}
                imageSrc={artwork.image}
                onClick={() => openModal(artwork)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ArtModal
        artwork={selectedArt}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Gallery;
