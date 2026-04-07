import Link from 'next/link'

export default function DocsIndexPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F4] flex items-center justify-center p-8">
      <div className="max-w-md w-full text-center">
        <div className="w-14 h-14 bg-[#0B1B2F] rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span className="text-[#E8A43A] font-bold text-xl">EP</span>
        </div>
        <h1 className="text-2xl font-bold text-[#0B1B2F] mb-2">화면 구성서</h1>
        <p className="text-stone-500 text-sm mb-8">EnglishPro 인터넷 강의 플랫폼</p>
        <div className="grid gap-4">
          <Link
            href="/docs/user"
            className="block bg-white rounded-2xl p-6 border border-stone-100 hover:border-[#E8A43A] hover:shadow-sm transition-all text-left"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center">
                <span className="text-blue-600 text-sm">👤</span>
              </div>
              <span className="font-bold text-[#0B1B2F]">사용자 화면 구성서</span>
            </div>
            <p className="text-xs text-stone-500 leading-relaxed">홈, 강의, 커뮤니티, 마이페이지, 결제 등 일반 사용자 대상 전체 화면 정의서</p>
            <div className="mt-3 text-xs text-[#E8A43A] font-semibold">총 22개 화면 →</div>
          </Link>
          <Link
            href="/docs/admin"
            className="block bg-white rounded-2xl p-6 border border-stone-100 hover:border-[#E8A43A] hover:shadow-sm transition-all text-left"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center">
                <span className="text-orange-600 text-sm">⚙️</span>
              </div>
              <span className="font-bold text-[#0B1B2F]">관리자 화면 구성서</span>
            </div>
            <p className="text-xs text-stone-500 leading-relaxed">대시보드, 강의관리, 회원관리, 주문/결제, 통계 등 관리자 대상 전체 화면 정의서</p>
            <div className="mt-3 text-xs text-[#E8A43A] font-semibold">총 24개 화면 →</div>
          </Link>
        </div>
        <p className="text-xs text-stone-400 mt-6">© 2025 EnglishPro · 기획서 초안</p>
      </div>
    </div>
  )
}
