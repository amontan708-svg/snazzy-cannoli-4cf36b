import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import products from '../../data/products'
import { BuyButton } from '@/components/BuyButton'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = products.find((p) => p.id === +params.productId)
    if (!product) throw new Error('Produs negăsit')
    return product
  },
})

function RouteComponent() {
  const product = Route.useLoaderData()
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  const related = products.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#555] mb-8">
        <Link to="/" className="hover:text-[#c9a84c] transition-colors">
          Produse
        </Link>
        <span>/</span>
        <span className="text-[#c9a84c]">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#111]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[#c9a84c] text-black text-xs font-bold rounded-full">
              {product.category}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-black mb-4">{product.name}</h1>
          <p className="text-[#888] leading-relaxed mb-6">{product.description}</p>

          {/* Price */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl font-black text-[#c9a84c]">
              {product.price.toLocaleString('ro-MD')} MDL
            </span>
            <span className="text-sm text-[#555]">
              (~{Math.round(product.price / 19)} EUR)
            </span>
          </div>

          {/* Sizes */}
          {product.sizes.length > 1 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-sm uppercase tracking-wider text-[#888]">
                  Selectează Mărimea
                </h3>
                <Link
                  to="/size-chart"
                  className="text-xs text-[#c9a84c] hover:underline"
                >
                  Ghid mărimi →
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-10 rounded border text-sm font-bold transition-colors ${
                      selectedSize === size
                        ? 'border-[#c9a84c] bg-[#c9a84c] text-black'
                        : 'border-[#333] text-[#888] hover:border-[#c9a84c] hover:text-[#c9a84c]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="text-xs text-[#555] mt-2">
                  * Selectează o mărime pentru a continua comanda.
                </p>
              )}
            </div>
          )}

          {/* Buy button */}
          <div className={`flex flex-col gap-3 ${product.sizes.length > 1 && !selectedSize ? 'opacity-60' : ''}`}>
            <BuyButton
              productId={product.id}
              className="w-full py-4 text-base font-bold bg-[#c9a84c] text-black border-[#c9a84c] hover:bg-[#e8c97a] rounded-xl"
            />
            <p className="text-xs text-[#555] text-center">
              🔒 Plată securizată prin Stripe · Livrare 2-5 zile
            </p>
          </div>

          {/* Details */}
          <div className="mt-8 pt-8 border-t border-[#1a1a1a] grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-[#555] block mb-1">Livrare</span>
              <span className="font-medium">2-5 zile lucrătoare</span>
            </div>
            <div>
              <span className="text-[#555] block mb-1">Retur</span>
              <span className="font-medium">14 zile</span>
            </div>
            <div>
              <span className="text-[#555] block mb-1">Origine</span>
              <span className="font-medium">🇲🇩 Moldova</span>
            </div>
            <div>
              <span className="text-[#555] block mb-1">Monedă</span>
              <span className="font-medium">MDL (Lei Moldovenești)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-black mb-8">
            Produse <span className="text-[#c9a84c]">Similare</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                to="/products/$productId"
                params={{ productId: p.id.toString() }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-xl bg-[#111] mb-3 group-hover:opacity-80 transition-opacity">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="font-bold group-hover:text-[#c9a84c] transition-colors">{p.name}</div>
                <div className="text-[#c9a84c] font-black">{p.price.toLocaleString('ro-MD')} MDL</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
