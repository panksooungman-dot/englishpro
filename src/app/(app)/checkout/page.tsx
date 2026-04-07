import { Suspense } from 'react'
import CheckoutPage from '@/page/checkout'

export const metadata = {
  title: '결제하기 — EnglishPro',
}

export default function Page() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">로딩 중...</div>}>
      <CheckoutPage />
    </Suspense>
  )
}
