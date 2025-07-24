import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import Navbar from '~/components/Navbar'
import ResumeCard from '~/components/ResumeCard'
import { resumes } from '~/constants'
import { usePuterStore } from '~/lib/putter'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Resumind' },
    { name: 'description', content: 'Smart feedback for your dream job!' },
  ]
}

export default function Home() {
  const { auth } = usePuterStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!auth.isAuthenticated) navigate('/auth?next=/')
  }, [auth.isAuthenticated])

  return (
    <main className="bg-[url(/images/bg-main.svg)] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>
            Realiza un seguimiento de postulaciones y la calificación de tus CVs
          </h1>
          <h2>Revisa tus aplicaciones y obten feedback impulsado por IA</h2>
        </div>
        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
