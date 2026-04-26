import { Product } from '../types';
import womenWhite from '../assets/women/white.png';
import womenApricot from '../assets/women/apricot.png';
import womenDarkGreen from '../assets/women/dark-green.png';
import womenKhaki from '../assets/women/khaki.png';
import womenBlack from '../assets/women/black.png';
import womenBrown from '../assets/women/brown.png';
import womenBlue from '../assets/women/blue.png';
import peplumMocha from '../assets/women-peplum/mocha.png';
import peplumTaupeBrown from '../assets/women-peplum/taupe-brown.png';
import peplumMauve from '../assets/women-peplum/mauve.png';
import peplumOldrose from '../assets/women-peplum/oldrose.png';
import peplumAvocadoGreen from '../assets/women-peplum/avocado-green.png';
import peplumRed from '../assets/women-peplum/red.png';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Minimalist Wool Overcoat',
    description: 'A premium wool-blend overcoat with a clean, structured silhouette. Perfect for layering in colder months while maintaining a sophisticated look.',
    price: 8500,
    category: 'men',
    images: [
      'https://picsum.photos/seed/har1/800/1200',
      'https://picsum.photos/seed/har1b/800/1200'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Beige', hex: '#D2B48C' },
      { name: 'Black', hex: '#000000' }
    ],
    details: [
      '80% Wool, 20% Nylon',
      'Fully lined',
      'Notched lapel',
      'Three-button closure'
    ]
  },
  {
    id: 'p2',
    name: 'Relaxed Camp Collar Blouse',
    description: 'A clean short-sleeve blouse with a relaxed drape and open camp collar. Built for breathable everyday wear with a polished silhouette.',
    price: 2200,
    category: 'women',
    images: [
      womenWhite,
      womenApricot,
      womenDarkGreen,
      womenKhaki,
      womenBlack,
      womenBrown,
      womenBlue
    ],
    colorImages: {
      White: womenWhite,
      Apricot: womenApricot,
      'Dark Green': womenDarkGreen,
      Khaki: womenKhaki,
      Black: womenBlack,
      Brown: womenBrown,
      Blue: womenBlue
    },
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Apricot', hex: '#E6D5C3' },
      { name: 'Dark Green', hex: '#6E786B' },
      { name: 'Khaki', hex: '#C4B7A6' },
      { name: 'Black', hex: '#000000' },
      { name: 'Brown', hex: '#8A5F56' },
      { name: 'Blue', hex: '#A8BCE2' }
    ],
    details: [
      'Soft woven lightweight fabric',
      'Camp collar neckline',
      'Front button closure',
      'Relaxed everyday fit'
    ]
  },
  {
    id: 'p3',
    name: 'Graphic Premium Hoodie',
    description: 'Heavyweight organic cotton hoodie with a minimalist Harmajen logo. Streetwear elegance combined with maximum comfort.',
    price: 3200,
    category: 'new-arrivals',
    images: [
      'https://picsum.photos/seed/har3/800/1200',
      'https://picsum.photos/seed/har3b/800/1200'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Ash Gray', hex: '#B2BEB5' },
      { name: 'Midnight', hex: '#191970' }
    ],
    details: [
      '100% Organic Cotton',
      'Heavyweight 400gsm',
      'Dropped shoulders',
      'Screen-printed logo'
    ]
  },
  {
    id: 'p4',
    name: 'Tailored Linen Trousers',
    description: 'Breathable linen trousers with a relaxed yet refined fit. Essential for tropical luxury and summer evenings.',
    price: 2800,
    category: 'best-sellers',
    images: [
      'https://picsum.photos/seed/har4/800/1200',
      'https://picsum.photos/seed/har4b/800/1200'
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Sand', hex: '#C2B280' },
      { name: 'White', hex: '#FFFFFF' }
    ],
    details: [
      '100% Belgian Linen',
      'Straight leg',
      'Breathable fabric',
      'Sustainable materials'
    ]
  },
  {
    id: 'p5',
    name: 'Croc-Effect Shoulder Bag',
    description: 'A structured shoulder bag in premium croc-effect leather. A timeless accessory for the modern woman.',
    price: 6500,
    category: 'women',
    images: [
      'https://picsum.photos/seed/har5/800/1200',
      'https://picsum.photos/seed/har5b/800/1200'
    ],
    sizes: ['One Size'],
    colors: [
      { name: 'Deep Burgundy', hex: '#800020' },
      { name: 'Black', hex: '#000000' }
    ],
    details: [
      'Genuine Leather',
      'Gold-tone hardware',
      'Internal zip pocket',
      'Magnetic closure'
    ]
  },
  {
    id: 'p6',
    name: 'Oversized Boxy Tee',
    description: 'Classic oversized fit tee made from premium heavy cotton. The foundation of any minimalist streetwear wardrobe.',
    price: 1800,
    category: 'sale',
    images: [
      'https://picsum.photos/seed/har6/800/1200',
      'https://picsum.photos/seed/har6b/800/1200'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' }
    ],
    details: [
      '100% Combed Cotton',
      'Boxy fit',
      'Reinforced neck',
      'Preshrunk'
    ]
  },
  {
    id: 'p7',
    name: 'Open-Back Peplum Top',
    description: 'A structured sleeveless peplum top with a flattering waist seam and open-back ribbon detail. Designed to transition from casual daytime to elevated evening looks.',
    price: 2450,
    category: 'women',
    images: [
      peplumMocha,
      peplumTaupeBrown,
      peplumMauve,
      peplumOldrose,
      peplumAvocadoGreen,
      peplumRed
    ],
    colorImages: {
      Mocha: peplumMocha,
      'Taupe Brown': peplumTaupeBrown,
      Mauve: peplumMauve,
      Oldrose: peplumOldrose,
      'Avocado Green': peplumAvocadoGreen,
      Red: peplumRed
    },
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Mocha', hex: '#B29C86' },
      { name: 'Taupe Brown', hex: '#5E4B3A' },
      { name: 'Mauve', hex: '#CB6B8D' },
      { name: 'Oldrose', hex: '#EE9A8C' },
      { name: 'Avocado Green', hex: '#A6D498' },
      { name: 'Red', hex: '#C30F2A' }
    ],
    details: [
      'Sleeveless peplum silhouette',
      'Open-back tie detail',
      'Structured seam construction',
      'Lightweight comfortable fabric'
    ]
  }
];
