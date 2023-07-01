import Hero from '@/components/Hero'
import Simuladores from '@/components/Simuladores'
import Services from '@/components/Services'
import ContactUs from '@/components/ContactUs'
import Wave from '@/components/Wave'

export const metadata = { title: 'CEO | Tu Casa' }

export default function Home() {
  return (
    <>
      <Hero />
      <Simuladores />
      <Wave>
        <Services />
      </Wave>
      <ContactUs />
    </>
  )
}
