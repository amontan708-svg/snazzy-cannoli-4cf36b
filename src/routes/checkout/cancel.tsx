import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/cancel')({
  component: CheckoutCancel,
})

function CheckoutCancel() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 bg-[#1a1a1a] border border-[#333] rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
          ✕
        </div>
        <h1 className="text-3xl font-black mb-4">Comandă <span className="text-[#888]">Anulată</span></h1>
        <p className="text-[#888] leading-relaxed mb-8">
          Plata a fost anulată. Nu a fost reținută nicio sumă. Poți reveni oricând să finalizezi comanda.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3 border border-[#333] text-[#888] font-bold rounded hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
        >
          ← Înapoi la produse
        </Link>
      </div>
    </div>
  )
}
