import './css/style.css'
import Footer from '@/components/Footer'
import { Rubik } from 'next/font/google'
import Header from '@/components/Header'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata = {
  title: 'Bernatto | Constructora',
  description:
    'Nos encargamos de elaborar tu carpeta de obra para solicitar tu préstamo del banco!'
}

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={rubik.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
