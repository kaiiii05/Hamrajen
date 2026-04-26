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
  }
];
