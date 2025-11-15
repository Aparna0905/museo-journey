import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Image, MessageSquare } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: 'Lobby', icon: Home },
    { path: '/gallery', label: 'Gallery', icon: Image },
    { path: '/feedback', label: 'Feedback', icon: MessageSquare },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-gallery-surface/90 backdrop-blur-xl border border-gallery-border rounded-full px-6 py-3 shadow-gallery">
      <div className="flex gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Button
              key={item.path}
              onClick={() => navigate(item.path)}
              variant="ghost"
              size="sm"
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-gallery-gold text-gallery-dark hover:bg-gallery-gold/90'
                  : 'text-gallery-text-muted hover:text-gallery-text hover:bg-gallery-dark/50'
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {item.label}
            </Button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
