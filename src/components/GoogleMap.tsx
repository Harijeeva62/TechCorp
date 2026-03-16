import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
}

export default function GoogleMap({ 
  center = { lat: 40.7128, lng: -74.0060 }, // New York City coordinates
  zoom = 13 
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if Google Maps API is loaded
    if (!window.google) {
      console.warn('Google Maps API not loaded yet');
      return;
    }

    if (mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry.fill',
            stylers: [{ saturation: '20' }],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#a2daf7' }],
          },
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
        ],
      });

      // Add a marker at TechCorp Office
      new window.google.maps.Marker({
        position: center,
        map,
        title: 'TechCorp - New York Office',
        animation: window.google.maps.Animation.DROP,
      });
    }
  }, [center, zoom]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full min-h-[400px] rounded-xl shadow-lg"
      style={{ minHeight: '400px' }}
    />
  );
}

// Extend the Window interface to include google
declare global {
  interface Window {
    google: any;
  }
}
