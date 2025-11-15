export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: number;
  medium: string;
  description: string;
  imageUrl: string;
  collection: 'renaissance' | 'abstract' | 'modern';
}

export const artworks: Artwork[] = [
  // Renaissance Collection
  {
    id: 'ren-1',
    title: 'The Birth of Venus',
    artist: 'Sandro Botticelli',
    year: 1485,
    medium: 'Tempera on canvas',
    description: 'One of the most iconic paintings of the Italian Renaissance, depicting the goddess Venus emerging from the sea. The composition masterfully balances classical mythology with Renaissance ideals of beauty and grace.',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80',
    collection: 'renaissance'
  },
  {
    id: 'ren-2',
    title: 'The School of Athens',
    artist: 'Raphael',
    year: 1511,
    medium: 'Fresco',
    description: 'A magnificent representation of philosophy and the gathering of great classical philosophers. Raphael\'s use of perspective and architectural elements creates an illusion of grand spatial depth.',
    imageUrl: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=800&q=80',
    collection: 'renaissance'
  },
  {
    id: 'ren-3',
    title: 'Madonna and Child',
    artist: 'Leonardo da Vinci',
    year: 1490,
    medium: 'Oil on wood',
    description: 'A tender portrayal of maternal love, this work exemplifies da Vinci\'s mastery of sfumato technique and psychological depth in portraiture.',
    imageUrl: 'https://images.unsplash.com/photo-1578926288207-e821db1a2050?w=800&q=80',
    collection: 'renaissance'
  },

  // Abstract Collection
  {
    id: 'abs-1',
    title: 'Composition VIII',
    artist: 'Wassily Kandinsky',
    year: 1923,
    medium: 'Oil on canvas',
    description: 'A pioneering work of abstract art, featuring geometric shapes and bold colors that explore the relationship between form, color, and spiritual expression.',
    imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80',
    collection: 'abstract'
  },
  {
    id: 'abs-2',
    title: 'Broadway Boogie Woogie',
    artist: 'Piet Mondrian',
    year: 1943,
    medium: 'Oil on canvas',
    description: 'Inspired by the grid layout of Manhattan and the energetic rhythm of jazz music, this abstract composition uses primary colors and geometric precision.',
    imageUrl: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&q=80',
    collection: 'abstract'
  },
  {
    id: 'abs-3',
    title: 'No. 5',
    artist: 'Jackson Pollock',
    year: 1948,
    medium: 'Oil on fiberboard',
    description: 'A masterpiece of abstract expressionism, created using Pollock\'s revolutionary drip painting technique. The layered chaos reveals a hidden order.',
    imageUrl: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&q=80',
    collection: 'abstract'
  },

  // Modern Collection
  {
    id: 'mod-1',
    title: 'The Persistence of Memory',
    artist: 'Salvador Dalí',
    year: 1931,
    medium: 'Oil on canvas',
    description: 'Surrealist masterpiece featuring melting clocks in a dreamlike landscape, exploring themes of time, memory, and the subconscious mind.',
    imageUrl: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80',
    collection: 'modern'
  },
  {
    id: 'mod-2',
    title: 'Campbell\'s Soup Cans',
    artist: 'Andy Warhol',
    year: 1962,
    medium: 'Synthetic polymer paint on canvas',
    description: 'An iconic work of Pop Art that challenged traditional concepts of artistic subject matter by elevating everyday consumer products to fine art status.',
    imageUrl: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80',
    collection: 'modern'
  },
  {
    id: 'mod-3',
    title: 'Guernica',
    artist: 'Pablo Picasso',
    year: 1937,
    medium: 'Oil on canvas',
    description: 'A powerful anti-war statement created in response to the bombing of Guernica. The monochromatic palette and fragmented forms convey the chaos and suffering of war.',
    imageUrl: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80',
    collection: 'modern'
  }
];

export const collections = [
  {
    id: 'renaissance',
    name: 'Renaissance Masters',
    description: 'Journey through the rebirth of classical art and humanistic ideals',
    period: '14th-17th Century'
  },
  {
    id: 'abstract',
    name: 'Abstract Expressions',
    description: 'Explore the liberation of form, color, and emotion',
    period: 'Early 20th Century'
  },
  {
    id: 'modern',
    name: 'Modern Movements',
    description: 'Witness the revolutionary spirit of contemporary art',
    period: '20th Century'
  }
] as const;
