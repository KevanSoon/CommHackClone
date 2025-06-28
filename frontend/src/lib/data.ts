// lib/data.ts

// Define a type for our Garden items for type safety
export interface GardenItem {
  id: string;
  name: string;
  image: string;
  position: string;
  location: string;
  pqCount: number;
}

// This array acts as our in-memory database.
// In a real application, this would come from a database, CMS, etc.
export const gardenData: GardenItem[] = [
  {
    id: '1',
    name: 'Sunny Meadow Garden',
    image: 'https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop',
    position: 'Community Lead',
    location: 'Central Park, New York',
    pqCount: 12,
  },
  {
    id: '2',
    name: 'The Flower Grove',
    image: 'https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop',
    position: 'Lead Horticulturist',
    location: 'Kyoto, Japan',
    pqCount: 8,
  },
  {
    id: '3',
    name: 'Rooftop Vegetable Patch',
    image: 'https://images.pexels.com/photos/2519392/pexels-photo-2519392.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop',
    position: 'Urban Farming Specialist',
    location: 'Downtown, Singapore',
    pqCount: 21,
  },
  {
    id: '4',
    name: 'The Greenhouse Oasis',
    image: 'https://images.pexels.com/photos/2249959/pexels-photo-2249959.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop',
    position: 'Volunteer Coordinator',
    location: 'Portland, Oregon',
    pqCount: 5,
  },
  {
    id: '5',
    name: 'The Royal Glasshouse',
    image: 'https://images.pexels.com/photos/305821/pexels-photo-305821.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop',
    position: 'Lead Botanist',
    location: 'Kew Gardens, London',
    pqCount: 28,
  },
  {
    id: '6',
    name: 'Tranquil Zen Garden',
    image: 'https://images.pexels.com/photos/2893636/pexels-photo-2893636.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop',
    position: 'Landscape Designer',
    location: 'Golden Gate Park, SF',
    pqCount: 15,
  },
  {
    id: '7',
    name: 'Community Herb Spiral',
    image: 'https://images.pexels.com/photos/1105018/pexels-photo-1105018.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop',
    position: 'Master Gardener',
    location: 'Pike Place, Seattle',
    pqCount: 19,
  },
  {
    id: '8',
    name: "Monet's Water Lilies",
    image: 'https://images.pexels.com/photos/1601041/pexels-photo-1601041.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop',
    position: 'Aquatic Plant Specialist',
    location: 'Giverny, France',
    pqCount: 11,
  },
  {
    id: '9',
    name: 'The Versailles Parterre',
    image: 'https://images.pexels.com/photos/1616096/pexels-photo-1616096.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop',
    position: 'Head Groundskeeper',
    location: 'Versailles, France',
    pqCount: 35,
  },
    {
    id: '10',
    name: 'The Versailles Parterre',
    image: 'https://images.pexels.com/photos/1616096/pexels-photo-1616096.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&fit=crop',
    position: 'Head Groundskeeper',
    location: 'Versailles, France',
    pqCount: 35,
  },
];