"use client";

type MapProps = {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  locationName: string;
  className?: string;
};

const Map = ({ center, zoom, locationName, className = '' }: MapProps) => {
  // Create a bounding box around the center point
  const bbox = [
    center.lng - 0.01, // min longitude
    center.lat - 0.01, // min latitude
    center.lng + 0.01, // max longitude
    center.lat + 0.01, // max latitude
  ].join('%2C');

  // Create the OpenStreetMap iframe URL
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${center.lat}%2C${center.lng}`;

  return (
    <div className={`w-full h-full ${className}`} style={{ minHeight: '300px' }}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={mapUrl}
        title={`Map of ${locationName}`}
        className="rounded-lg"
        style={{ border: '1px solid #e5e7eb' }}
      ></iframe>
    </div>
  );
};

export default Map;
