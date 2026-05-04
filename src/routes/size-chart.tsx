import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/size-chart')({
  component: SizeChartPage,
})

const sizeData = [
  { size: 'XS', chest: '84–88', waist: '68–72', hip: '90–94', height: '158–162', weight: '50–55' },
  { size: 'S',  chest: '88–92', waist: '72–76', hip: '94–98', height: '163–167', weight: '56–63' },
  { size: 'M',  chest: '92–96', waist: '76–80', hip: '98–102', height: '168–172', weight: '64–71' },
  { size: 'L',  chest: '96–100', waist: '80–84', hip: '102–106', height: '173–177', weight: '72–80' },
  { size: 'XL', chest: '100–104', waist: '84–88', hip: '106–110', height: '178–182', weight: '81–90' },
  { size: 'XXL', chest: '104–110', waist: '88–94', hip: '110–116', height: '183–188', weight: '91–100' },
]

const pantsData = [
  { size: 'S',  waist: '72–76', hip: '94–98', inseam: '74', length: '98–100' },
  { size: 'M',  waist: '76–80', hip: '98–102', inseam: '76', length: '100–102' },
  { size: 'L',  waist: '80–84', hip: '102–106', inseam: '78', length: '102–104' },
  { size: 'XL', waist: '84–88', hip: '106–110', inseam: '80', length: '104–106' },
  { size: 'XXL', waist: '88–94', hip: '110–116', inseam: '82', length: '106–108' },
]

function SizeChartPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#c9a84c]/30 rounded-full text-[#c9a84c] text-xs font-medium tracking-widest uppercase mb-6">
          Ghid de Mărimi
        </div>
        <h1 className="text-4xl sm:text-5xl font-black mb-4">
          Tabel de <span className="text-[#c9a84c]">Mărimi</span>
        </h1>
        <p className="text-[#888] max-w-xl mx-auto">
          Toate măsurătorile sunt în centimetri (cm). Dacă ești între două mărimi, recomandăm să alegi mărimea mai mare pentru un fit confortabil.
        </p>
      </div>

      {/* How to measure */}
      <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-6 mb-10">
        <h2 className="font-black text-lg mb-4 text-[#c9a84c]">📏 Cum te Măsori Corect</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-[#888]">
          <div>
            <strong className="text-white block mb-1">Piept</strong>
            Măsoară în jurul celei mai late părți a pieptului, ținând banda orizontală sub brațe.
          </div>
          <div>
            <strong className="text-white block mb-1">Talie</strong>
            Măsoară în jurul celei mai înguste părți a taliei, de obicei la nivelul buricului.
          </div>
          <div>
            <strong className="text-white block mb-1">Șolduri</strong>
            Măsoară în jurul celei mai late părți a șoldurilor, de obicei la 20 cm sub talie.
          </div>
        </div>
      </div>

      {/* Tops table */}
      <div className="mb-12">
        <h2 className="text-2xl font-black mb-6">
          Tricouri, Hanorace & <span className="text-[#c9a84c]">Jachete</span>
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[#1a1a1a]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#c9a84c] text-black">
                {['Mărime', 'Piept (cm)', 'Talie (cm)', 'Șolduri (cm)', 'Înălțime (cm)', 'Greutate (kg)'].map(h => (
                  <th key={h} className="py-3 px-4 font-bold text-left">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sizeData.map((row, i) => (
                <tr
                  key={row.size}
                  className={`border-t border-[#1a1a1a] ${i % 2 === 0 ? 'bg-[#0a0a0a]' : 'bg-[#111]'} hover:bg-[#c9a84c]/5 transition-colors`}
                >
                  <td className="py-3 px-4 font-black text-[#c9a84c]">{row.size}</td>
                  <td className="py-3 px-4 text-[#888]">{row.chest}</td>
                  <td className="py-3 px-4 text-[#888]">{row.waist}</td>
                  <td className="py-3 px-4 text-[#888]">{row.hip}</td>
                  <td className="py-3 px-4 text-[#888]">{row.height}</td>
                  <td className="py-3 px-4 text-[#888]">{row.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pants table */}
      <div className="mb-12">
        <h2 className="text-2xl font-black mb-6">
          Pantaloni & <span className="text-[#c9a84c]">Trening</span>
        </h2>
        <div className="overflow-x-auto rounded-xl border border-[#1a1a1a]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#c9a84c] text-black">
                {['Mărime', 'Talie (cm)', 'Șolduri (cm)', 'Lungime interioară (cm)', 'Lungime totală (cm)'].map(h => (
                  <th key={h} className="py-3 px-4 font-bold text-left">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pantsData.map((row, i) => (
                <tr
                  key={row.size}
                  className={`border-t border-[#1a1a1a] ${i % 2 === 0 ? 'bg-[#0a0a0a]' : 'bg-[#111]'} hover:bg-[#c9a84c]/5 transition-colors`}
                >
                  <td className="py-3 px-4 font-black text-[#c9a84c]">{row.size}</td>
                  <td className="py-3 px-4 text-[#888]">{row.waist}</td>
                  <td className="py-3 px-4 text-[#888]">{row.hip}</td>
                  <td className="py-3 px-4 text-[#888]">{row.inseam}</td>
                  <td className="py-3 px-4 text-[#888]">{row.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Statistical note */}
      <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-6">
        <h3 className="font-black text-[#c9a84c] mb-3">📊 Nota Statistică — Stocurile Noastre</h3>
        <p className="text-[#888] text-sm leading-relaxed mb-4">
          Stocurile MinePrut sunt calculate pe baza distribuției statistice a mărimilor în rândul clienților moldovenești. Folosim media și deviația standard a înălțimii și greutății pentru a estima cererea.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[
            { size: 'XS', pct: '5%' },
            { size: 'S', pct: '18%' },
            { size: 'M', pct: '32%' },
            { size: 'L', pct: '28%' },
            { size: 'XL', pct: '12%' },
            { size: 'XXL', pct: '5%' },
          ].map(({ size, pct }) => (
            <div key={size} className="flex items-center justify-between bg-[#0a0a0a] rounded-lg px-3 py-2">
              <span className="font-bold text-[#c9a84c]">{size}</span>
              <span className="text-[#888]">{pct} din stoc</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#555] mt-3">
          * Distribuția se bazează pe datele antropometrice ale populației din Moldova (înălțime medie bărbați: 175cm, femei: 163cm).
        </p>
      </div>
    </div>
  )
}
