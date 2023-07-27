import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Artificer',
  description: 'A place to showcase projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
