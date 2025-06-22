"use client";

import { useState, useEffect } from 'react';
import { Maximize, Minimize } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FullScreenToggle() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    function onFullScreenChange() {
      setIsFullScreen(Boolean(document.fullscreenElement));
    }
    document.addEventListener('fullscreenchange', onFullScreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullScreenChange);
  }, []);

  const handleToggleFullScreen = () => {
    if (!isFullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <Button variant="outline" size="icon" onClick={handleToggleFullScreen}>
      {isFullScreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
      <span className="sr-only">{isFullScreen ? 'Exit full screen' : 'Enter full screen'}</span>
    </Button>
  );
} 