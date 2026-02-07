import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";

interface EstateCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  featured?: boolean;
}

const EstateCard = ({
  id,
  image,
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  featured = false,
}: EstateCardProps) => {
  return (
    <Link
      to={`/properties/${id}`}
      className={`group block luxury-card overflow-hidden transition-all duration-500 ease-in-out hover:border-primary/20 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${featured ? "h-80" : "h-64"}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 ease-in-out" />
        
        {/* Price Tag */}
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-md transition-all duration-300 ease-in-out group-hover:bg-primary/90">
          <span className="font-semibold text-primary group-hover:text-primary-foreground transition-colors duration-300 ease-in-out">{price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
          <MapPin size={14} className="text-primary" />
          <span>{location}</span>
        </div>

        {/* Property Features */}
        <div className="flex items-center gap-6 text-muted-foreground text-sm mb-6">
          <div className="flex items-center gap-2">
            <Bed size={16} />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath size={16} />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Square size={16} />
            <span>{sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-primary text-sm font-medium transition-all duration-300 ease-in-out group-hover:gap-2.5">
          <span>View Details</span>
          <ArrowRight size={16} className="transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
};

export default EstateCard;
