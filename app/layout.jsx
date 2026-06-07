import './globals.css'

export const metadata = {
  title: 'Ammunition · Automotive CGI',
  description: 'Automotive CGI & Creative Technology — Ammunition',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
