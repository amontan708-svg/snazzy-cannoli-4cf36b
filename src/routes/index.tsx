import { Link, createFileRoute } from '@tanstack/react-router'
import products from '@/data/products'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const quotes = [
  {
    text: 'Moda este armura pentru a supraviețui realității de zi cu zi.',
    author: 'Bill Cunningham',
  },
  {
    text: 'Nu contează ce porți, contează cum îl porți.',
    author: 'Coco Chanel',
  },
  {
    text: 'Stilul tău este mesajul tău. Îmbracă-te conform viziunii tale.',
    author: 'MinePrut',
  },
  {
    text: 'Succesul nu vine din ceea ce faci ocazional, ci din ceea ce faci constant.',
    author: 'Marie Forleo',
  },
]

const reviews = [
  {
    name: 'Alexandru M.',
    rating: 5,
    text: 'Am luat hoodie-ul Essential și sunt complet impresionat! Calitatea materialului este excepțională, iar fitrul oversized este exact cum voiam. Livrat rapid, ambalaj îngrijit. 10/10 recomand!',
    date: 'Noiembrie 2024',
    product: 'MinePrut Essential Hoodie',
  },
  {
    name: 'Diana P.',
    rating: 5,
    text: 'Tricoul Logo Tee este pur și simplu superb. Printul este detaliat și nu s-a deformat după spălare. Brandul are un vibe autentic și unic în Moldova. Aștept cu nerăbdare noile colecții!',
    date: 'Octombrie 2024',
    product: 'Logo Tee — Ediție Limitată',
  },
  {
    name: 'Mihai C.',
    rating: 5,
    text: 'Cargo pantalonii sunt bomba! 6 buzunare, material solid, finisaje curate. Am primit tone de complimente când i-am purtat în oraș. MinePrut chiar știe ce face!',
    date: 'Octombrie 2024',
    product: 'Cargo Pants — Street Edition',
  },
  {
    name: 'Cristina R.',
    rating: 4,
    text: 'Snapback-ul este drăguț și se potrivește bine. Broderia este curată și detaliată. Aș vrea mai multe culori disponibile, dar în rest sunt super mulțumită de achiziție!',
    date: 'Septembrie 2024',
    product: 'MinePrut Snapback Cap',
  },
]

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-[#c9a84c]' : 'text-[#333]'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 49px,
              #c9a84c 49px,
              #c9a84c 50px
            ), repeating-linear-gradient(
              90deg,
              transparent,
              transparent 49px,
              #c9a84c 49px,
              #c9a84c 50px
            )`,
          }}
        />
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#c9a84c]/30 rounded-full text-[#c9a84c] text-xs font-medium tracking-widest uppercase mb-8">
            🇲🇩 Streetwear Moldova
          </div>
          <h1 className="text-6xl sm:text-8xl font-black tracking-tight mb-6 leading-none">
            Mine<span className="text-[#c9a84c]">Prut</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#888] max-w-2xl mx-auto leading-relaxed mb-10">
            Unde viziunea personală întâlnește rădăcinile. Streetwear autentic creat în Moldova, pentru cei care îndrăznesc să viseze.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="px-8 py-3 bg-[#c9a84c] text-black font-bold rounded hover:bg-[#e8c97a] transition-colors"
            >
              Descoperă Colecția
            </a>
            <Link
              to="/about"
              className="px-8 py-3 border border-[#333] text-[#888] font-medium rounded hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
            >
              Povestea Noastră →
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-[#c9a84c] py-3 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap">
          {Array(8).fill('MINEPRUT · STREETWEAR · MOLDOVA · MINE × PRUT · VISAT ÎN MD · ').map((text, i) => (
            <span key={i} className="text-black font-black text-sm tracking-widest mr-8">{text}</span>
          ))}
        </div>
      </div>

      {/* Quotes */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <div key={i} className="quote-card pl-6 py-4">
              <blockquote className="text-lg font-medium text-[#f5f5f0] italic mb-2">
                "{q.text}"
              </blockquote>
              <cite className="text-sm text-[#c9a84c] not-italic font-semibold">— {q.author}</cite>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-12 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Colecția <span className="text-[#c9a84c]">2024</span>
          </h2>
          <p className="text-[#888] max-w-xl mx-auto">
            Fiecare piesă este concepută cu atenție la detalii. Materiale premium, croieli moderne, identitate autentică.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to="/products/$productId"
              params={{ productId: product.id.toString() }}
              className="product-card group block"
            >
              <div className="relative overflow-hidden rounded-xl bg-[#111] border border-[#1a1a1a] group-hover:border-[#c9a84c]/40 transition-colors">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-[#c9a84c] text-black text-xs font-bold rounded">
                    {product.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-[#c9a84c] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[#888] text-sm mb-4 line-clamp-2">{product.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#c9a84c]">
                      {product.price.toLocaleString('ro-MD')} MDL
                    </span>
                    <span className="text-xs text-[#555] border border-[#333] px-2 py-1 rounded">
                      Vezi Detalii →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-[#111] mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">
              Ce Spun <span className="text-[#c9a84c]">Clienții Noștri</span>
            </h2>
            <p className="text-[#888]">Recenzii reale de la comunitatea MinePrut</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#c9a84c] rounded-full flex items-center justify-center font-black text-black text-sm">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{review.name}</div>
                      <div className="text-[#555] text-xs">{review.date}</div>
                    </div>
                  </div>
                  <Stars rating={review.rating} />
                </div>
                <p className="text-[#888] text-sm leading-relaxed mb-3">"{review.text}"</p>
                <div className="text-xs text-[#c9a84c]/70 font-medium">
                  Produs: {review.product}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#c9a84c] text-[#c9a84c] font-bold rounded hover:bg-[#c9a84c] hover:text-black transition-colors"
            >
              Alătură-te comunității →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
