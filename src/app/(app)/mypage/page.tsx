import { Suspense } from 'react'
import MyPage from '@/page/mypage'

export const metadata = { title: '마이페이지 — EnglishPro' }

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">로딩 중...</div>}>
      <MyPage />
    </Suspense>
  )
}
