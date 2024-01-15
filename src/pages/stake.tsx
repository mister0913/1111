import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function RedirectPage() {
  const router = useRouter()

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/staking')
    }, 10) // Redirect after 10 milliseconds
    return () => clearTimeout(redirectTimer)
  }, [router])

  return <div></div>
}
