import './globals.css'
import data from './data.json'

const safeUrlString = (data.personal.website && data.personal.website.startsWith('http'))
  ? data.personal.website
  : process.env.URL || 'https://govindsr.me';

// 1. Expanded strings to hit the 50-60 (Title) and 110-160 (Description) sweet spots.
const optimalTitle = `${data.personal.name} | Cloud Consultant & DevOps Engineer Portfolio`;
const optimalDescription = `Explore the portfolio of ${data.personal.name}, a Cloud Consultant & DevOps Engineer specializing in secure multi-cloud infrastructure, Linux administration, and CI/CD.`;

export const metadata = {
  title: optimalTitle,
  description: optimalDescription,
  metadataBase: new URL(safeUrlString), 
  
  openGraph: {
    title: optimalTitle,
    description: optimalDescription,
    url: safeUrlString,
    siteName: `${data.personal.name} Portfolio`,
    locale: 'en_US',
    type: 'website',
    // 2. Explicitly pointing to the image in the public folder
    images: [
      {
        url: '/opengraph-image.png', 
        width: 1200,
        height: 630,
        alt: `${data.personal.name} - Server Administration & DevOps Portfolio`,
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: optimalTitle,
    description: optimalDescription,
    images: ['/opengraph-image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}