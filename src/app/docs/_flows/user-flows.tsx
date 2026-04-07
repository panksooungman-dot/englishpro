import Link from 'next/link'

/* ────────────────────────────────────
   기본 빌딩 블록
──────────────────────────────────── */
function ScreenBox({
  id, name, url, color, bg, sub,
}: {
  id: string; name: string; url?: string; color: string; bg: string; sub?: string
}) {
  const inner = (
    <div
      className="px-3 py-2.5 rounded-xl text-center shadow-sm min-w-[72px] transition-opacity"
      style={{ backgroundColor: color }}
    >
      <div
        className="text-[9px] font-bold px-1.5 py-0.5 rounded mb-1 inline-block"
        style={{ backgroundColor: bg, color }}
      >
        {id}
      </div>
      <div className="text-[11px] font-bold text-white leading-tight">{name}</div>
      {sub && <div className="text-[9px] text-white/70 mt-0.5">{sub}</div>}
    </div>
  )
  if (url) {
    return (
      <Link href={url} target="_blank" className="flex flex-col items-center gap-0 hover:opacity-80">
        {inner}
        <span className="text-[8px] text-stone-400 mt-0.5 underline">미리보기</span>
      </Link>
    )
  }
  return <div className="flex flex-col items-center gap-0">{inner}</div>
}

function ArrowRight({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center self-center shrink-0">
      <div className="flex items-center gap-0">
        <div className="h-px w-6 bg-stone-300" />
        <div className="text-stone-300 text-xs">▶</div>
      </div>
      {label && <span className="text-[8px] text-stone-400 mt-0.5">{label}</span>}
    </div>
  )
}

function ArrowDown({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center shrink-0 my-1">
      <div className="w-px h-4 bg-stone-300" />
      <div className="text-stone-300 text-xs leading-none">▼</div>
      {label && <span className="text-[8px] text-stone-400">{label}</span>}
    </div>
  )
}

function Diamond({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center self-center shrink-0">
      <div className="relative w-14 h-14 flex items-center justify-center">
        <div className="absolute w-9 h-9 bg-amber-400 rotate-45 rounded shadow-sm" />
        <span className="relative text-[9px] font-bold text-white text-center leading-tight z-10 px-1">
          {label}
        </span>
      </div>
    </div>
  )
}

function StartNode({ label }: { label: string }) {
  return (
    <div className="px-3 py-1.5 rounded-full bg-[#0B1B2F] text-white text-[10px] font-bold self-center shrink-0">
      {label}
    </div>
  )
}

function EndNode({ label }: { label: string }) {
  return (
    <div className="px-3 py-1.5 rounded-full bg-[#E8A43A] text-white text-[10px] font-bold self-center shrink-0">
      {label}
    </div>
  )
}

function BranchLabel({ condition }: { condition: string }) {
  return (
    <span className="text-[8px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded self-center shrink-0">
      {condition}
    </span>
  )
}

function FlowCard({
  no, title, desc, accentColor, children,
}: {
  no: string; title: string; desc: string; accentColor: string; children: React.ReactNode
}) {
  return (
    <div className="bg-white rounded-2xl border border-stone-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-stone-50 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[10px] font-bold shrink-0"
            style={{ backgroundColor: accentColor }}
          >
            {no}
          </div>
          <div>
            <div className="font-bold text-[#0B1B2F] text-sm">{title}</div>
            <div className="text-xs text-stone-400 mt-0.5">{desc}</div>
          </div>
        </div>
      </div>
      <div className="px-6 py-5 overflow-x-auto">
        {children}
      </div>
    </div>
  )
}

/* ────────────────────────────────────
   사용자 흐름도 3가지
──────────────────────────────────── */
export default function UserFlows() {
  return (
    <div className="mt-8 mb-10">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1 h-6 rounded-full bg-[#E8A43A]" />
        <h2 className="font-bold text-[#0B1B2F] text-base">화면 흐름도</h2>
        <span className="text-xs text-stone-400">주요 사용자 시나리오 3가지</span>
      </div>

      <div className="space-y-5">

        {/* ── FLOW 01: 강의 구매 흐름 ── */}
        <FlowCard
          no="01"
          title="강의 구매 흐름"
          desc="비로그인 사용자가 강의를 발견하고 결제를 완료하기까지의 전체 여정"
          accentColor="#8B5CF6"
        >
          {/* 메인 레인 */}
          <div className="flex items-center gap-1 flex-wrap mb-3">
            <StartNode label="START" />
            <ArrowRight />
            <ScreenBox id="U-01" name="메인 홈" url="/" color="#3B82F6" bg="#EFF6FF" />
            <ArrowRight />
            <ScreenBox id="U-02" name="강의 목록" url="/courses" color="#8B5CF6" bg="#F5F3FF" />
            <ArrowRight />
            <ScreenBox id="U-03" name="강의 상세" url="/courses/1" color="#8B5CF6" bg="#F5F3FF" sub="커리큘럼/가격 확인" />
            <ArrowRight />
            <Diamond label="로그인?" />
          </div>

          {/* 분기 레인 */}
          <div className="ml-[280px] flex gap-8 mb-3">
            {/* Yes 분기 */}
            <div className="flex flex-col items-center">
              <ArrowDown label="YES" />
              <ScreenBox id="U-12" name="장바구니" url="/cart" color="#EC4899" bg="#FDF2F8" sub="쿠폰 적용" />
            </div>
            {/* No 분기 */}
            <div className="flex flex-col items-center">
              <ArrowDown label="NO" />
              <ScreenBox id="U-14" name="로그인" url="/sign-in" color="#64748B" bg="#F8FAFC" />
              <ArrowDown />
              <ScreenBox id="U-12" name="장바구니" url="/cart" color="#EC4899" bg="#FDF2F8" />
            </div>
          </div>

          {/* 결제 수렴 레인 */}
          <div className="flex items-center gap-1 flex-wrap">
            <div className="w-[280px] flex items-center justify-end pr-2">
              <div className="text-[9px] text-stone-400 bg-stone-50 px-2 py-1 rounded">두 경로 모두</div>
            </div>
            <ArrowRight />
            <ScreenBox id="U-13" name="결제 페이지" url="/checkout" color="#EC4899" bg="#FDF2F8" sub="Toss Payments" />
            <ArrowRight label="결제 성공" />
            <ScreenBox id="U-11" name="내 강의실" url="/my-courses" color="#06B6D4" bg="#ECFEFF" sub="수강 시작" />
            <ArrowRight />
            <EndNode label="수강 완료" />
          </div>

          {/* 범례 */}
          <div className="mt-5 pt-4 border-t border-stone-50 flex flex-wrap gap-4 text-[10px] text-stone-400">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-[#0B1B2F] inline-block" />시작/종료</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-[#8B5CF6] inline-block" />화면 이동</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rotate-45 bg-amber-400 inline-block" />조건 분기</span>
            <span className="flex items-center gap-1.5"><span className="underline">미리보기</span>클릭 시 실제 화면 확인</span>
          </div>
        </FlowCard>

        {/* ── FLOW 02: 회원가입 → 첫 수강 흐름 ── */}
        <FlowCard
          no="02"
          title="회원가입 → 첫 수강 흐름"
          desc="신규 방문자가 회원가입 후 강의를 구매하고 처음 수강하기까지의 온보딩 여정"
          accentColor="#10B981"
        >
          {/* 1단계: 유입 */}
          <div className="mb-2">
            <div className="text-[9px] font-bold text-stone-400 uppercase tracking-wider mb-2">① 회원가입</div>
            <div className="flex items-center gap-1 flex-wrap">
              <StartNode label="첫 방문" />
              <ArrowRight />
              <ScreenBox id="U-01" name="메인 홈" url="/" color="#3B82F6" bg="#EFF6FF" />
              <ArrowRight label="회원가입 클릭" />
              <ScreenBox id="U-15" name="회원가입" url="/sign-up" color="#64748B" bg="#F8FAFC" sub="이메일/비밀번호" />
              <ArrowRight label="가입 완료" />
              <ScreenBox id="U-14" name="로그인" url="/sign-in" color="#64748B" bg="#F8FAFC" />
            </div>
          </div>

          <div className="flex items-center gap-1 my-2 ml-4">
            <div className="w-px h-4 bg-stone-200" />
            <div className="text-[8px] text-stone-300 ml-1">로그인 완료</div>
          </div>

          {/* 2단계: 강의 탐색 */}
          <div className="mb-2">
            <div className="text-[9px] font-bold text-stone-400 uppercase tracking-wider mb-2">② 강의 탐색 및 구매</div>
            <div className="flex items-center gap-1 flex-wrap">
              <ScreenBox id="U-02" name="강의 목록" url="/courses" color="#8B5CF6" bg="#F5F3FF" />
              <ArrowRight />
              <ScreenBox id="U-03" name="강의 상세" url="/courses/1" color="#8B5CF6" bg="#F5F3FF" sub="커리큘럼 확인" />
              <ArrowRight label="구매하기 클릭" />
              <ScreenBox id="U-12" name="장바구니" url="/cart" color="#EC4899" bg="#FDF2F8" />
              <ArrowRight />
              <ScreenBox id="U-13" name="결제" url="/checkout" color="#EC4899" bg="#FDF2F8" sub="Toss Payments" />
            </div>
          </div>

          <div className="flex items-center gap-1 my-2 ml-4">
            <div className="w-px h-4 bg-stone-200" />
            <div className="text-[8px] text-stone-300 ml-1">결제 완료</div>
          </div>

          {/* 3단계: 수강 */}
          <div>
            <div className="text-[9px] font-bold text-stone-400 uppercase tracking-wider mb-2">③ 첫 수강</div>
            <div className="flex items-center gap-1 flex-wrap">
              <ScreenBox id="U-11" name="내 강의실" url="/my-courses" color="#06B6D4" bg="#ECFEFF" sub="수강중 탭" />
              <ArrowRight label="강의 클릭" />
              <ScreenBox id="U-11" name="이어보기" url="/my-courses" color="#06B6D4" bg="#ECFEFF" sub="진도율 업데이트" />
              <ArrowRight label="완료 시" />
              <EndNode label="수강 완료 🎉" />
            </div>
          </div>
        </FlowCard>

        {/* ── FLOW 03: 1:1 문의 흐름 ── */}
        <FlowCard
          no="03"
          title="1:1 문의 흐름"
          desc="사용자가 문의를 접수하고 관리자 답변을 마이페이지에서 확인하기까지의 흐름"
          accentColor="#F59E0B"
        >
          {/* 문의 접수 */}
          <div className="mb-2">
            <div className="text-[9px] font-bold text-stone-400 uppercase tracking-wider mb-2">① 문의 접수</div>
            <div className="flex items-center gap-1 flex-wrap">
              <StartNode label="START" />
              <ArrowRight />
              <ScreenBox id="U-06~09" name="커뮤니티" url="/community/notice" color="#F59E0B" bg="#FFFBEB" />
              <ArrowRight label="1:1문의 탭" />
              <ScreenBox id="U-09" name="1:1 문의" url="/community/inquiry" color="#F59E0B" bg="#FFFBEB" />
              <ArrowRight />
              <Diamond label="로그인?" />
            </div>
          </div>

          {/* 분기 */}
          <div className="ml-[290px] flex gap-8 mb-3">
            <div className="flex flex-col items-center">
              <ArrowDown label="YES" />
              <ScreenBox id="U-09" name="문의 작성" url="/community/inquiry" color="#F59E0B" bg="#FFFBEB" sub="유형/제목/내용" />
            </div>
            <div className="flex flex-col items-center">
              <ArrowDown label="NO" />
              <ScreenBox id="U-14" name="로그인 유도" url="/sign-in" color="#64748B" bg="#F8FAFC" />
              <ArrowDown />
              <ScreenBox id="U-09" name="문의 작성" url="/community/inquiry" color="#F59E0B" bg="#FFFBEB" sub="유형/제목/내용" />
            </div>
          </div>

          {/* 수렴 후 흐름 */}
          <div className="flex items-center gap-1 flex-wrap mb-2">
            <div className="text-[9px] text-stone-400 bg-stone-50 px-2 py-1 rounded self-center">접수 완료</div>
            <ArrowRight />
            <div className="flex flex-col items-center">
              <div className="px-3 py-2.5 rounded-xl bg-stone-100 text-center min-w-[72px]">
                <div className="text-[9px] font-bold text-stone-400 mb-1">관리자</div>
                <div className="text-[11px] font-bold text-stone-600">답변 작성</div>
                <div className="text-[8px] text-stone-400">A-18</div>
              </div>
            </div>
            <ArrowRight label="알림 발송" />
            <ScreenBox id="U-10" name="마이페이지" url="/mypage" color="#EF4444" bg="#FEF2F2" sub="문의내역 탭" />
            <ArrowRight />
            <EndNode label="답변 확인 ✓" />
          </div>

          {/* 포인트 */}
          <div className="mt-4 pt-4 border-t border-stone-50">
            <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2">핵심 포인트</div>
            <div className="flex flex-wrap gap-3">
              {[
                '비로그인 시 로그인 페이지로 자동 리다이렉트',
                '문의 접수 후 관리자에게 이메일 알림 발송',
                '마이페이지 > 문의내역에서 답변 상태 실시간 확인',
              ].map((point) => (
                <div key={point} className="flex items-start gap-1.5 text-xs text-stone-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </FlowCard>

      </div>
    </div>
  )
}
