import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { artworks } from '@/data/artworks';
import { useNavigate } from 'react-router-dom';
import { Heart, Share2, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';
import Navigation from '@/components/Navigation';

const Feedback = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    favoriteArtwork: '',
    comments: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (formData.email.length > 255) {
      newErrors.email = 'Email must be less than 255 characters';
    }

    if (formData.comments.length > 1000) {
      newErrors.comments = 'Comments must be less than 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setShowThankYou(true);
      setTimeout(() => {
        setShowThankYou(false);
      }, 5000);
    }
  };

  const handleRestart = () => {
    navigate('/');
  };

  const handleShare = () => {
    toast.success('Link copied to clipboard!', {
      description: 'Share MuseoSpace with your friends'
    });
  };

  if (showThankYou) {
    return (
      <div className="min-h-screen gallery-gradient flex items-center justify-center px-6">
        <div className="max-w-2xl w-full text-center animate-fade-in-up">
          <div className="inline-block mb-6">
            <div className="w-24 h-24 rounded-full bg-gallery-gold/20 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-gallery-gold fill-gallery-gold animate-pulse" />
            </div>
          </div>
          
          <h2 className="font-serif text-5xl text-gallery-gold mb-4">Thank You, {formData.name}!</h2>
          <p className="text-xl text-gallery-text-muted mb-8">
            Your reflection has been captured. We appreciate you taking this journey through art history with us.
          </p>

          <div className="bg-gallery-surface border border-gallery-border rounded-lg p-6 mb-8">
            <p className="text-sm text-gallery-text-muted mb-2">Your favorite artwork:</p>
            <p className="text-lg text-gallery-gold">
              {artworks.find(a => a.id === formData.favoriteArtwork)?.title || 'Not selected'}
            </p>
            {formData.comments && (
              <>
                <p className="text-sm text-gallery-text-muted mt-4 mb-2">Your thoughts:</p>
                <p className="text-gallery-text italic">&ldquo;{formData.comments}&rdquo;</p>
              </>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleRestart}
              variant="outline"
              className="border-gallery-gold hover:bg-gallery-gold hover:text-gallery-dark transition-smooth"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Restart Tour
            </Button>
            <Button
              onClick={handleShare}
              className="bg-gallery-gold hover:bg-gallery-gold/90 text-gallery-dark transition-smooth"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Experience
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gallery-gradient py-16 px-6">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl md:text-6xl text-gallery-gold mb-4">
            Visitor Reflection
          </h1>
          <p className="text-gallery-text-muted text-lg">
            Share your thoughts and impressions from your journey through MuseoSpace
          </p>
        </div>

        {/* Feedback Form */}
        <form onSubmit={handleSubmit} className="bg-gallery-surface border border-gallery-border rounded-lg p-8 shadow-gallery">
          {/* Name Field */}
          <div className="mb-6">
            <Label htmlFor="name" className="text-gallery-text mb-2 block">
              Name *
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`bg-background border-gallery-border focus:border-gallery-gold transition-smooth ${
                errors.name ? 'border-destructive' : ''
              }`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-destructive text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <Label htmlFor="email" className="text-gallery-text mb-2 block">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`bg-background border-gallery-border focus:border-gallery-gold transition-smooth ${
                errors.email ? 'border-destructive' : ''
              }`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Rating */}
          <div className="mb-6">
            <Label className="text-gallery-text mb-3 block">
              Rate Your Experience
            </Label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: star })}
                  className="group"
                >
                  <div
                    className={`w-12 h-12 rounded-lg border-2 transition-all ${
                      star <= formData.rating
                        ? 'bg-gallery-gold border-gallery-gold text-gallery-dark'
                        : 'border-gallery-border hover:border-gallery-gold text-gallery-text-muted'
                    }`}
                  >
                    <span className="flex items-center justify-center h-full font-serif text-lg">
                      {star}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Favorite Artwork */}
          <div className="mb-6">
            <Label htmlFor="favorite" className="text-gallery-text mb-2 block">
              Favorite Artwork
            </Label>
            <select
              id="favorite"
              value={formData.favoriteArtwork}
              onChange={(e) => setFormData({ ...formData, favoriteArtwork: e.target.value })}
              className="w-full bg-background border border-gallery-border rounded-md px-4 py-2 text-gallery-text focus:border-gallery-gold focus:outline-none transition-smooth"
            >
              <option value="">Select an artwork...</option>
              {artworks.map((artwork) => (
                <option key={artwork.id} value={artwork.id}>
                  {artwork.title} - {artwork.artist}
                </option>
              ))}
            </select>
          </div>

          {/* Comments */}
          <div className="mb-8">
            <Label htmlFor="comments" className="text-gallery-text mb-2 block">
              Your Thoughts & Reflections
            </Label>
            <Textarea
              id="comments"
              value={formData.comments}
              onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
              className={`bg-background border-gallery-border focus:border-gallery-gold transition-smooth min-h-32 ${
                errors.comments ? 'border-destructive' : ''
              }`}
              placeholder="What moved you? What inspired you? Share your experience..."
            />
            {errors.comments && (
              <p className="text-destructive text-sm mt-1">{errors.comments}</p>
            )}
            <p className="text-gallery-text-muted text-sm mt-1">
              {formData.comments.length}/1000 characters
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gallery-gold hover:bg-gallery-gold/90 text-gallery-dark font-medium py-6 text-lg transition-smooth shadow-artwork"
          >
            Submit Reflection
          </Button>
        </form>

        <Navigation />
      </div>
    </div>
  );
};

export default Feedback;
