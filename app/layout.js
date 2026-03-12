import './globals.css'
import data from './data.json'

// This object controls the browser tab text and social media link previews
export const metadata = {
  title: `${data.personal.name} | Portfolio`,
  description: data.personal.role,
  metadataBase: new URL(data.personal.website), // Crucial for resolving image URLs
  
  openGraph: {
    title: `${data.personal.name} | Developer Portfolio`,
    description: `Portfolio of ${data.personal.name}, a B.Tech CSE student specializing in Cloud, DevOps, and Linux server administration.`,
    url: data.personal.website,
    siteName: `${data.personal.name} Portfolio`,
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: `${data.personal.name} | Portfolio`,
    description: data.personal.role,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}