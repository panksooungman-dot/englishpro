/* ────────────────────────────────────
   공용 빌딩 블록 (admin 전용)
──────────────────────────────────── */
import Link from 'next/link'

function AdminBox({
  id, name, url, color, bg, sub,
}: {
  id: string; name: string; url?: string; color: string; bg: string; sub?: string
}) {
  const inner = (
    <div
      className="px-3 py-2.5 rounded-xl text-center shadow-sm min-w-[72px]"
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

function ActionBox({ label, sub }: { label: string; sub?: string }) {
  return (
    <div className="flex flex-col items-center gap-0">
      <div className="px-3 py-2.5 rounded-xl text-center border-2 border-dashed border-stone-200 min-w-[72px]">
        <div className="text-[11px] font-bold text-stone-500 leading-tight">{label}</div>
        {sub && <div className="text-[9px] text-stone-400 mt-0.5">{sub}</div>}
      </div>
    </div>
  )
}

function ArrowRight({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center self-center shrink-0">
      <div className="flex items-center">
        <div className="h-px w-5 bg-stone-300" />
        <div className="text-stone-300 text-xs">▶</div>
      </div>
      {label && <span className="text-[8px] text-stone-400 mt-0.5 text-center max-w-[48px]">{label}</span>}
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
    <div className="px-3 py-1.5 rounded-full bg-[#E8A43A] text-white text-[10px] font-bold self-center shrink-0 text-center">
      {label}
    </div>
  )
}

function FlowCard({
  no, title, desc, accentColor, children,
}: {
  no: string; title: string; desc: string; accentColor: string; children: React.ReactNode
}) {
  return (
    <div className="bg-white rounded-2xl border border-stone-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-stone-50 flex items-center gap-3">
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
      <div className="px-6 py-5 overflow-x-auto">
        {children}
      </div>
    </div>
  )
}

/* ────────────────────────────────────
   관리자 흐름도 3가지
──────────────────────────────────── */
export default function AdminFlows() {
  return (
    <div className="mt-8 mb-10">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1 h-6 rounded-full bg-[#E8A43A]" />
        <h2 className="font-bold text-[#0B1B2F] text-base">화면 흐름도</h2>
        <span className="text-xs text-stone-400">주요 관리자 업무 시나리오 3가지</span>
      </div>

      <div className="space-y-5">

        {/* ── FLOW 01: 강의 등록 → 오픈 흐름 ── */}
        <FlowCard
          no="01"
          title="강의 등록 → 판매 오픈 흐름"
          desc="새 강의를 등록하고 커리큘럼을 구성한 뒤 판매 상태로 전환하기까지의 관리자 업무 흐름"
          accentColor="#3B82F6"
        >
          {/* 1단계 */}
          <div className="mb-3">
            <div className="text-[9px] font-bold text-stone-400 uppercase tracking-wider mb-2">① 강의 기본 정보 등록</div>
            <div className="flex items-center gap-1 flex-wrap">
              <StartNode label="START" />
              <ArrowRight />
              <AdminBox id="A-01" name="대시보드" url="/admin" color="#E8A43A" bg="#FEF3C7" sub="빠른 이동" />
              <ArrowRight label="강의등록 클릭" />
              <AdminBox id="A-03" name="강의 등록" url="/admin/courses/register" color="#3B82F6" bg="#EFF6FF" sub="제목/가격/카테고리" />
              <ArrowRight label="저장" />
              <AdminBox id="A-02" name="강의 목록" url="/admin/courses" color="#3B82F6" bg="#EFF6FF" sub="비공개 상태" />
            </div>
          </div>

          <div className="flex items-center gap-1 my-1 ml-4">
            <div className="w-px h-4 bg-stone-200" />
          </div>

          {/* 2단계 */}
          <div className="mb-3">
            <div className="text-[9px] font-bold text-stone-400 uppercase tracking-wider mb-2">② 커리큘럼 구성</div>
            <div className="flex items-center gap-1 flex-wrap">
              <AdminBox id="A-04" name="챕터/레슨" url="/admin/courses/chapters" color="#3B82F6" bg="#EFF6FF" sub="강의 선택 후 편집" />
              <ArrowRight label="챕터 추가" />
              <ActionBox label="챕터 1 생성" sub="레슨 순서 설정" />
              <ArrowRight label="반복" />
              <ActionBox label="전체 레슨 추가" sub="재생시간/무료여부" />
              <ArrowRight />
              <AdminBox id="A-05" name="샘플영상" url="/admin/courses/samples" color="#3B82F6" bg="#EFF6FF" sub="무료 체험 등록" />
            </div>
          </div>

          <div className="flex items-center gap-1 my-1 ml-4">
            <div className="w-px h-4 bg-stone-200" />
          </div>

          {/* 3단계 */}
          <div>
            <div className="text-[9px] font-bold text-stone-400 uppercase tracking-wider mb-2">③ 판매 오픈</div>
            <div className="flex items-center gap-1 flex-wrap">
              <AdminBox id="A-02" name="강의 목록" url="/admin/courses" color="#3B82F6" bg="#EFF6FF" />
              <ArrowRight label="상태 변경" />
              <ActionBox label="비공개 → 판매중" />
              <ArrowRight />
              <AdminBox id="A-19" name="배너 등록" url="/admin/banners" color="#EC4899" bg="#FDF2F8" sub="홍보 배너 (선택)" />
              <ArrowRight label="메인 노출" />
              <EndNode label="판매 시작 🚀" />
            </div>
          </div>
        </FlowCard>

        {/* ── FLOW 02: 환불 처리 흐름 ── */}
        <FlowCard
          no="02"
          title="환불 요청 처리 흐름"
          desc="수강생의 환불 요청을 접수하고 검토하여 승인 또는 거절까지 처리하는 관리자 업무 흐름"
          accentColor="#EF4444"
        >
          {/* 접수 레인 */}
          <div className="mb-3">
            <div className="text-[9px] font-bold text-stone-400 uppercase tracking-wider mb-2">① 요청 접수 확인</div>
            <div className="flex items-center gap-1 flex-wrap">
              <StartNode label="환불 요청" />
              <ArrowRight label="이메일 알림" />
              <AdminBox id="A-01" name="대시보드" url="/admin" color="#E8A43A" bg="#FEF3C7" sub="환불 건수 뱃지" />
              <ArrowRight />
              <AdminBox id="A-10" name="주문 목록" url="/admin/orders" color="#EF4444" bg="#FEF2F2" sub="환불요청 필터" />
              <ArrowRight />
              <AdminBox id="A-12" name="취소/환불" url="/admin/orders/refunds" color="#EF4444" bg="#FEF2F2" sub="요청 상세 확인" />
            </div>
          </div>

          <div className="flex items-center gap-1 my-1 ml-4">
            <div className="w-px h-4 bg-stone-200" />
          </div>

          {/* 검토 분기 */}
          <div className="mb-3">
            <div className="text-[9px] font-bold text-stone-400 uppercase tracking-wider mb-2">② 환불 가능 여부 검토</div>
            <div className="flex items-center gap-1 flex-wrap mb-3">
              <ActionBox label="수강률 확인" sub="10% 미만?" />
              <ArrowRight />
              <ActionBox label="결제일 확인" sub="7일 이내?" />
              <ArrowRight />
              <Diamond label="환불 승인?" />
            </div>

            {/* 분기 */}
            <div className="ml-[280px] flex gap-10">
              <div className="flex flex-col items-center">
                <ArrowDown label="승인" />
                <AdminBox id="A-12" name="환불 승인" url="/admin/orders/refunds" color="#10B981" bg="#ECFDF5" sub="승인 버튼 클릭" />
                <ArrowDown />
                <ActionBox label="PG 취소 전송" sub="Toss Payments" />
              </div>
              <div className="flex flex-col items-center">
                <ArrowDown label="거절" />
                <AdminBox id="A-12" name="거절 처리" url="/admin/orders/refunds" color="#EF4444" bg="#FEF2F2" sub="사유 입력" />
              </div>
            </div>
          </div>

          {/* 수렴 */}
          <div>
            <div className="text-[9px] font-bold text-stone-400 uppercase tracking-wider mb-2">③ 처리 완료</div>
            <div className="flex items-center gap-1 flex-wrap">
              <ActionBox label="두 경로 모두" />
              <ArrowRight label="자동" />
              <ActionBox label="회원 이메일 발송" sub="처리 결과 안내" />
              <ArrowRight />
              <AdminBox id="A-11" name="결제 상태" url="/admin/orders/payments" color="#EF4444" bg="#FEF2F2" sub="상태 업데이트 확인" />
              <ArrowRight />
              <EndNode label="처리 완료 ✓" />
            </div>
          </div>
        </FlowCard>

        {/* ── FLOW 03: 회원 제재 흐름 ── */}
        <FlowCard
          no="03"
          title="회원 제재 처리 흐름"
          desc="문제 행동이 발견된 회원에게 경고 또는 이용 정지를 처리하는 관리자 업무 흐름"
          accentColor="#8B5CF6"
        >
          {/* 발견 */}
          <div className="mb-3">
            <div className="text-[9px] font-bold text-stone-400 uppercase tracking-wider mb-2">① 문제 행동 발견</div>
            <div className="flex items-center gap-1 flex-wrap">
              <StartNode label="신고/발견" />
              <ArrowRight />
              <AdminBox id="A-17" name="리뷰 관리" url="/admin/board/reviews" color="#06B6D4" bg="#ECFEFF" sub="부적절 리뷰" />
              <ArrowRight label="또는" />
              <AdminBox id="A-18" name="1:1 문의" url="/admin/board/inquiries" color="#06B6D4" bg="#ECFEFF" sub="분쟁 접수" />
              <ArrowRight />
              <AdminBox id="A-07" name="회원 목록" url="/admin/members" color="#8B5CF6" bg="#F5F3FF" sub="해당 회원 검색" />
            </div>
          </div>

          <div className="flex items-center gap-1 my-1 ml-4">
            <div className="w-px h-4 bg-stone-200" />
          </div>

          {/* 판단 */}
          <div className="mb-3">
            <div className="text-[9px] font-bold text-stone-400 uppercase tracking-wider mb-2">② 심각도 판단 및 제재</div>
            <div className="flex items-center gap-1 flex-wrap mb-3">
              <AdminBox id="A-09" name="제재/권한" url="/admin/members/permissions" color="#8B5CF6" bg="#F5F3FF" sub="이력 확인" />
              <ArrowRight />
              <Diamond label="심각도?" />
            </div>

            <div className="ml-[200px] flex gap-10">
              <div className="flex flex-col items-center">
                <ArrowDown label="경미" />
                <ActionBox label="경고 처리" sub="사유 기록" />
                <ArrowDown />
                <ActionBox label="경고 이메일 발송" />
              </div>
              <div className="flex flex-col items-center">
                <ArrowDown label="중대" />
                <ActionBox label="이용 정지" sub="기간 설정" />
                <ArrowDown />
                <ActionBox label="정지 안내 발송" />
              </div>
            </div>
          </div>

          {/* 수렴 */}
          <div>
            <div className="text-[9px] font-bold text-stone-400 uppercase tracking-wider mb-2">③ 이후 관리</div>
            <div className="flex items-center gap-1 flex-wrap">
              <AdminBox id="A-09" name="제재 목록" url="/admin/members/permissions" color="#8B5CF6" bg="#F5F3FF" sub="제재 현황 확인" />
              <ArrowRight label="기간 만료 시" />
              <ActionBox label="자동 해제 검토" sub="재발 시 영구 정지" />
              <ArrowRight />
              <AdminBox id="A-08" name="수강 현황" url="/admin/members/enrollments" color="#8B5CF6" bg="#F5F3FF" sub="수강 재개 확인" />
              <ArrowRight />
              <EndNode label="처리 완료 ✓" />
            </div>
          </div>

          {/* 포인트 */}
          <div className="mt-5 pt-4 border-t border-stone-50">
            <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2">운영 기준</div>
            <div className="flex flex-wrap gap-3">
              {[
                '1회 위반: 경고 처리 후 관찰',
                '2회 이상 반복: 7일~30일 이용 정지',
                '결제 분쟁 반복 / 사기 행위: 영구 정지',
                '정지 회원은 로그인 불가 처리',
              ].map((point) => (
                <div key={point} className="flex items-start gap-1.5 text-xs text-stone-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-1.5 shrink-0" />
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
