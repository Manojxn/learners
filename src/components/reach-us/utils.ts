import { Location } from "./types";

// Function to get coordinates for an address (this is a fallback, in a real app you'd use a geocoding service)
export const getCoordinatesForLocation = (location: Location) => {
    // These are default coordinates (Bangalore)
    // In a real app, you'd use a geocoding service to get these
    const defaultCoords = {
        lat: 12.9716,
        lng: 77.5946
    };

    // Add more locations as needed
    const locationCoordinates: Record<string, { lat: number; lng: number }> = {
        '123 Education Lane': { lat: 12.9716, lng: 77.5946 },
        '456 University Road': { lat: 12.9724, lng: 77.5807 },
        '789 Corporate Avenue': { lat: 12.9665, lng: 77.5872 },
    };

    return locationCoordinates[location.streetAddress || ''] || defaultCoords;
};

// Function to get OpenStreetMap URL for directions
export const getOSMDirectionsUrl = (location: Location) => {
    const address = [
        location.streetAddress,
        location.city,
        location.stateProvince,
        location.zipPostalCode,
    ]
        .filter(Boolean)
        .join(", ")
        .replace(/\s+/g, "+");

    return `https://www.openstreetmap.org/directions?from=&to=${encodeURIComponent(address)}`;
};

// Function to get Google Maps directions URL
export const getGoogleMapsDirectionsUrl = (location: Location) => {
    // If we have a mapEmbedUrl, extract the place ID for exact location
    if (location.mapEmbedUrl) {
        // Try to extract place ID (format: !1s0x...)
        const placeIdMatch = location.mapEmbedUrl.match(/!1s(0x[a-f0-9]+:[a-f0-9x]+)/);

        if (placeIdMatch) {
            const placeId = placeIdMatch[1];
            // Use place ID for exact location with directions
            return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(placeId)}&destination_place_id=${encodeURIComponent(placeId)}`;
        }

        // Fallback: Extract coordinates from the embed URL
        // Format: !2d{longitude}!3d{latitude}
        const lonMatch = location.mapEmbedUrl.match(/!2d([-\d.]+)/);
        const latMatch = location.mapEmbedUrl.match(/!3d([-\d.]+)/);

        if (lonMatch && latMatch) {
            const lat = latMatch[1];
            const lon = lonMatch[1];
            // Use coordinates for precise location
            return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;
        }
    }

    // Fallback to address-based search
    const address = [
        location.streetAddress,
        location.city,
        location.stateProvince,
        location.zipPostalCode,
    ]
        .filter(Boolean)
        .join(", ");

    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
};
