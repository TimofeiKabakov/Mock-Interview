export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "ROBLOX Button SFX",
    description:
      "Classic collection of authentic Roblox button sound effects, perfect for game developers and content creators seeking that nostalgic touch.",
    price: 10,
  },
  {
    id: 2,
    name: "KSI new song ahh",
    description:
      "The latest single from KSI, a catchy and energetic track that blends rap and pop influences. A must-have for fans of his unique sound.",
    price: 20,
  },
  {
    id: 3,
    name: "Ohio Goofy Ahh",
    description:
      "Compilation of viral and humorous sound clips from the internet's 'Ohio' trend. Guaranteed to add a dose of absurdity to your projects.",
    price: 30,
  },
  {
    id: 4,
    name: "Lo-fi Beats for Study",
    description:
      "A calming collection of lo-fi hip-hop beats, ideal for focusing while studying, working, or relaxing. Perfect for creating a chill atmosphere.",
    price: 15,
  },
  {
    id: 5,
    name: "Retro 8-bit Game Music",
    description:
      "Authentic 8-bit chiptune music tracks, reminiscent of classic video games. Great for indie game developers and retro enthusiasts.",
    price: 25,
  },
  {
    id: 6,
    name: "Nature Soundscapes - Forest",
    description:
      "Immerse yourself in the sounds of a serene forest. High-quality recordings of birdsong, rustling leaves, and gentle streams. Perfect for meditation and relaxation.",
    price: 18,
  },
  {
    id: 7,
    name: "Cinematic Trailer Sound Effects",
    description:
      "Powerful and dramatic sound effects designed for movie trailers and cinematic projects. Includes impacts, risers, and whooshes.",
    price: 35,
  },
  {
    id: 8,
    name: "Funny Animal Sound Pack",
    description:
      "A hilarious collection of animal sounds, including quirky barks, meows, and squawks. Perfect for adding comedic elements to your videos.",
    price: 12,
  },
  {
    id: 9,
    name: "Futuristic UI Sound Effects",
    description:
      "Modern and sleek sound effects for user interfaces, including clicks, notifications, and interactions. Ideal for apps and digital interfaces.",
    price: 22,
  },
  {
    id: 10,
    name: "Ambient Space Drones",
    description:
      "Deep and immersive ambient drones, perfect for creating a sense of vastness and mystery. Suitable for sci-fi projects and atmospheric compositions.",
    price: 28,
  },
  {
    id: 11,
    name: "Indie Rock Guitar Loops",
    description:
      "A collection of catchy and melodic guitar loops, perfect for indie rock and pop productions. Includes clean and distorted tones.",
    price: 27,
  },
  {
    id: 12,
    name: "Tropical Beach Ambiance",
    description:
      "Relaxing soundscape of a tropical beach, featuring gentle waves, seagulls, and distant chatter. Ideal for creating a vacation vibe.",
    price: 19,
  },
];

export function getProducts(): Product[] {
  return products;
}
