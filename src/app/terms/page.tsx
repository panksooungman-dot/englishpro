import { Suspense } from 'react'
import TermsPage from '@/page/terms'

export const metadata = { title: '이용약관 — EnglishPro' }

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">로딩 중...</div>}>
      <TermsPage />
    </Suspense>
  )
}
