"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { Image } from "@/components/ui/image";
import { Location } from "./types";

interface LocationsSectionProps {
    locations: Location[];
    onLocationClick: (location: Location) => void;
}

export default function LocationsSection({ locations, onLocationClick }: LocationsSectionProps) {
    if (locations.length === 0) return null;

    return (
        <section className="relative py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    {/* <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                        Our Campuses
                    </span> */}
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                        Find Us Near You
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Visit us at any of our campuses across the region for personalized assistance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {locations.map((location, index) => (
                        <motion.div
                            key={location._id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => onLocationClick(location)}
                            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20 cursor-pointer"
                        >
                            {location.locationImage && (
                                <Image
                                    src={location.locationImage}
                                    alt={location.locationName || "Location"}
                                    className="w-full h-48 object-cover"
                                    width={400}
                                    height={300}
                                />
                            )}
                            <div className="p-6">
                                <div className="flex items-start gap-4 mb-5">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                                            {location.locationName}
                                        </h3>
                                        {location.verticalAssociation && (
                                            <p className="text-sm text-primary font-medium">
                                                {location.verticalAssociation}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-4 border-t border-gray-100 pt-5">
                                    <div className="space-y-4">
                                        {(location.streetAddress ||
                                            location.city ||
                                            location.stateProvince ||
                                            location.zipPostalCode) && (
                                                <div className="flex items-start gap-3">
                                                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 opacity-70" />
                                                    <div>
                                                        <p className="text-sm text-gray-600">
                                                            {location.streetAddress && (
                                                                <span className="block font-medium text-gray-900">{location.streetAddress}</span>
                                                            )}
                                                            {[
                                                                location.city,
                                                                location.stateProvince,
                                                                location.zipPostalCode,
                                                            ]
                                                                .filter(Boolean)
                                                                .join(", ")}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                    </div>

                                    {location.phoneNumber && (
                                        <div className="flex items-start gap-3">
                                            <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 opacity-70" />
                                            <div>
                                                <a
                                                    href={`tel:${location.phoneNumber}`}
                                                    className="text-sm text-gray-600 hover:text-primary transition-colors block"
                                                >
                                                    {location.phoneNumber}
                                                </a>
                                            </div>
                                        </div>
                                    )}

                                    {location.emailAddress && (
                                        <div className="flex items-start gap-3">
                                            <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 opacity-70" />
                                            <div>
                                                <a
                                                    href={`mailto:${location.emailAddress}`}
                                                    className="text-sm text-gray-600 hover:text-primary transition-colors break-all"
                                                >
                                                    {location.emailAddress}
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
