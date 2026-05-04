import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/register')({
  component: RegisterPage,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function RegisterPage() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    size: '',
    interests: '',
    newsletter: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/register-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'register', ...fields }),
      })
      setSubmitted(true)
    } catch (err) {
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-[#c9a84c] rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
            ✓
          </div>
          <h2 className="text-3xl font-black mb-4">
            Bine ai venit în <span className="text-[#c9a84c]">familia MinePrut!</span>
          </h2>
          <p className="text-[#888] leading-relaxed mb-8">
            Înregistrarea ta a fost primită. Vei fi primul care află despre noile colecții, oferte exclusive și drop-uri limitate.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a84c] text-black font-bold rounded hover:bg-[#e8c97a] transition-colors"
          >
            ← Înapoi la produse
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#c9a84c]/30 rounded-full text-[#c9a84c] text-xs font-medium tracking-widest uppercase mb-6">
          Comunitate
        </div>
        <h1 className="text-4xl sm:text-5xl font-black mb-4">
          Alătură-te <span className="text-[#c9a84c]">MinePrut</span>
        </h1>
        <p className="text-[#888] max-w-md mx-auto leading-relaxed">
          Înregistrează-te pentru a primi acces la drop-uri exclusive, reduceri pentru membri și noutăți despre colecțiile viitoare.
        </p>
      </div>

      {/* Perks */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { icon: '🎯', text: 'Acces prioritar la ediții limitate' },
          { icon: '💰', text: '10% reducere la prima comandă' },
          { icon: '📦', text: 'Notificări despre noile colecții' },
        ].map((perk, i) => (
          <div key={i} className="bg-[#111] border border-[#1a1a1a] rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">{perk.icon}</div>
            <div className="text-xs text-[#888] leading-tight">{perk.text}</div>
          </div>
        ))}
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-8"
      >
        <input type="hidden" name="form-name" value="register" />
        {/* Honeypot */}
        <div style={{ display: 'none' }}>
          <input name="bot-field" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-bold text-[#888] mb-2" htmlFor="name">
              Nume complet <span className="text-[#c9a84c]">*</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={fields.name}
              onChange={handleChange}
              required
              placeholder="Ion Popescu"
              className="w-full bg-[#0a0a0a] border border-[#222] rounded-lg px-4 py-3 text-white placeholder-[#444] focus:outline-none focus:border-[#c9a84c] transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-[#888] mb-2" htmlFor="email">
              Email <span className="text-[#c9a84c]">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={fields.email}
              onChange={handleChange}
              required
              placeholder="ion@email.com"
              className="w-full bg-[#0a0a0a] border border-[#222] rounded-lg px-4 py-3 text-white placeholder-[#444] focus:outline-none focus:border-[#c9a84c] transition-colors"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-bold text-[#888] mb-2" htmlFor="phone">
              Telefon
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={fields.phone}
              onChange={handleChange}
              placeholder="+373 XX XXX XXX"
              className="w-full bg-[#0a0a0a] border border-[#222] rounded-lg px-4 py-3 text-white placeholder-[#444] focus:outline-none focus:border-[#c9a84c] transition-colors"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-bold text-[#888] mb-2" htmlFor="city">
              Oraș
            </label>
            <input
              id="city"
              type="text"
              name="city"
              value={fields.city}
              onChange={handleChange}
              placeholder="Chișinău"
              className="w-full bg-[#0a0a0a] border border-[#222] rounded-lg px-4 py-3 text-white placeholder-[#444] focus:outline-none focus:border-[#c9a84c] transition-colors"
            />
          </div>

          {/* Size preference */}
          <div>
            <label className="block text-sm font-bold text-[#888] mb-2" htmlFor="size">
              Mărimea preferată <span className="text-[#c9a84c]">*</span>
            </label>
            <select
              id="size"
              name="size"
              value={fields.size}
              onChange={handleChange}
              required
              className="w-full bg-[#0a0a0a] border border-[#222] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c9a84c] transition-colors appearance-none cursor-pointer"
            >
              <option value="" disabled>Selectează mărimea</option>
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Interests */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-bold text-[#888] mb-2" htmlFor="interests">
              Ce te interesează cel mai mult?
            </label>
            <select
              id="interests"
              name="interests"
              value={fields.interests}
              onChange={handleChange}
              className="w-full bg-[#0a0a0a] border border-[#222] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c9a84c] transition-colors appearance-none cursor-pointer"
            >
              <option value="">Alege o categorie</option>
              <option value="hanorace">Hanorace & Sweatere</option>
              <option value="tricouri">Tricouri & Topuri</option>
              <option value="pantaloni">Pantaloni & Trening</option>
              <option value="accesorii">Accesorii & Șepci</option>
              <option value="jachete">Jachete & Geci</option>
              <option value="tot">Toată colecția</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 py-4 bg-[#c9a84c] text-black font-black text-lg rounded-lg hover:bg-[#e8c97a] disabled:opacity-60 disabled:cursor-wait transition-colors"
        >
          {loading ? 'Se trimite...' : 'Înregistrează-mă →'}
        </button>

        <p className="text-xs text-[#555] text-center mt-4">
          Prin înregistrare ești de acord să primești noutăți de la MinePrut. Nu trimitem spam.
        </p>
      </form>
    </div>
  )
}
