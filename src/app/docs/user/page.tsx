import Link from 'next/link'

const screens = [
  {
    group: '홈 / 메인',
    color: '#3B82F6',
    bg: '#EFF6FF',
    items: [
      {
        id: 'U-01',
        name: '메인 홈',
        url: '/',
        desc: '브랜드 첫 인상을 결정하는 랜딩 페이지',
        components: [
          '히어로 섹션 — 대형 타이틀 + 슬로건 + CTA 버튼 (강의 보기)',
          '추천 강의 섹션 — 베스트/신규 강의 카드 그리드',
          '강사 소개 섹션 — 강사 프로필 + 수강생 수 + 한줄 소개',
          '수강 후기 섹션 — 별점 + 수강생 리뷰 캐러셀',
          'CTA 섹션 — 지금 시작하기 배너',
          '페이드인 스크롤 애니메이션 (motion/react)',
        ],
        notes: '스크롤 페이드인 효과 적용. 네이비(#0B1B2F) + 골드(#E8A43A) 브랜드 컬러.',
      },
    ],
  },
  {
    group: '강의',
    color: '#8B5CF6',
    bg: '#F5F3FF',
    items: [
      {
        id: 'U-02',
        name: '강의 전체 목록',
        url: '/courses',
        desc: '모든 강의를 탐색하고 필터링하는 페이지',
        components: [
          '카테고리 탭 필터 (전체/비즈니스/시험대비/회화/발음)',
          '난이도 필터 (입문/초급/중급/고급)',
          '텍스트 검색바',
          '강의 카드 그리드 — 썸네일/제목/강사/평점/가격/수강생수',
          '장바구니 담기 / 찜하기 버튼',
        ],
        notes: '필터 조합 시 실시간 목록 갱신. 강의 카드 hover 시 상세 프리뷰.',
      },
      {
        id: 'U-03',
        name: '강의 상세',
        url: '/courses/[id]',
        desc: '강의 상세 정보 및 결제 유도 페이지',
        components: [
          '강의 제목 / 카테고리 배지 / 평점 / 수강생 수',
          '강의 설명 텍스트',
          '학습 목표 리스트 (체크마크)',
          '커리큘럼 아코디언 — 챕터/레슨 목록 + 무료 체험 레슨 표시',
          '강사 프로필 카드',
          '수강후기 섹션 — 별점 분포 + 리뷰 목록',
          '구매 사이드카드 — 가격/할인율/Toss Payments 결제버튼/장바구니/찜',
        ],
        notes: '구매 카드는 스크롤 시 상단 고정(sticky). Toss Payments UI 연동 예정.',
      },
    ],
  },
  {
    group: '강사 / 이벤트',
    color: '#10B981',
    bg: '#ECFDF5',
    items: [
      {
        id: 'U-04',
        name: '강사 소개',
        url: '/instructor',
        desc: '단일 강사의 프로필과 강의 소개 페이지',
        components: [
          '강사 대형 프로필 사진 + 이름 + 타이틀',
          '약력/경력 타임라인',
          '강사 한마디 인용구',
          '보유 강의 목록 카드',
          '수강생 통계 (총 수강생 수, 평균 평점)',
        ],
        notes: '단일 강사 사이트 구조. 강사 정보는 state에서 관리.',
      },
      {
        id: 'U-05',
        name: '이벤트/프로모션',
        url: '/events',
        desc: '진행 중인 할인 이벤트 및 프로모션 페이지',
        components: [
          '이벤트 배너 카드 — 기간/할인율/대상 강의',
          '이벤트 상세 모달 또는 인라인 확장',
          'D-day 카운트다운 표시',
          '바로 구매하기 CTA',
        ],
        notes: '종료된 이벤트는 비활성화 표시.',
      },
    ],
  },
  {
    group: '커뮤니티',
    color: '#F59E0B',
    bg: '#FFFBEB',
    items: [
      {
        id: 'U-06',
        name: '공지사항',
        url: '/community/notice',
        desc: '운영 공지 게시판',
        components: [
          '상단 고정 공지 (핀 아이콘)',
          '공지 목록 — 제목/날짜/조회수',
          '공지 상세 본문 (인라인 펼침)',
        ],
        notes: '관리자가 등록한 공지가 표시됨.',
      },
      {
        id: 'U-07',
        name: 'FAQ',
        url: '/community/faq',
        desc: '자주 묻는 질문 아코디언 페이지',
        components: [
          '카테고리 탭 (수강/결제/환불/강의)',
          'Q&A 아코디언 리스트',
          '검색 기능',
        ],
        notes: '답변 없음 처리 불필요 — 관리자가 미리 등록한 항목만 표시.',
      },
      {
        id: 'U-08',
        name: '수강 후기',
        url: '/community/reviews',
        desc: '전체 수강생 리뷰 페이지',
        components: [
          '강의별 필터',
          '별점 분포 차트',
          '리뷰 카드 목록 — 이름/강의/별점/내용/날짜',
        ],
        notes: '관리자가 숨김 처리한 리뷰는 미노출.',
      },
      {
        id: 'U-09',
        name: '1:1 문의',
        url: '/community/inquiry',
        desc: '회원 전용 1:1 문의 접수 폼',
        components: [
          '문의 유형 선택 (수강/결제/환불/기타)',
          '제목 / 내용 입력',
          '내 문의 내역 목록 (로그인 필요)',
          '답변 상태 뱃지',
        ],
        notes: '비로그인 시 로그인 유도 팝업.',
      },
    ],
  },
  {
    group: '마이페이지',
    color: '#EF4444',
    bg: '#FEF2F2',
    items: [
      {
        id: 'U-10',
        name: '마이페이지',
        url: '/mypage',
        desc: '회원 정보 및 활동 내역 통합 페이지',
        components: [
          '사이드 탭 메뉴 (내정보/주문내역/쿠폰·포인트/찜한강의/문의내역)',
          '내 정보 — 프로필 수정 폼 (이름/이메일/비밀번호)',
          '주문 내역 — 결제 목록 + 상태 뱃지',
          '쿠폰/포인트 — 보유 쿠폰 목록 + 포인트 잔액',
          '찜한 강의 — 찜 목록 카드 그리드',
          '문의 내역 — 내 문의 목록 + 답변 여부',
        ],
        notes: 'URL 파라미터(tab=)로 탭 전환. useSearchParams 사용.',
      },
    ],
  },
  {
    group: '내 강의실',
    color: '#06B6D4',
    bg: '#ECFEFF',
    items: [
      {
        id: 'U-11',
        name: '내 강의실',
        url: '/my-courses',
        desc: '수강 중인 강의 목록 및 진도 확인',
        components: [
          '탭 메뉴 (수강중/수강완료/최근 시청)',
          '강의 카드 — 썸네일/제목/진도율 프로그레스바',
          '이어보기 버튼',
          '수강 완료 배지',
        ],
        notes: '탭 상태는 URL 파라미터로 관리.',
      },
    ],
  },
  {
    group: '장바구니 / 결제',
    color: '#EC4899',
    bg: '#FDF2F8',
    items: [
      {
        id: 'U-12',
        name: '장바구니',
        url: '/cart',
        desc: '담은 강의 목록 및 결제 진행 페이지',
        components: [
          '강의 목록 — 썸네일/제목/가격/삭제',
          '쿠폰 코드 입력 필드',
          '주문 요약 — 정가/할인/최종 결제금액',
          '주문하기 버튼',
          '빈 장바구니 상태 UI',
        ],
        notes: '쿠폰 적용 시 즉시 금액 갱신.',
      },
      {
        id: 'U-13',
        name: '주문/결제',
        url: '/checkout',
        desc: 'Toss Payments 연동 결제 페이지',
        components: [
          '주문 상품 요약',
          '결제 수단 선택 — 신용카드/간편결제/계좌이체',
          'Toss Payments UI 위젯',
          '최종 금액 확인',
          '결제하기 버튼',
        ],
        notes: 'Toss Payments 클라이언트 키 연동 필요. 테스트 모드로 UI 확인 가능.',
      },
    ],
  },
  {
    group: '회원',
    color: '#64748B',
    bg: '#F8FAFC',
    items: [
      {
        id: 'U-14',
        name: '로그인',
        url: '/sign-in',
        desc: '회원 로그인 페이지 (헤더/푸터 없음)',
        components: [
          '이메일 / 비밀번호 입력',
          '로그인 버튼',
          '소셜 로그인 버튼 (카카오/구글)',
          '아이디 찾기 / 비밀번호 찾기 링크',
          '회원가입 링크',
        ],
        notes: '인증 기능은 auth-setup 스킬 사용 시 실제 연동 가능.',
      },
      {
        id: 'U-15',
        name: '회원가입',
        url: '/sign-up',
        desc: '신규 회원 가입 폼 (헤더/푸터 없음)',
        components: [
          '이름 / 이메일 / 비밀번호 / 비밀번호 확인',
          '이용약관 동의 체크박스',
          '마케팅 수신 동의 (선택)',
          '가입하기 버튼',
        ],
        notes: '이메일 중복 체크 기능 필요.',
      },
      {
        id: 'U-16',
        name: '아이디/비밀번호 찾기',
        url: '/find-account',
        desc: '계정 찾기 페이지',
        components: [
          '탭 전환 (아이디 찾기 / 비밀번호 찾기)',
          '이메일 입력 폼',
          '인증 메일 발송 버튼',
        ],
        notes: '',
      },
    ],
  },
  {
    group: '약관',
    color: '#94A3B8',
    bg: '#F8FAFC',
    items: [
      {
        id: 'U-17',
        name: '약관/개인정보처리방침',
        url: '/terms',
        desc: '이용약관 및 개인정보처리방침 페이지',
        components: [
          '탭 전환 (이용약관 / 개인정보처리방침)',
          '전문 텍스트 표시',
          '인쇄 버튼',
        ],
        notes: '관리자에서 수정한 내용이 반영됨.',
      },
    ],
  },
]

export default function UserDocsPage() {
  const totalScreens = screens.reduce((acc, g) => acc + g.items.length, 0)

  return (
    <div className="min-h-screen bg-[#F9F7F4]">
      {/* Header */}
      <div className="bg-[#0B1B2F] text-white">
        <div className="max-w-5xl mx-auto px-8 py-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Link href="/docs" className="text-xs text-stone-400 hover:text-white">← 목록으로</Link>
                <span className="text-stone-600">|</span>
                <span className="text-xs text-stone-400">EnglishPro</span>
              </div>
              <h1 className="text-2xl font-bold mb-1">사용자 화면 구성서</h1>
              <p className="text-stone-400 text-sm">User Screen Specification</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-[#E8A43A]">{totalScreens}</div>
              <div className="text-xs text-stone-400 mt-1">총 화면 수</div>
            </div>
          </div>
          {/* Summary chips */}
          <div className="flex flex-wrap gap-2 mt-6">
            {screens.map((g) => (
              <span key={g.group} className="text-[11px] px-2.5 py-1 bg-white/10 rounded-full">
                {g.group} {g.items.length}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Meta Info */}
      <div className="max-w-5xl mx-auto px-8 py-4">
        <div className="flex flex-wrap gap-6 text-xs text-stone-500 border-b border-stone-200 pb-4 mt-2">
          <span>프로젝트: EnglishPro 영어 강의 플랫폼</span>
          <span>작성일: 2025년 4월</span>
          <span>버전: v1.0 (의뢰자 제출용 초안)</span>
          <span>프레임워크: Next.js 15 App Router</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-8 pb-16">
        {screens.map((group) => (
          <div key={group.group} className="mb-12">
            {/* Group Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 rounded-full" style={{ backgroundColor: group.color }} />
              <h2 className="font-bold text-[#0B1B2F] text-base">{group.group}</h2>
              <span className="text-xs text-stone-400">{group.items.length}개 화면</span>
            </div>

            {/* Screen Cards */}
            <div className="space-y-4">
              {group.items.map((screen) => (
                <div
                  key={screen.id}
                  className="bg-white rounded-2xl border border-stone-100 overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between px-6 py-4 border-b border-stone-50">
                    <div className="flex items-center gap-3">
                      <span
                        className="text-[10px] font-bold px-2.5 py-1 rounded-lg"
                        style={{ backgroundColor: group.bg, color: group.color }}
                      >
                        {screen.id}
                      </span>
                      <div>
                        <h3 className="font-bold text-[#0B1B2F]">{screen.name}</h3>
                        <p className="text-xs text-stone-400 mt-0.5">{screen.desc}</p>
                      </div>
                    </div>
                    <code
                      className="text-[11px] px-2.5 py-1 rounded-lg font-mono shrink-0 ml-4"
                      style={{ backgroundColor: group.bg, color: group.color }}
                    >
                      {screen.url}
                    </code>
                  </div>

                  {/* Components */}
                  <div className="px-6 py-4">
                    <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2.5">구성 요소</div>
                    <div className="grid gap-1.5">
                      {screen.components.map((comp, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm text-stone-600">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                            style={{ backgroundColor: group.color }}
                          />
                          {comp}
                        </div>
                      ))}
                    </div>
                    {screen.notes && (
                      <div className="mt-3 pt-3 border-t border-stone-50">
                        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">비고  </span>
                        <span className="text-xs text-stone-500">{screen.notes}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-stone-200 bg-white">
        <div className="max-w-5xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="text-xs text-stone-400">
            EnglishPro 영어 강의 플랫폼 · 사용자 화면 구성서 v1.0
          </div>
          <Link
            href="/docs/admin"
            className="text-xs text-[#E8A43A] font-semibold hover:underline"
          >
            관리자 화면 구성서 보기 →
          </Link>
        </div>
      </div>
    </div>
  )
}
