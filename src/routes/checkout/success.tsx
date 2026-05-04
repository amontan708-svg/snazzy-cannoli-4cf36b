import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/success')({
  component: CheckoutSuccess,
})

function CheckoutSuccess() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 bg-[#c9a84c] rounded-full flex items-center justify-center mx-auto mb-6 text-black font-black text-5xl">
          ✓
        </div>
        <h1 className="text-3xl font-black mb-4">
          Comandă <span className="text-[#c9a84c]">Confirmată!</span>
        </h1>
        <p className="text-[#888] leading-relaxed mb-8">
          Îți mulțumim pentru comanda la MinePrut! Vei primi un email de confirmare în curând, iar produsul tău va fi livrat în 2–5 zile lucrătoare.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#c9a84c] text-black font-bold rounded hover:bg-[#e8c97a] transition-colors"
        >
          ← Continuă cumpărăturile
        </Link>
      </div>
    </div>
  )
}
