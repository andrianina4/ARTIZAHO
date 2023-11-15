import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Artizaho',
  description: 'Nous mettons en valeur les artisans malgaches pour faire revivre la culture et le savoir-faire en proposant une série d\'ateliers ouverts au public.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className='font-manrope'>{children}</body>
    </html>
  )
}
