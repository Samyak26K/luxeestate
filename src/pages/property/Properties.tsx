import { useState } from "react";
import { Search, MapPin, Home, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SiteFrame from "@/components/layout/SiteFrame";
import LuxeSectionHeader from "@/components/marketing/LuxeSectionHeader";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";

const locations = ["All Locations", "Beverly Hills, CA", "Malibu, CA", "Los Angeles, CA", "Bel Air, CA", "Downtown LA", "Pasadena, CA"];
const propertyTypes = ["All Types", "Villa", "Penthouse", "House", "Apartment"];
const priceRanges = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under $5M", min: 0, max: 5000000 },
  { label: "$5M - $10M", min: 5000000, max: 10000000 },
  { label: "$10M - $20M", min: 10000000, max: 20000000 },
  { label: "Over $20M", min: 20000000, max: Infinity },
];

const Properties = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLocation =
      selectedLocation === "All Locations" ||
      property.location === selectedLocation;
    
    const matchesType =
      selectedType === "All Types" ||
      property.category.toLowerCase() === selectedType.toLowerCase();
    
    const matchesPrice =
      property.priceValue >= selectedPriceRange.min &&
      property.priceValue <= selectedPriceRange.max;

    return matchesSearch && matchesLocation && matchesType && matchesPrice;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedLocation("All Locations");
    setSelectedType("All Types");
    setSelectedPriceRange(priceRanges[0]);
  };

  return (
    <SiteFrame>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <LuxeSectionHeader
            subtitle="Our Portfolio"
            title="LuxeEstate Properties"
            description="Explore LuxeEstate's curated selection of the world's most exceptional residences."
          />
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-10 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search by address, neighborhood, or property name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg pl-14 pr-6 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-base"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Location Filter */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} />
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 appearance-none cursor-pointer"
              >
                {locations.map((location) => (
                  <option key={location} value={location} className="bg-secondary">
                    {location}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type Filter */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <Home size={14} />
                Property Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 appearance-none cursor-pointer"
              >
                {propertyTypes.map((type) => (
                  <option key={type} value={type} className="bg-secondary">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <DollarSign size={14} />
                Price Range
              </label>
              <select
                value={selectedPriceRange.label}
                onChange={(e) => {
                  const range = priceRanges.find((r) => r.label === e.target.value);
                  if (range) setSelectedPriceRange(range);
                }}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 appearance-none cursor-pointer"
              >
                {priceRanges.map((range) => (
                  <option key={range.label} value={range.label} className="bg-secondary">
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {filteredProperties.length > 0 ? (
            <>
              <p className="text-muted-foreground mb-10 text-sm tracking-wide">
                Showing <span className="text-foreground font-medium">{filteredProperties.length}</span> {filteredProperties.length === 1 ? "property" : "properties"}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map((property) => (
                  <Link
                    key={property.id}
                    to={`/properties/${property.id}`}
                    className="group block"
                  >
                    <div className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-500 hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                      {/* Property Image */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={property.images[0]}
                          alt={property.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-background/80 backdrop-blur-sm text-xs uppercase tracking-wider text-muted-foreground rounded">
                            {property.category}
                          </span>
                        </div>
                      </div>

                      {/* Property Content */}
                      <div className="p-6 space-y-4">
                        {/* Title */}
                        <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-1">
                          {property.title}
                        </h3>
                        
                        {/* Location */}
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <MapPin size={14} className="text-primary shrink-0" />
                          <span className="line-clamp-1">{property.location}</span>
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-border" />

                        {/* Price & CTA */}
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Price</p>
                            <p className="text-xl font-semibold text-primary">{property.price}</p>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary group-hover:gap-3 transition-all duration-300">
                            <span>View Details</span>
                            <ArrowRight size={16} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-24">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
                <Home className="text-muted-foreground" size={28} />
              </div>
              <p className="text-foreground text-xl mb-2">No properties found</p>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters to discover more properties.
              </p>
              <Button variant="ghost" size="sm" onClick={clearFilters} className="uppercase">
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </SiteFrame>
  );
};

export default Properties;
