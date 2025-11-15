import { useEffect, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Artwork } from '@/data/artworks';

interface ArtworkModalProps {
  artwork: Artwork | null;
  onClose: () => void;
}

const ArtworkModal = ({ artwork, onClose }: ArtworkModalProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (artwork) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [artwork]);

  if (!artwork) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gallery-dark/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-gallery-surface border border-gallery-border rounded-lg shadow-gallery animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-gallery-dark/80 hover:bg-gallery-dark text-gallery-text border border-gallery-border"
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Image Section */}
          <div className="relative">
            <div
              className={`relative aspect-[3/4] overflow-hidden rounded border border-gallery-border cursor-zoom-in ${
                isZoomed ? 'scale-150' : 'scale-100'
              } transition-transform duration-500`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-full object-cover"
              />
              
              {!isZoomed && (
                <div className="absolute top-4 right-4 bg-gallery-dark/80 text-gallery-text px-3 py-2 rounded flex items-center gap-2 text-sm">
                  <ZoomIn className="w-4 h-4" />
                  Click to zoom
                </div>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <h2 className="font-serif text-4xl text-gallery-gold mb-3">
                {artwork.title}
              </h2>
              <p className="text-xl text-gallery-text mb-2">{artwork.artist}</p>
              <div className="flex gap-4 text-gallery-text-muted">
                <span>{artwork.year}</span>
                <span>•</span>
                <span>{artwork.medium}</span>
              </div>
            </div>

            <div className="h-px bg-gallery-border mb-6" />

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gallery-text">Curator's Notes</h3>
              <p className="text-gallery-text-muted leading-relaxed">
                {artwork.description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gallery-border">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gallery-text-muted mb-1">Collection</p>
                  <p className="text-gallery-text capitalize">{artwork.collection}</p>
                </div>
                <div>
                  <p className="text-gallery-text-muted mb-1">Period</p>
                  <p className="text-gallery-text">
                    {artwork.collection === 'renaissance' && '14th-17th Century'}
                    {artwork.collection === 'abstract' && 'Early 20th Century'}
                    {artwork.collection === 'modern' && '20th Century'}
                  </p>
                </div>
              </div>
            </div>

            <Button
              onClick={onClose}
              variant="outline"
              className="mt-8 border-gallery-gold hover:bg-gallery-gold hover:text-gallery-dark transition-smooth"
            >
              Return to Gallery
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkModal;
