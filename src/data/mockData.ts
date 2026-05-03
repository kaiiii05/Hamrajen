import { Product } from '../types';
import womenWhite from '../assets/women/white.jpg';
import womenApricot from '../assets/women/apricot.jpg';
import womenDarkGreen from '../assets/women/dark-green.jpg';
import womenKhaki from '../assets/women/khaki.jpg';
import womenBlack from '../assets/women/black.jpg';
import womenBrown from '../assets/women/brown.jpg';
import womenBlue from '../assets/women/blue.jpg';
import peplumMocha from '../assets/women-peplum/mocha.jpg';
import peplumTaupeBrown from '../assets/women-peplum/taupe-brown.jpg';
import peplumMauve from '../assets/women-peplum/mauve.jpg';
import peplumOldrose from '../assets/women-peplum/oldrose.jpg';
import peplumAvocadoGreen from '../assets/women-peplum/avocado-green.jpg';
import peplumRed from '../assets/women-peplum/red.jpg';
import menAshGray from '../assets/men-polo/ash-gray.jpg';
import menWhite from '../assets/men-polo/white.jpg';
import menSageGreen from '../assets/men-polo/sage-green.jpg';
import menBlack from '../assets/men-polo/black.jpg';
import menDarkGray from '../assets/men-polo/dark-gray.jpg';
import menChocoBrown from '../assets/men-polo/choco-brown.jpg';
import menTexturedBlack from '../assets/men-textured-tee/black.jpg';
import menTexturedBeige from '../assets/men-textured-tee/beige.jpg';
import menTexturedKhaki from '../assets/men-textured-tee/khaki.jpg';
import menTexturedGray from '../assets/men-textured-tee/gray.jpg';
import menTexturedWhite from '../assets/men-textured-tee/white.jpg';
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
import floralVneckBlue from '../assets/women-floral-vneck-lace-dress/blue.jpg';
import floralVneckWhite from '../assets/women-floral-vneck-lace-dress/white.jpg';
import floralVneckYellow from '../assets/women-floral-vneck-lace-dress/yellow.jpg';
import infinityVelourBlack from '../assets/men-infinity-velour-tee/black.jpg';
import infinityVelourCream from '../assets/men-infinity-velour-tee/cream.jpg';
import infinityVelourDarkBlue from '../assets/men-infinity-velour-tee/dark-blue.jpg';
import infinityVelourGray from '../assets/men-infinity-velour-tee/gray.jpg';
import infinityVelourMustard from '../assets/men-infinity-velour-tee/mustard.jpg';
import infinityVelourSkyBlue from '../assets/men-infinity-velour-tee/sky-blue.jpg';
import knittedVestBlack from '../assets/women-knitted-breasted-vest/black.jpg';
import knittedVestBrown from '../assets/women-knitted-breasted-vest/brown.jpg';
import knittedVestCamel from '../assets/women-knitted-breasted-vest/camel.jpg';
import knittedVestWhite from '../assets/women-knitted-breasted-vest/white.jpg';
import roundNeckTankBlack from '../assets/women-round-neck-tank/black.jpg';
import roundNeckTankGray from '../assets/women-round-neck-tank/gray.jpg';
import roundNeckTankRoseRed from '../assets/women-round-neck-tank/rose-red.jpg';
import roundNeckTankWhite from '../assets/women-round-neck-tank/white.jpg';
import stripeKnitBeige from '../assets/women-stripe-knitted-top/beige.jpg';
import stripeKnitBlack from '../assets/women-stripe-knitted-top/black.jpg';
import stripeKnitWhite from '../assets/women-stripe-knitted-top/white.jpg';
import summerDressWhite from '../assets/women-casual-summer-dress/white.jpg';
import summerDressDetail from '../assets/women-casual-summer-dress/detail.jpg';
import summerDressDetail1 from '../assets/women-casual-summer-dress/detail-1.jpg';
import summerDressDetail2 from '../assets/women-casual-summer-dress/detail-2.jpg';

/**
 * All `price` values are Philippine pesos (PHP).
 * HARMAJEN folders name each piece with its list price (e.g. `Chinese Collar Polo for Men -$188` → **188** pesos).
 * If the folder number is USD (e.g. $188) rather than pesos, set `FOLDER_LIST_PRICE_TO_PHP` to your PHP-per-USD rate (e.g. `56`).
 */
const FOLDER_LIST_PRICE_TO_PHP = 1;

export const PRODUCTS: Product[] = [
  {
    id: 'p2',
    name: 'Relaxed Camp Collar Blouse',
    description: 'A clean short-sleeve blouse with a relaxed drape and open camp collar. Built for breathable everyday wear with a polished silhouette.',
    price: 210 * FOLDER_LIST_PRICE_TO_PHP,
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
    price: 150 * FOLDER_LIST_PRICE_TO_PHP,
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
    price: 175 * FOLDER_LIST_PRICE_TO_PHP,
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
    price: 170 * FOLDER_LIST_PRICE_TO_PHP,
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
    price: 188 * FOLDER_LIST_PRICE_TO_PHP,
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
    price: 200 * FOLDER_LIST_PRICE_TO_PHP,
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
  },
  {
    id: 'p12',
    name: 'Floral V-Neck Lace Dress',
    description:
      'An airy lace dress with a flattering V-neck and scattered floral motif. Layer-ready for occasions that call for soft romance and movement.',
    price: 410 * FOLDER_LIST_PRICE_TO_PHP,
    category: 'women',
    images: [floralVneckBlue, floralVneckWhite, floralVneckYellow],
    colorImages: {
      Blue: floralVneckBlue,
      White: floralVneckWhite,
      Yellow: floralVneckYellow,
    },
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Blue', hex: '#6B8C9E' },
      { name: 'White', hex: '#FAF8F5' },
      { name: 'Yellow', hex: '#E6D089' },
    ],
    details: [
      'Delicate lace overlay',
      'V-neckline',
      'Floral pattern',
      'Lightweight lined comfort',
    ],
  },
  {
    id: 'p13',
    name: 'Infinity Velour T-Shirt for Men',
    description:
      'A plush velour tee with a rich handfeel and relaxed drape. Easy polish for off-duty days and evening layers.',
    price: 140 * FOLDER_LIST_PRICE_TO_PHP,
    category: 'men',
    images: [
      infinityVelourBlack,
      infinityVelourCream,
      infinityVelourDarkBlue,
      infinityVelourGray,
      infinityVelourMustard,
      infinityVelourSkyBlue,
    ],
    colorImages: {
      Black: infinityVelourBlack,
      Cream: infinityVelourCream,
      'Dark Blue': infinityVelourDarkBlue,
      Gray: infinityVelourGray,
      Mustard: infinityVelourMustard,
      'Sky Blue': infinityVelourSkyBlue,
    },
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Cream', hex: '#EDE6D8' },
      { name: 'Dark Blue', hex: '#2C3A52' },
      { name: 'Gray', hex: '#9A9A9A' },
      { name: 'Mustard', hex: '#C4A035' },
      { name: 'Sky Blue', hex: '#9EC5DC' },
    ],
    details: [
      'Soft velour finish',
      'Crew neck short sleeves',
      'Breathable easy stretch',
      'Regular relaxed fit',
    ],
  },
  {
    id: 'p14',
    name: 'Knitted Breasted Vest for Women',
    description:
      'A tailored knit vest with a buttoned front and clean lines. Ideal over blouses or on its own for a modern layered look.',
    price: 170 * FOLDER_LIST_PRICE_TO_PHP,
    category: 'women',
    images: [knittedVestBlack, knittedVestBrown, knittedVestCamel, knittedVestWhite],
    colorImages: {
      Black: knittedVestBlack,
      Brown: knittedVestBrown,
      Camel: knittedVestCamel,
      White: knittedVestWhite,
    },
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Brown', hex: '#5C4033' },
      { name: 'Camel', hex: '#C4A574' },
      { name: 'White', hex: '#FFFFFF' },
    ],
    details: [
      'Fine-gauge knit',
      'Breasted button front',
      'Sleeveless vest silhouette',
      'Structured yet soft',
    ],
  },
  {
    id: 'p15',
    name: 'Round Neck Tank Top for Women',
    description:
      'A minimal round-neck tank in a smooth knit—your everyday base layer or solo top for warm weather.',
    price: 64 * FOLDER_LIST_PRICE_TO_PHP,
    category: 'women',
    images: [roundNeckTankBlack, roundNeckTankGray, roundNeckTankRoseRed, roundNeckTankWhite],
    colorImages: {
      Black: roundNeckTankBlack,
      Gray: roundNeckTankGray,
      'Rose Red': roundNeckTankRoseRed,
      White: roundNeckTankWhite,
    },
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Gray', hex: '#B0B0B0' },
      { name: 'Rose Red', hex: '#C75D6B' },
      { name: 'White', hex: '#FFFFFF' },
    ],
    details: [
      'Classic round neckline',
      'Sleeveless tank cut',
      'Soft stretch knit',
      'Easy layering essential',
    ],
  },
  {
    id: 'p16',
    name: 'Stripe Knitted Top for Women',
    description:
      'A striped knit top with a refined nautical rhythm. Light structure for workdays and weekends alike.',
    price: 128 * FOLDER_LIST_PRICE_TO_PHP,
    category: 'women',
    images: [stripeKnitBeige, stripeKnitBlack, stripeKnitWhite],
    colorImages: {
      Beige: stripeKnitBeige,
      Black: stripeKnitBlack,
      White: stripeKnitWhite,
    },
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Beige', hex: '#D9CFC0' },
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#FFFFFF' },
    ],
    details: [
      'Stripe knit pattern',
      'Soft breathable yarn',
      'Clean casual silhouette',
      'Easy pairing with denim or skirts',
    ],
  },
  {
    id: 'p17',
    name: 'Casual Summer Dress',
    description:
      'An easy summer dress in a clean white palette—effortless with sandals or sneakers. Detail shots highlight texture and finishing.',
    price: 375 * FOLDER_LIST_PRICE_TO_PHP,
    category: 'women',
    images: [summerDressWhite, summerDressDetail, summerDressDetail1, summerDressDetail2],
    colorImages: {
      White: summerDressWhite,
    },
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [{ name: 'White', hex: '#FFFFFF' }],
    details: [
      'Light summer-weight fabric',
      'Relaxed casual silhouette',
      'Versatile day-to-evening',
      'See gallery for construction details',
    ],
  },
];
