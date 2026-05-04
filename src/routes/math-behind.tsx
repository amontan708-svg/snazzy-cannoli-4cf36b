import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/math-behind')({
  component: MathBehindPage,
})

function MathBehindPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#c9a84c]/30 rounded-full text-[#c9a84c] text-xs font-medium tracking-widest uppercase mb-6">
          Documentație Tehnică
        </div>
        <h1 className="text-4xl sm:text-5xl font-black mb-6">
          The Math <span className="text-[#c9a84c]">Behind</span>
        </h1>
        <p className="text-[#888] max-w-2xl mx-auto leading-relaxed">
          MinePrut demonstrează că matematica și informatica sunt fundamentul oricărei afaceri moderne. Iată cum folosim cifrele pentru a construi un brand solid.
        </p>
      </div>

      {/* Section 1: Golden Ratio */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#c9a84c] rounded-lg flex items-center justify-center font-black text-black text-lg">
            φ
          </div>
          <h2 className="text-2xl font-black">1. Geometria Designului</h2>
        </div>

        <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-[#c9a84c] mb-4">Proporția de Aur (Golden Ratio)</h3>
          <div className="font-mono bg-[#0a0a0a] rounded-lg p-4 text-center text-2xl text-[#c9a84c] mb-4 border border-[#222]">
            φ = (1 + √5) / 2 ≈ 1.618
          </div>
          <p className="text-[#888] leading-relaxed mb-4">
            Proporția de Aur este regăsită în natură, artă și arhitectură. MinePrut utilizează această proporție pentru a crea un layout vizual echilibrat:
          </p>
          <ul className="space-y-2 text-[#888] text-sm">
            <li className="flex items-start gap-2">
              <span className="text-[#c9a84c] mt-0.5">→</span>
              <span>
                <strong className="text-white">Layout pagină principală:</strong> Raportul dintre lățimea imaginii produsului și secțiunea de detalii este 60% / 40% — o aproximare a φ. Dacă împarți 60 la 40, obții 1.5, aproape de 1.618.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c9a84c] mt-0.5">→</span>
              <span>
                <strong className="text-white">Tipografie:</strong> Raportul dintre mărimea titlului (48px) și textul corpului (18px) ≈ 2.67, un multiplu al φ².
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c9a84c] mt-0.5">→</span>
              <span>
                <strong className="text-white">Logo MinePrut:</strong> Dreptunghiul din jurul logo-ului are raportul lățime/înălțime = φ ≈ 1.618 (simetrie axială pe axa verticală).
              </span>
            </li>
          </ul>
        </div>

        {/* Visual golden ratio demo */}
        <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-6">
          <h3 className="font-bold text-[#c9a84c] mb-4">Demonstrație vizuală: Dreptunghi de Aur</h3>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div
              className="border-2 border-[#c9a84c] rounded"
              style={{ width: '161.8px', height: '100px', position: 'relative' }}
            >
              <div
                className="border-2 border-[#e8c97a]/50 rounded absolute right-0"
                style={{ width: '61.8px', height: '100px' }}
              />
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 text-[#c9a84c] text-xs font-bold">φ</div>
            </div>
          </div>
          <p className="text-[#555] text-xs text-center">
            Dreptunghiul mare (161.8 × 100) conține un dreptunghi mic de aur (61.8 × 100). Raportul 161.8/100 = φ.
          </p>
        </div>
      </section>

      {/* Section 2: Pricing */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#c9a84c] rounded-lg flex items-center justify-center font-black text-black text-lg">
            Σ
          </div>
          <h2 className="text-2xl font-black">2. Algoritmi de Business & Logistică</h2>
        </div>

        <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-[#c9a84c] mb-4">Formula de Preț</h3>
          <div className="font-mono bg-[#0a0a0a] rounded-lg p-4 text-center border border-[#222] mb-4">
            <div className="text-[#c9a84c] text-lg mb-2">
              Preț = (C<sub>unitate</sub> + C<sub>transport</sub> × kg + Taxe) × Marjă
            </div>
            <div className="text-[#555] text-sm mt-2">unde Marjă ∈ [1.4, 2.0] (40%–100% profit)</div>
          </div>

          <h4 className="font-bold text-white mb-3">Exemplu concret — MinePrut Essential Hoodie:</h4>
          <div className="space-y-2 text-sm font-mono">
            {[
              { label: 'Cost unitate (material + producție)', value: '220 MDL', color: 'text-[#888]' },
              { label: 'Cost transport (0.8 kg × 40 MDL/kg)', value: '32 MDL', color: 'text-[#888]' },
              { label: 'Taxe vamale & TVA (15%)', value: '38 MDL', color: 'text-[#888]' },
              { label: 'Cost total', value: '290 MDL', color: 'text-white font-bold' },
              { label: 'Marjă de profit (2.38×)', value: '× 2.38', color: 'text-[#c9a84c]' },
              { label: 'PREȚ FINAL', value: '690 MDL ✓', color: 'text-[#c9a84c] font-black text-base' },
            ].map((row, i) => (
              <div key={i} className={`flex justify-between py-1.5 px-3 rounded ${i === 5 ? 'bg-[#c9a84c]/10 border border-[#c9a84c]/20' : ''}`}>
                <span className="text-[#555]">{row.label}</span>
                <span className={row.color}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-6">
          <h3 className="font-bold text-[#c9a84c] mb-4">Statistică Stocuri — Distribuție Normală</h3>
          <p className="text-[#888] text-sm mb-4">
            Folosim distribuția normală (Gauss) pentru a estima cererea pe mărimi. Dacă populația are înălțimea medie μ = 175cm și deviația standard σ = 8cm:
          </p>
          <div className="font-mono bg-[#0a0a0a] rounded-lg p-4 text-center border border-[#222] mb-4">
            <div className="text-[#c9a84c]">
              P(x) = (1 / σ√2π) × e<sup>-½((x-μ)/σ)²</sup>
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {[
              { size: 'XS', pct: 5 },
              { size: 'S', pct: 18 },
              { size: 'M', pct: 32 },
              { size: 'L', pct: 28 },
              { size: 'XL', pct: 12 },
              { size: 'XXL', pct: 5 },
            ].map(({ size, pct }) => (
              <div key={size} className="text-center">
                <div
                  className="bg-[#c9a84c] rounded-t mx-auto"
                  style={{ width: '40px', height: `${pct * 2.5}px` }}
                />
                <div className="text-xs font-bold text-[#c9a84c] mt-1">{size}</div>
                <div className="text-xs text-[#555]">{pct}%</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#555] mt-4 text-center">
            Grafic distribuție cerere estimată pe mărimi (bara = % din stoc comandat)
          </p>
        </div>
      </section>

      {/* Section 3: Logic */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#c9a84c] rounded-lg flex items-center justify-center font-black text-black text-lg">
            {'</>'}
          </div>
          <h2 className="text-2xl font-black">3. Logica Programării</h2>
        </div>

        <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-[#c9a84c] mb-4">Site-ul ca Set de Algoritmi</h3>
          <p className="text-[#888] text-sm mb-6">
            Un website nu este altceva decât o colecție de instrucțiuni logice. Fiecare interacțiune a utilizatorului urmează un algoritm precis:
          </p>
          <div className="space-y-3 font-mono text-sm">
            {[
              { trigger: 'DACĂ utilizatorul apasă „Cumpără Acum"', action: 'ATUNCI se inițiază sesiunea Stripe Checkout' },
              { trigger: 'DACĂ mărimea selectată = null', action: 'ATUNCI butonul „Cumpără" este dezactivat (opacity: 60%)' },
              { trigger: 'DACĂ plata = SUCCESS', action: 'ATUNCI se redirecționează către /checkout/success' },
              { trigger: 'DACĂ formularul de înregistrare este complet', action: 'ATUNCI datele sunt trimise la Netlify Forms' },
              { trigger: 'DACĂ meniul mobil este deschis și utilizatorul apasă un link', action: 'ATUNCI meniul se închide automat' },
            ].map((item, i) => (
              <div key={i} className="bg-[#0a0a0a] rounded-lg p-3 border border-[#222]">
                <div className="text-[#c9a84c]">{item.trigger}</div>
                <div className="text-[#888] mt-1 pl-4">→ {item.action}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-6">
          <h3 className="font-bold text-[#c9a84c] mb-4">Stack Tehnologic MinePrut</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              { tech: 'TanStack Start', role: 'Framework full-stack React' },
              { tech: 'TypeScript', role: 'Tip-siguranță și rigoare' },
              { tech: 'Tailwind CSS 4', role: 'Stilizare rapidă și responsive' },
              { tech: 'Netlify', role: 'Hosting & Forms & CDN' },
              { tech: 'Stripe', role: 'Procesare plăți securizate' },
              { tech: 'Vite 7', role: 'Build tool ultrarapid' },
            ].map(({ tech, role }) => (
              <div key={tech} className="bg-[#0a0a0a] rounded-lg p-3 border border-[#222] flex items-center gap-3">
                <div className="w-2 h-2 bg-[#c9a84c] rounded-full flex-shrink-0" />
                <div>
                  <div className="font-bold text-white">{tech}</div>
                  <div className="text-[#555] text-xs">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <div className="bg-gradient-to-r from-[#c9a84c]/10 to-transparent border border-[#c9a84c]/20 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-black mb-4">
          Concluzie: <span className="text-[#c9a84c]">Moda + Matematică + Cod</span>
        </h2>
        <p className="text-[#888] leading-relaxed max-w-2xl mx-auto">
          MinePrut demonstrează că un brand de fashion de succes în secolul 21 nu poate exista fără tehnologie și matematică. Proporția de aur creează frumusețea vizuală, formulele de preț asigură profitabilitatea, statisticile optimizează stocul, iar codul face totul posibil. Visul personal + baze tehnice solide = afacere reală.
        </p>
        <div className="mt-6 font-mono text-[#c9a84c] text-lg font-bold">
          Success = Dream × (Math + Code)²
        </div>
      </div>
    </div>
  )
}
