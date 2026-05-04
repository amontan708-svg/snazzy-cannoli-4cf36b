import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  const team = [
    {
      initial: 'D',
      name: 'Dmitri P.',
      role: 'Fondator & Director Creativ',
      bio: 'Vizionarul din spatele MinePrut. Pasionat de modă, tehnologie și rădăcinile moldovenești.',
    },
    {
      initial: 'A',
      name: 'Ana M.',
      role: 'Designer Principal',
      bio: 'Combină arta cu știința pentru a crea piese care spun povești autentice.',
    },
    {
      initial: 'V',
      name: 'Vasile C.',
      role: 'Logistică & Operațiuni',
      bio: 'Asigură că fiecare comandă ajunge la timp și în perfectă stare.',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#c9a84c]/30 rounded-full text-[#c9a84c] text-xs font-medium tracking-widest uppercase mb-6">
          Povestea Noastră
        </div>
        <h1 className="text-5xl sm:text-6xl font-black mb-6">
          Despre <span className="text-[#c9a84c]">MinePrut</span>
        </h1>
        <p className="text-xl text-[#888] max-w-2xl mx-auto leading-relaxed">
          Un brand născut din pasiune, construit pe fundamente solide și inspirat de frumusețea Moldovei.
        </p>
      </div>

      {/* Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div>
          <h2 className="text-3xl font-black mb-6">
            Originea <span className="text-[#c9a84c]">Numelui</span>
          </h2>
          <div className="space-y-6 text-[#888] leading-relaxed">
            <p>
              <strong className="text-white">„Mine"</strong> — reprezintă viziunea personală, posesia visului, perspectiva unică pe care fiecare dintre noi o aducem în lume. Este declarația că aceasta este lumea noastră, visul nostru.
            </p>
            <p>
              <strong className="text-white">„Prut"</strong> — simbolizează conexiunea, rădăcinile și unirea ideilor. Râul Prut, granița și totodată legătura Moldovei cu lumea, este simbolul a ceea ce suntem: o punte între trecut și viitor, între local și global.
            </p>
            <p>
              Împreună, <strong className="text-[#c9a84c]">MinePrut</strong> este mai mult decât un brand de haine — este o declarație de identitate, un manifest al generației moldovenești care visează și construiește.
            </p>
          </div>
        </div>

        <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-8 flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-8">
            {[
              { number: '2024', label: 'Anul Fondării' },
              { number: '500+', label: 'Clienți Mulțumiți' },
              { number: '6', label: 'Produse în Colecție' },
              { number: '🇲🇩', label: 'Made in Moldova' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-black text-[#c9a84c] mb-1">{stat.number}</div>
                <div className="text-sm text-[#555]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="bg-gradient-to-r from-[#c9a84c]/10 to-transparent border border-[#c9a84c]/20 rounded-2xl p-8 mb-24">
        <h2 className="text-3xl font-black mb-4">
          Misiunea <span className="text-[#c9a84c]">Noastră</span>
        </h2>
        <p className="text-[#888] leading-relaxed max-w-3xl">
          Demonstrăm că în secolul 21, moda autentică nu poate exista fără tehnologie și calcule exacte. Combinăm pasiunea pentru streetwear cu rigoarea informaticii și matematicii — pentru că un vis personal, construit pe baze tehnice solide, devine realitate. MinePrut este dovada vie că poți transforma viziunea în business.
        </p>
        <blockquote className="mt-6 pl-4 border-l-2 border-[#c9a84c] text-[#f5f5f0] italic text-lg">
          „Matematica este creierul din spatele frumuseții. Codul este scheletul visului."
        </blockquote>
      </div>

      {/* Values */}
      <div className="mb-24">
        <h2 className="text-3xl font-black text-center mb-12">
          Valorile <span className="text-[#c9a84c]">Noastre</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: '⚡',
              title: 'Autenticitate',
              desc: 'Fiecare piesă reflectă identitatea noastră moldovenească fără compromisuri.',
            },
            {
              icon: '🔬',
              title: 'Precizie',
              desc: 'Calculăm totul — prețuri, mărimi, logistică — cu rigoarea matematicii.',
            },
            {
              icon: '🌿',
              title: 'Sustenabilitate',
              desc: 'Folosim materiale responsabile și procese de producție etice.',
            },
          ].map((val, i) => (
            <div key={i} className="bg-[#111] border border-[#1a1a1a] rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">{val.icon}</div>
              <h3 className="font-black text-lg mb-2">{val.title}</h3>
              <p className="text-[#888] text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div>
        <h2 className="text-3xl font-black text-center mb-12">
          Echipa <span className="text-[#c9a84c]">MinePrut</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div key={i} className="bg-[#111] border border-[#1a1a1a] rounded-xl p-6 text-center">
              <div className="w-20 h-20 bg-[#c9a84c] rounded-full flex items-center justify-center font-black text-black text-2xl mx-auto mb-4">
                {member.initial}
              </div>
              <h3 className="font-bold text-lg mb-1">{member.name}</h3>
              <div className="text-[#c9a84c] text-sm font-medium mb-3">{member.role}</div>
              <p className="text-[#888] text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
