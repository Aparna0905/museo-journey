import { useState } from 'react';
import { Card } from '@/components/ui/card';
import type { Artwork } from '@/data/artworks';

interface ArtworkCardProps {
  artwork: Artwork;
  onClick: () => void;
  delay?: number;
}

const ArtworkCard = ({ artwork, onClick, delay = 0 }: ArtworkCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer bg-gallery-surface border-gallery-border overflow-hidden transition-all duration-500 hover:shadow-artwork hover:scale-105 hover:border-gallery-gold"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Artwork Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gallery-dark">
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          loading="lazy"
        />
        
        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-gallery-dark via-gallery-dark/50 to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500">
            <p className="text-gallery-text-muted text-sm mb-2">
              {artwork.year} • {artwork.medium}
            </p>
            <p className="text-gallery-text text-sm line-clamp-3">
              {artwork.description}
            </p>
          </div>
        </div>

        {/* View Details Hint */}
        <div
          className={`absolute top-4 right-4 bg-gallery-gold text-gallery-dark px-3 py-1 text-xs font-medium rounded transition-all duration-500 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}
        >
          View Details
        </div>
      </div>

      {/* Artwork Info */}
      <div className="p-6 border-t border-gallery-border">
        <h3 className="font-serif text-xl text-gallery-gold mb-2 group-hover:text-gallery-text transition-colors">
          {artwork.title}
        </h3>
        <p className="text-gallery-text-muted text-sm">
          {artwork.artist}
        </p>
      </div>
    </Card>
  );
};

export default ArtworkCard;
