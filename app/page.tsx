import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import Footer from '@/components/Footer'


import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Samuel Zúñiga',
  description: 'Portfolio of Samuel Zúñiga',
  icons: {
    icon: '/icon.png',
  },
};
 

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />

    </main>
  )
}
