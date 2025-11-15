import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';

const Lobby = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden gallery-gradient">
      {/* Ambient Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full spotlight-effect animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full spotlight-effect animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Decorative Frame Silhouettes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-16 w-64 h-80 border-2 border-gallery-gold rotate-6 animate-shimmer" />
        <div className="absolute top-48 right-24 w-56 h-72 border-2 border-gallery-gold -rotate-12 animate-shimmer" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-32 left-1/3 w-48 h-64 border-2 border-gallery-gold rotate-3 animate-shimmer" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo/Title */}
          <div className="mb-8">
            <div className="inline-block">
              <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl mb-4 bg-gradient-to-br from-gallery-gold via-gallery-text to-gallery-gold bg-clip-text text-transparent">
                MuseoSpace
              </h1>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gallery-gold to-transparent" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gallery-text-muted mb-4 tracking-wide">
            A Cinematic Journey Through Art History
          </p>
          
          <p className="text-sm md:text-base text-gallery-text-muted/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in curated collections spanning centuries of artistic mastery.
            From Renaissance masterpieces to modern revolutions, experience art like never before.
          </p>

          {/* CTA Button */}
          <Button
            onClick={() => navigate('/gallery')}
            size="lg"
            className="group relative overflow-hidden bg-gallery-gold hover:bg-gallery-gold/90 text-gallery-dark font-medium px-12 py-6 text-lg rounded-none border-2 border-gallery-gold transition-all duration-500 hover:scale-105 shadow-artwork"
          >
            <span className="relative z-10 flex items-center gap-3">
              Begin the Tour
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          </Button>

          {/* Exhibition Info */}
          <div className="mt-16 pt-8 border-t border-gallery-border">
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-serif text-gallery-gold mb-1">9</div>
                <div className="text-sm text-gallery-text-muted">Masterpieces</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-gallery-gold mb-1">3</div>
                <div className="text-sm text-gallery-text-muted">Collections</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-gallery-gold mb-1">∞</div>
                <div className="text-sm text-gallery-text-muted">Inspiration</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Lobby;
