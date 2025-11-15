import { useState, useEffect } from 'react';
import { artworks, collections } from '@/data/artworks';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ArtworkCard from '@/components/ArtworkCard';
import ArtworkModal from '@/components/ArtworkModal';
import Navigation from '@/components/Navigation';
import type { Artwork } from '@/data/artworks';

const Gallery = () => {
  const [currentCollection, setCurrentCollection] = useState(0);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const currentCollectionData = collections[currentCollection];
  const currentArtworks = artworks.filter(
    artwork => artwork.collection === currentCollectionData.id
  );

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [currentCollection]);

  const handleNext = () => {
    setCurrentCollection((prev) => (prev + 1) % collections.length);
  };

  const handlePrev = () => {
    setCurrentCollection((prev) => (prev - 1 + collections.length) % collections.length);
  };

  return (
    <div className="min-h-screen gallery-gradient">
      {/* Collection Header */}
      <div className="sticky top-0 z-20 backdrop-blur-xl bg-background/80 border-b border-gallery-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="font-serif text-3xl md:text-4xl text-gallery-gold mb-2">
                {currentCollectionData.name}
              </h2>
              <p className="text-gallery-text-muted text-sm md:text-base">
                {currentCollectionData.description} • {currentCollectionData.period}
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="border-gallery-border hover:bg-gallery-surface hover:border-gallery-gold transition-smooth"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="border-gallery-border hover:bg-gallery-surface hover:border-gallery-gold transition-smooth"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Collection Progress Indicator */}
          <div className="flex gap-2 mt-4">
            {collections.map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                  index === currentCollection
                    ? 'bg-gallery-gold'
                    : 'bg-gallery-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Artworks Grid */}
      <div className="container mx-auto px-6 py-16">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {currentArtworks.map((artwork, index) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              onClick={() => setSelectedArtwork(artwork)}
              delay={index * 100}
            />
          ))}
        </div>
      </div>

      {/* Artwork Detail Modal */}
      <ArtworkModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />

      <Navigation />
    </div>
  );
};

export default Gallery;
