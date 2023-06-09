import Hero from '@/components/Hero'
import ContactUs from '@/components/ContactUs'
import Wave from '@/components/Wave'

export default function Home() {
  return (
    <>
      <Hero />
      <Wave>
        <ContactUs />
      </Wave>
    </>
  )
}
