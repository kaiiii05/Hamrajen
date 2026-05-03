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
import menAshGray from '../assets/men-polo/ash-gray.png';
import menWhite from '../assets/men-polo/white.png';
import menSageGreen from '../assets/men-polo/sage-green.png';
import menBlack from '../assets/men-polo/black.png';
import menDarkGray from '../assets/men-polo/dark-gray.png';
import menChocoBrown from '../assets/men-polo/choco-brown.png';
import menTexturedBlack from '../assets/men-textured-tee/black.png';
import menTexturedBeige from '../assets/men-textured-tee/beige.png';
import menTexturedKhaki from '../assets/men-textured-tee/khaki.png';
import menTexturedGray from '../assets/men-textured-tee/gray.png';
import menTexturedWhite from '../assets/men-textured-tee/white.png';
import chineseCollarBeige from '../assets/men-chinese-collar-polo/beige.jpg';
import chineseCollarBlack from '../assets/men-chinese-collar-polo/black.jpg';
import chineseCollarBrown from '../assets/men-chinese-collar-polo/brown.jpg';
import chineseCollarNavyBlue from '../assets/men-chinese-collar-polo/navy-blue.jpg';
import chineseCollarWhite from '../assets/men-chinese-collar-polo/white.jpg';
import cubanCollarBlack from '../assets/men-cuban-collar-polo/black.jpg';
import cubanCollarCream from '../assets/men-cuban-collar-polo/cream.jpg';
import cubanCollarPink from '../assets/men-cuban-collar-polo/pink.jpg';
import cubanCollarWhite from '../assets/men-cuban-collar-polo/white.jpg';
import cubanCollarYellow from '../assets/men-cuban-collar-polo/yellow.jpg';

export const PRODUCTS: Product[] = [
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
  },
  {
    id: 'p8',
    name: 'Polo T-Shirt Waffle Fabric Comfortable Suit',
    description: 'A textured waffle-knit polo t-shirt with a clean modern cut and breathable comfort for daily wear.',
    price: 2100,
    category: 'men',
    images: [
      menAshGray,
      menWhite,
      menSageGreen,
      menBlack,
      menDarkGray,
      menChocoBrown
    ],
    colorImages: {
      'Ash Gray': menAshGray,
      White: menWhite,
      'Sage Green': menSageGreen,
      Black: menBlack,
      'Dark Gray': menDarkGray,
      'Choco Brown': menChocoBrown
    },
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Ash Gray', hex: '#CFD3D3' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Sage Green', hex: '#A9BE9E' },
      { name: 'Black', hex: '#000000' },
      { name: 'Dark Gray', hex: '#5B5B5D' },
      { name: 'Choco Brown', hex: '#5B331A' }
    ],
    details: [
      'Waffle textured knit',
      'Soft and breathable fabric',
      'Classic polo collar',
      'Comfortable regular fit'
    ]
  },
  {
    id: 'p9',
    name: 'Premium Textured Casual Short Sleeve T-Shirt For Men',
    description: 'A premium short-sleeve textured tee with a clean silhouette and soft handfeel for elevated everyday wear.',
    price: 1950,
    category: 'men',
    images: [
      menTexturedBlack,
      menTexturedBeige,
      menTexturedKhaki,
      menTexturedGray,
      menTexturedWhite
    ],
    colorImages: {
      Black: menTexturedBlack,
      Beige: menTexturedBeige,
      Khaki: menTexturedKhaki,
      Gray: menTexturedGray,
      White: menTexturedWhite
    },
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Beige', hex: '#E9DFC9' },
      { name: 'Khaki', hex: '#CBB182' },
      { name: 'Gray', hex: '#C4C8CC' },
      { name: 'White', hex: '#FFFFFF' }
    ],
    details: [
      'Premium textured fabric',
      'Short-sleeve crew neck design',
      'Breathable and lightweight',
      'Comfortable regular fit'
    ]
  },
  {
    id: 'p10',
    name: 'Chinese Collar Polo for Men',
    description:
      'A refined short-sleeve polo with a standing Chinese collar and a clean three-button placket. Lightweight fabric for sharp everyday dressing.',
    price: 10500,
    category: 'men',
    images: [
      chineseCollarBeige,
      chineseCollarBlack,
      chineseCollarBrown,
      chineseCollarNavyBlue,
      chineseCollarWhite
    ],
    colorImages: {
      Beige: chineseCollarBeige,
      Black: chineseCollarBlack,
      Brown: chineseCollarBrown,
      'Navy Blue': chineseCollarNavyBlue,
      White: chineseCollarWhite
    },
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Beige', hex: '#D4C4B0' },
      { name: 'Black', hex: '#000000' },
      { name: 'Brown', hex: '#6B4E3D' },
      { name: 'Navy Blue', hex: '#1E2A44' },
      { name: 'White', hex: '#FFFFFF' }
    ],
    details: [
      'Distinctive Chinese / mandarin collar',
      'Three-button front placket',
      'Soft breathable knit',
      'Tailored casual fit'
    ]
  },
  {
    id: 'p11',
    name: 'Cuban Collar Polo Shirt',
    description:
      'A relaxed short-sleeve polo with an open Cuban camp collar and a laid-back vacation silhouette. Easy fabric for warm days and weekend wear.',
    price: 11200,
    category: 'men',
    images: [
      cubanCollarBlack,
      cubanCollarCream,
      cubanCollarPink,
      cubanCollarWhite,
      cubanCollarYellow
    ],
    colorImages: {
      Black: cubanCollarBlack,
      Cream: cubanCollarCream,
      Pink: cubanCollarPink,
      White: cubanCollarWhite,
      Yellow: cubanCollarYellow
    },
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Cream', hex: '#F2EBDD' },
      { name: 'Pink', hex: '#E8B4B8' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Yellow', hex: '#E8C96A' }
    ],
    details: [
      'Classic Cuban / camp collar',
      'Short-sleeve polo construction',
      'Lightweight breathable fabric',
      'Relaxed casual fit'
    ]
  }
];
