export interface Property {
  id: string;
  title: string;
  location: string;
  address: string;
  price: string;
  priceValue: number;
  beds: number;
  baths: number;
  sqft: number;
  yearBuilt: number;
  description: string;
  features: string[];
  images: string[];
  type: "sale" | "rent";
  category: "house" | "apartment" | "penthouse" | "villa";
  featured: boolean;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Modern Hillside Estate",
    location: "Beverly Hills, CA",
    address: "1234 Sunset Boulevard, Beverly Hills, CA 90210",
    price: "$12,500,000",
    priceValue: 12500000,
    beds: 6,
    baths: 8,
    sqft: 12500,
    yearBuilt: 2022,
    description: "An architectural masterpiece nestled in the prestigious Beverly Hills. This stunning modern estate features floor-to-ceiling windows, an infinity pool overlooking the city, and smart home technology throughout. The open-concept design seamlessly blends indoor and outdoor living spaces.",
    features: [
      "Infinity Pool & Spa",
      "Home Theater",
      "Wine Cellar",
      "Smart Home System",
      "4-Car Garage",
      "Private Gym",
      "Outdoor Kitchen",
      "Panoramic Views"
    ],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200"
    ],
    type: "sale",
    category: "villa",
    featured: true
  },
  {
    id: "2",
    title: "Oceanfront Penthouse",
    location: "Malibu, CA",
    address: "5678 Pacific Coast Highway, Malibu, CA 90265",
    price: "$8,900,000",
    priceValue: 8900000,
    beds: 4,
    baths: 5,
    sqft: 6800,
    yearBuilt: 2021,
    description: "Perched above the Pacific Ocean, this penthouse offers unparalleled luxury with 180-degree ocean views. The residence features a private rooftop terrace, designer finishes, and direct beach access.",
    features: [
      "Direct Beach Access",
      "Private Rooftop Terrace",
      "Floor-to-Ceiling Windows",
      "Gourmet Kitchen",
      "Private Elevator",
      "Concierge Service"
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200"
    ],
    type: "sale",
    category: "penthouse",
    featured: true
  },
  {
    id: "3",
    title: "Contemporary Urban Loft",
    location: "Los Angeles, CA",
    address: "901 Arts District Way, Los Angeles, CA 90013",
    price: "$3,200,000",
    priceValue: 3200000,
    beds: 3,
    baths: 3,
    sqft: 4200,
    yearBuilt: 2020,
    description: "A sophisticated urban retreat in the heart of LA's Arts District. This converted warehouse features soaring 20-foot ceilings, exposed brick, and a private courtyard garden.",
    features: [
      "20-Foot Ceilings",
      "Exposed Brick Walls",
      "Private Courtyard",
      "Chef's Kitchen",
      "2-Car Parking",
      "Rooftop Access"
    ],
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200"
    ],
    type: "sale",
    category: "apartment",
    featured: false
  },
  {
    id: "4",
    title: "Mediterranean Villa",
    location: "Bel Air, CA",
    address: "2468 Stone Canyon Road, Bel Air, CA 90077",
    price: "$18,750,000",
    priceValue: 18750000,
    beds: 7,
    baths: 10,
    sqft: 15000,
    yearBuilt: 2019,
    description: "An extraordinary Mediterranean-inspired estate set on over two acres of manicured grounds. Features include a grand ballroom, multiple guest houses, and a resort-style pool complex.",
    features: [
      "Grand Ballroom",
      "Guest Houses",
      "Tennis Court",
      "Resort Pool Complex",
      "8-Car Garage",
      "Wine Cave",
      "Helipad",
      "Staff Quarters"
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200"
    ],
    type: "sale",
    category: "villa",
    featured: true
  },
  {
    id: "5",
    title: "Skyline Apartment",
    location: "Downtown LA",
    address: "1100 Wilshire Blvd, Los Angeles, CA 90017",
    price: "$2,100,000",
    priceValue: 2100000,
    beds: 2,
    baths: 2,
    sqft: 2400,
    yearBuilt: 2023,
    description: "Sleek and sophisticated living in one of Downtown LA's most prestigious towers. This modern apartment offers stunning city views and access to world-class amenities.",
    features: [
      "City Views",
      "Concierge Service",
      "Fitness Center",
      "Pool Deck",
      "Private Parking",
      "Pet Friendly"
    ],
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200"
    ],
    type: "sale",
    category: "apartment",
    featured: false
  },
  {
    id: "6",
    title: "Classic Estate Manor",
    location: "Pasadena, CA",
    address: "555 Oak Knoll Avenue, Pasadena, CA 91106",
    price: "$9,500,000",
    priceValue: 9500000,
    beds: 5,
    baths: 6,
    sqft: 8500,
    yearBuilt: 1925,
    description: "A meticulously restored 1920s estate blending historic charm with modern luxury. Set on lush grounds with mature gardens, a pool pavilion, and carriage house.",
    features: [
      "Historic Architecture",
      "Pool Pavilion",
      "Carriage House",
      "Formal Gardens",
      "Library",
      "Butler's Pantry"
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200"
    ],
    type: "sale",
    category: "house",
    featured: false
  }
];

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find((property) => property.id === id);
};

export const getFeaturedProperties = (): Property[] => {
  return properties.filter((property) => property.featured);
};
