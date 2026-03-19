import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icon issue with Webpack/Vite
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Set default icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

export default function OpenStreetMap({
  center = [40.7128, -74.0060], // New York City coordinates [lat, lng]
  zoom = 13,
  locationName = 'TechCorp Office'
}) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize the map
    const map = L.map(mapRef.current).setView(center, zoom);
    mapInstanceRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Create custom icon with your brand colors
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="position: relative;">
          <svg width="40" height="52" viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0C8.9543 0 0 8.9543 0 20C0 31.0457 20 52 20 52C20 52 40 31.0457 40 20C40 8.9543 31.0457 0 20 0Z" fill="url(#markerGradient)"/>
            <circle cx="20" cy="20" r="8" fill="white"/>
            <defs>
              <linearGradient id="markerGradient" x1="20" y1="0" x2="20" y2="52" gradientUnits="userSpaceOnUse">
                <stop stop-color="#f97316"/>
                <stop offset="1" stop-color="#ea580c"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      `,
      iconSize: [40, 52],
      iconAnchor: [20, 52],
      popupAnchor: [0, -52],
    });

    // Add marker with popup
    const marker = L.marker(center, { icon: customIcon }).addTo(map);
    
    marker.bindPopup(`
      <div style="text-align: center; padding: 8px;">
        <strong style="font-size: 14px; color: #1f2937;">${locationName}</strong>
        <br/>
        <span style="font-size: 12px; color: #6b7280;">New York, NY</span>
      </div>
    `).openPopup();

    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [center, zoom, locationName]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full min-h-[400px] rounded-xl z-0"
      style={{ minHeight: '400px' }}
    />
  );
}
