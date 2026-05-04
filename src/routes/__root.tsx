import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'MinePrut — Streetwear Moldova' },
      { name: 'description', content: 'Brand de streetwear din Moldova. Stil autentic, calitate premium. Mine × Prut.' },
    ],
  }),
  component: RootDocument,
})

function RootDocument() {
  return (
    <html lang="ro">
      <head>
        <HeadContent />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0a0a0a] text-[#f5f5f0]">
        <Header />
        <main>
          <Outlet />
        </main>
        <footer className="border-t border-[#222] mt-24 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 bg-[#c9a84c] rounded-sm flex items-center justify-center font-black text-black text-xs">
                    MP
                  </div>
                  <span className="font-black text-lg">
                    Mine<span className="text-[#c9a84c]">Prut</span>
                  </span>
                </div>
                <p className="text-[#888] text-sm leading-relaxed">
                  Brand de streetwear din Moldova. Fiecare piesă spune o poveste — a rădăcinilor, a viselor și a drumului tău.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-[#c9a84c]">Navigare</h4>
                <ul className="space-y-2 text-sm text-[#888]">
                  <li><a href="/" className="hover:text-[#c9a84c] transition-colors">Produse</a></li>
                  <li><a href="/about" className="hover:text-[#c9a84c] transition-colors">Despre Noi</a></li>
                  <li><a href="/size-chart" className="hover:text-[#c9a84c] transition-colors">Tabel Mărimi</a></li>
                  <li><a href="/math-behind" className="hover:text-[#c9a84c] transition-colors">The Math Behind</a></li>
                  <li><a href="/register" className="hover:text-[#c9a84c] transition-colors">Înregistrare</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-[#c9a84c]">Contact</h4>
                <ul className="space-y-2 text-sm text-[#888]">
                  <li>📧 hello@mineprut.fun</li>
                  <li>📍 Moldova, Chișinău</li>
                  <li>📱 Instagram: @mineprut.fun</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-[#222] mt-8 pt-8 text-center text-[#555] text-xs">
              © 2024 MinePrut. Toate drepturile rezervate. Fabricat cu ❤️ în Moldova.
            </div>
          </div>
        </footer>
        <Scripts />
      </body>
    </html>
  )
}
