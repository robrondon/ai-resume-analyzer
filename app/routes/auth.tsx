import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { usePuterStore } from '~/lib/putter'
import type { Route } from './+types/home'

export const meta = ({}: Route.MetaArgs) => [
  { title: 'Resumind | Auth' },
  { name: 'description', content: 'Log into your account' },
]

const Auth = () => {
  const { isLoading, auth } = usePuterStore()
  const location = useLocation()
  const next = location.search.split('next=')[1]
  const navigate = useNavigate()

  useEffect(() => {
    if (auth.isAuthenticated) navigate(next)
  }, [auth.isAuthenticated, next])

  return (
    <main className="bg-[url(/images/bg-auth.svg)] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1>Bienvenid@</h1>
            <h2>Inicia sesión para continuar tu viaje</h2>
          </div>
          <div>
            {isLoading ? (
              <button className="auth-button animate-pulse">
                <p>Autenticando ...</p>
              </button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <button className="auth-button" onClick={auth.signOut}>
                    <p>Cerrar sesión</p>
                  </button>
                ) : (
                  <button className="auth-button" onClick={auth.signIn}>
                    <p>Iniciar sesión</p>
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Auth
