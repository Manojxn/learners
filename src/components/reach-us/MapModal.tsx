"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X } from "lucide-react";
import dynamic from 'next/dynamic';
import { Location } from "./types";
import { getCoordinatesForLocation, getGoogleMapsDirectionsUrl } from "./utils";

// Dynamically import the Map component
const Map = dynamic(() => import('../../components/Map'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
            <div className="animate-pulse text-gray-500">Loading map...</div>
        </div>
    ),
});

interface MapModalProps {
    isOpen: boolean;
    onClose: () => void;
    location: Location | null;
}

export default function MapModal({ isOpen, onClose, location }: MapModalProps) {
    if (!location) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <div className="flex justify-between items-center p-4 border-b border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900">
                                {location.locationName}
                            </h3>
                            <button
                                onClick={onClose}
                                className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                                aria-label="Close map"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>
                        <div className="aspect-video w-full bg-gray-100  overflow-hidden">
                            <div className="w-full h-full">
                                {location.mapEmbedUrl ? (
                                    <iframe
                                        src={location.mapEmbedUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="w-full h-full"
                                    />
                                ) : (
                                    <Map
                                        center={getCoordinatesForLocation(location)}
                                        locationName={location.locationName || 'Location'}
                                        zoom={15}
                                        className="w-full h-full"
                                    />
                                )}
                            </div>
                        </div>
                        <div className="p-4 border-t border-gray-100">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <h4 className="font-medium text-gray-900">{location.locationName}</h4>
                                    <p className="text-sm text-gray-600">
                                        {[
                                            location.streetAddress,
                                            location.city,
                                            location.stateProvince,
                                            location.zipPostalCode,
                                        ]
                                            .filter(Boolean)
                                            .join(", ")}
                                    </p>
                                </div>
                                <a
                                    href={getGoogleMapsDirectionsUrl(location)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors text-center flex items-center justify-center"
                                >
                                    <MapPin className="w-4 h-4 mr-2" />
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
