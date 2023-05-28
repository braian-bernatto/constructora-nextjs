import Hero from '@/components/Hero'
import Simuladores from '@/components/Simuladores'
import Services from '@/components/Services'
import ContactUs from '@/components/ContactUs'
import Wave from '@/components/Wave'

export default function Home() {
  return (
    <main className='main'>
      <Hero />
      <Simuladores />
      <Wave>
        <Services />
      </Wave>
      <ContactUs />
    </main>
  )
}
