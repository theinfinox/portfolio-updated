import './globals.css'

export const metadata = {
  title: 'Govind | Portfolio',
  description: 'Computer Science Engineering Student & Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
