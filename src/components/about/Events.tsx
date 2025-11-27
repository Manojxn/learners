import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { format } from "date-fns";
import Image from "next/image";
import { motion } from "framer-motion";

export type Event = {
  _id: string;
  eventName?: string;
  eventImage?: string;
  eventDateTime?: string;
  location?: string;
  shortDescription?: string;
  registrationUrl?: string;
};

type EventsProps = {
  events: Event[];
};

const Events = ({ events }: EventsProps) => {
  if (!events || events.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Events & Happenings
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Join Our Community Events
          </h2>
          <p className="text-xl text-gray-600">
            Discover upcoming workshops, seminars, and activities that enrich our learning community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                <div className="absolute top-4 right-4 z-20">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-primary">
                    {event.location?.includes('Webinar') ? 'Online' : 'In-Person'}
                  </span>
                </div>
                {event.eventImage && (
                  <Image
                    src={event.eventImage}
                    alt={event.eventName || "Event"}
                    fill
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%'
                    }}
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-white/90 text-xs sm:text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {event.eventDateTime
                        ? format(new Date(event.eventDateTime), "MMM d, yyyy")
                        : "Date TBA"}
                    </span>
                    {event.location && (
                      <>
                        <span className="mx-1">•</span>
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {event.eventName}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {event.shortDescription}
                </p>
                
                <div className="flex items-center justify-between mt-6">
                  <a
                    href={event.registrationUrl || "#"}
                    className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  
                  <span className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-600">
                    {event.eventDateTime
                      ? format(new Date(event.eventDateTime), "h:mm a")
                      : "Time TBA"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/reach-us"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
          >
            View All Events
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
