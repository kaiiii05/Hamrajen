import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/mockData';
import type { Product } from '../types';
import { formatPrice } from '../lib/utils';
import { useApp } from '../context/AppContext';

function ProductTile({
  product,
  onAddToBag,
}: {
  product: Product;
  onAddToBag: (product: Product) => void;
}) {
  return (
    <div className="group flex flex-col border-r border-brand-gray-light last:border-r-0 p-8 min-h-[420px]">
      <div className="aspect-[3/4] mb-6 bg-[#F9F9F9] relative overflow-hidden flex items-center justify-center">
        <Link to={`/product/${product.id}`} className="w-full h-full">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-contain opacity-90 transition-transform duration-1000 group-hover:scale-110"
          />
        </Link>

        {product.category === 'new-arrivals' && (
          <div className="absolute top-4 left-4 bg-brand-gold text-white px-2 py-1 text-[8px] font-bold uppercase tracking-[1px] pointer-events-none">
            New
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow">
        <div className="mb-2 min-w-0">
          <Link to={`/product/${product.id}`} className="block hover:text-brand-gold transition-colors">
            <h3 className="text-[13px] font-medium tracking-tight line-clamp-2 leading-snug">{product.name}</h3>
          </Link>
          <p className="text-[12px] font-light text-gray-500 mt-2 tabular-nums">{formatPrice(product.price)}</p>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          {product.colors.slice(0, 3).map((c) => (
            <div
              key={c.name}
              className="w-2 h-2 rounded-full border border-gray-100 shadow-sm"
              style={{ backgroundColor: c.hex }}
            />
          ))}
          {product.colors.length > 3 && (
            <span className="text-[8px] text-gray-400">+{product.colors.length - 3}</span>
          )}
        </div>

        <button
          onClick={() => onAddToBag(product)}
          className="mt-auto text-[10px] uppercase tracking-[1px] text-brand-gold font-bold hover:text-brand-charcoal transition-colors text-left"
        >
          + Add to Bag
        </button>
      </div>
    </div>
  );
}

export default function Shop() {
  const { category } = useParams();
  const navigate = useNavigate();
  const { addToCart, user } = useApp();

  const handleAddToBag = (product: Product) => {
    if (!user) {
      navigate('/account?redirect=/shop');
      return;
    }
    addToCart(product, product.sizes[0], product.colors[0].name);
  };

  const categoryProducts = category ? PRODUCTS.filter((p) => p.category === category) : null;

  const categoryName = category
    ? category.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Shop';

  const womenProducts = PRODUCTS.filter((p) => p.category === 'women');
  const menProducts = PRODUCTS.filter((p) => p.category === 'men');

  const sectionLabels: Record<'men' | 'women', string> = {
    men: "Men's",
    women: "Women's",
  };

  return (
    <div className="bg-brand-beige min-h-screen">
      {/* Header */}
      <div className="px-10 py-16 border-b border-brand-gray-med bg-white">
        <div className="text-[10px] uppercase font-bold tracking-[2px] text-gray-400 mb-4 flex items-center space-x-2">
          <Link to="/" className="hover:text-brand-charcoal transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-charcoal">Shop</span>
          {category && (
            <>
              <span>/</span>
              <span className="text-brand-charcoal">{categoryName}</span>
            </>
          )}
        </div>
        <h1 className="text-6xl font-serif tracking-tight font-normal italic">{categoryName}</h1>
        {!category && (
          <p className="mt-4 text-sm text-gray-500 font-light max-w-lg">
            Browse by edit—women&apos;s and men&apos;s pieces are grouped separately below.
          </p>
        )}
      </div>

      {!category ? (
        <>
          <section aria-labelledby="shop-women-heading" className="border-b border-brand-gray-med bg-white">
            <div className="px-10 py-10 border-b border-brand-gray-light bg-brand-beige/40">
              <h2 id="shop-women-heading" className="text-[11px] uppercase font-bold tracking-[0.35em] text-brand-charcoal">
                {sectionLabels.women}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4">
              {womenProducts.map((product) => (
                <ProductTile key={product.id} product={product} onAddToBag={handleAddToBag} />
              ))}
            </div>
          </section>

          <section aria-labelledby="shop-men-heading" className="border-b border-brand-gray-med bg-white">
            <div className="px-10 py-10 border-b border-brand-gray-light bg-brand-beige/40">
              <h2 id="shop-men-heading" className="text-[11px] uppercase font-bold tracking-[0.35em] text-brand-charcoal">
                {sectionLabels.men}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4">
              {menProducts.map((product) => (
                <ProductTile key={product.id} product={product} onAddToBag={handleAddToBag} />
              ))}
            </div>
          </section>
        </>
      ) : (
        categoryProducts && (
          <div className="grid grid-cols-1 md:grid-cols-4 bg-white border-b border-brand-gray-med">
            {categoryProducts.map((product) => (
              <ProductTile key={product.id} product={product} onAddToBag={handleAddToBag} />
            ))}
          </div>
        )
      )}

      {category && categoryProducts && categoryProducts.length === 0 && (
        <div className="py-32 text-center">
          <p className="text-gray-400 uppercase text-xs tracking-widest font-light">
            No pieces found in this curation.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 border-b border-brand-charcoal pb-1 text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-brand-gold hover:border-brand-gold"
          >
            Back to Shop
          </Link>
        </div>
      )}
    </div>
  );
}
