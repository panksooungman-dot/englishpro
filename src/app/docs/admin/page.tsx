import Link from 'next/link'

const screens = [
  {
    group: '대시보드',
    color: '#E8A43A',
    bg: '#FEF3C7',
    items: [
      {
        id: 'A-01',
        name: '관리자 대시보드',
        url: '/admin',
        desc: '사이트 운영 현황 한눈에 보기',
        components: [
          'KPI 카드 — 이번달 매출 / 신규 회원 / 활성 강의 / 신규 주문',
          '주간 매출 막대 차트 (최근 7일)',
          '최근 주문 목록 — 주문번호/회원/강의/금액/상태',
          '신규 회원 목록 — 이름/이메일/가입일',
          '빠른 이동 바로가기 버튼 (강의등록/공지작성/쿠폰생성)',
        ],
        notes: '로그인한 관리자만 접근 가능. 사이드바 + 상단 헤더 레이아웃.',
        access: '관리자 전용',
      },
    ],
  },
  {
    group: '강의 관리',
    color: '#3B82F6',
    bg: '#EFF6FF',
    items: [
      {
        id: 'A-02',
        name: '강의 목록',
        url: '/admin/courses',
        desc: '전체 강의 조회 및 상태 관리',
        components: [
          '카테고리 / 상태 필터 드롭다운',
          '강의명 검색바',
          '강의 테이블 — 제목/카테고리/가격/수강생/평점/레슨수/상태',
          '상태 뱃지 (판매중/비공개/준비중)',
          '강의별 액션 — 보기/수정/삭제',
          '페이지네이션',
        ],
        notes: '강의 등록 버튼으로 A-03 이동.',
        access: '관리자 전용',
      },
      {
        id: 'A-03',
        name: '강의 등록/수정',
        url: '/admin/courses/register',
        desc: '새 강의 등록 또는 기존 강의 수정 폼',
        components: [
          '기본 정보 — 제목/설명/카테고리/난이도',
          '가격 설정 — 정가/할인가',
          '수강 후 배울 내용 — 동적 리스트 입력',
          '태그 입력 (Enter로 추가)',
          '썸네일 이미지 업로드',
          '샘플 영상 URL 또는 업로드',
          '공개 상태 선택 (판매중/비공개/준비중)',
          '등록 / 임시저장 버튼',
        ],
        notes: 'URL에 ?id= 파라미터 존재 시 수정 모드로 동작.',
        access: '관리자 전용',
      },
      {
        id: 'A-04',
        name: '챕터/레슨 관리',
        url: '/admin/courses/chapters',
        desc: '강의 커리큘럼 구성 페이지',
        components: [
          '강의 선택 드롭다운',
          '챕터 목록 — 드래그 순서 변경',
          '챕터 내 레슨 목록 — 레슨명/재생시간/무료여부',
          '챕터 추가 / 레슨 추가 버튼',
          '챕터·레슨 수정/삭제',
        ],
        notes: '드래그 앤 드롭으로 순서 변경 가능 (UI 시안 수준).',
        access: '관리자 전용',
      },
      {
        id: 'A-05',
        name: '샘플영상 관리',
        url: '/admin/courses/samples',
        desc: '강의별 무료 체험 영상 등록/관리',
        components: [
          '샘플 목록 — 강의명/영상 제목/재생시간/조회수/상태',
          '게시/비게시 상태 전환',
          '샘플 추가 버튼',
          '수정/삭제 액션',
        ],
        notes: '강의 상세 페이지에서 미리보기로 표시됨.',
        access: '관리자 전용',
      },
    ],
  },
  {
    group: '카테고리 관리',
    color: '#10B981',
    bg: '#ECFDF5',
    items: [
      {
        id: 'A-06',
        name: '카테고리 관리',
        url: '/admin/categories',
        desc: '강의 분류 카테고리 추가/수정/삭제',
        components: [
          '카테고리 목록 — 이름/슬러그/색상/강의수',
          '드래그 순서 변경',
          '카테고리 수정/삭제 (강의가 있으면 삭제 불가)',
          '새 카테고리 추가 폼 — 이름/슬러그/설명',
        ],
        notes: '강의 필터에 반영됨.',
        access: '관리자 전용',
      },
    ],
  },
  {
    group: '회원 관리',
    color: '#8B5CF6',
    bg: '#F5F3FF',
    items: [
      {
        id: 'A-07',
        name: '회원 목록',
        url: '/admin/members',
        desc: '전체 회원 조회 및 정보 확인',
        components: [
          '이름/이메일 검색바',
          '상태 필터 (정상/정지)',
          '회원 테이블 — 이름/이메일/가입일/수강수/총결제/상태',
          '회원별 액션 — 상세보기/메일발송/정지',
          '페이지네이션',
        ],
        notes: '',
        access: '관리자 전용',
      },
      {
        id: 'A-08',
        name: '수강 현황',
        url: '/admin/members/enrollments',
        desc: '회원별 강의 수강 진도 현황',
        components: [
          '회원명/강의명 검색',
          '수강 상태 필터 (수강중/수강완료/중단)',
          '수강 테이블 — 회원/강의/등록일/진도율/최근접속/상태',
          '진도율 프로그레스바',
        ],
        notes: '',
        access: '관리자 전용',
      },
      {
        id: 'A-09',
        name: '제재/권한 관리',
        url: '/admin/members/permissions',
        desc: '회원 제재(경고/정지) 처리 페이지',
        components: [
          '상태 요약 카드 (정상/경고/정지 회원 수)',
          '제재 대상 회원 목록',
          '제재 사유 표시',
          '제재 해제 / 정지 버튼',
        ],
        notes: '정지된 회원은 로그인 불가 처리.',
        access: '관리자 전용',
      },
    ],
  },
  {
    group: '주문/결제 관리',
    color: '#EF4444',
    bg: '#FEF2F2',
    items: [
      {
        id: 'A-10',
        name: '주문 목록',
        url: '/admin/orders',
        desc: '전체 주문 내역 조회 페이지',
        components: [
          '주문번호/회원명 검색',
          '상태 필터 / 날짜 범위 필터',
          '주문 테이블 — 주문번호/회원/강의/금액/결제수단/상태/날짜',
          '환불요청 건수 알림 배지',
          '페이지네이션',
        ],
        notes: '',
        access: '관리자 전용',
      },
      {
        id: 'A-11',
        name: '결제 상태 관리',
        url: '/admin/orders/payments',
        desc: 'PG사 결제 내역 확인 페이지',
        components: [
          '오늘 결제 요약 카드 (승인/대기/환불)',
          '결제 테이블 — 결제ID/주문번호/회원/금액/결제수단/PG거래ID/상태',
          'Toss Payments 거래 ID 표시',
        ],
        notes: 'Toss Payments 대시보드와 거래 ID로 연계 조회 가능.',
        access: '관리자 전용',
      },
      {
        id: 'A-12',
        name: '취소/환불 관리',
        url: '/admin/orders/refunds',
        desc: '환불 요청 검토 및 승인/거절 페이지',
        components: [
          '처리 대기 알림 배너',
          '환불 요청 카드 — 신청자/강의/금액/사유/요청일',
          '환불 승인 / 거절 버튼',
          '처리 완료 내역 조회',
        ],
        notes: '환불 승인 시 Toss Payments API로 실제 취소 요청 전송 (추후 연동).',
        access: '관리자 전용',
      },
      {
        id: 'A-13',
        name: '영수증/거래 조회',
        url: '/admin/orders/receipts',
        desc: '결제 영수증 발행 및 거래 조회',
        components: [
          '영수증번호/회원명/거래ID 검색',
          '날짜 범위 선택',
          '영수증 테이블 — 번호/회원/강의/금액/부가세/거래ID/날짜',
          'PDF 다운로드 버튼',
        ],
        notes: '',
        access: '관리자 전용',
      },
    ],
  },
  {
    group: '쿠폰/프로모션',
    color: '#F59E0B',
    bg: '#FFFBEB',
    items: [
      {
        id: 'A-14',
        name: '쿠폰/프로모션',
        url: '/admin/coupons',
        desc: '쿠폰 코드 생성 및 발급 현황 관리',
        components: [
          '쿠폰 목록 카드 — 쿠폰명/코드/할인내용/사용수/만료일/상태',
          '사용 비율 프로그레스바',
          '코드 복사 버튼',
          '쿠폰 생성 폼 — 이름/코드/유형(정액·정률)/할인값/수량/만료일',
        ],
        notes: '사용자 결제 시 코드 입력으로 적용.',
        access: '관리자 전용',
      },
    ],
  },
  {
    group: '게시판 관리',
    color: '#06B6D4',
    bg: '#ECFEFF',
    items: [
      {
        id: 'A-15',
        name: '공지사항 관리',
        url: '/admin/board/notices',
        desc: '공지 작성/수정/삭제 페이지',
        components: [
          '공지 작성 폼 — 제목/내용/상단고정 여부',
          '게시 / 임시저장 버튼',
          '공지 목록 — 제목/날짜/조회수/상태',
          '핀(상단고정) 아이콘 표시',
          '수정/삭제 액션',
        ],
        notes: '상단 고정 최대 3개 권장.',
        access: '관리자 전용',
      },
      {
        id: 'A-16',
        name: 'FAQ 관리',
        url: '/admin/board/faq',
        desc: '자주 묻는 질문 등록/수정/삭제',
        components: [
          'FAQ 카드 목록 — 카테고리/질문/답변/조회수/상태',
          '카테고리 뱃지',
          'FAQ 추가 버튼',
          '수정/삭제 액션',
        ],
        notes: '등록한 FAQ는 /community/faq 페이지에 표시.',
        access: '관리자 전용',
      },
      {
        id: 'A-17',
        name: '리뷰 관리',
        url: '/admin/board/reviews',
        desc: '수강생 리뷰 게시/숨김 처리 페이지',
        components: [
          '리뷰 통계 (전체/게시/숨김)',
          '리뷰 카드 — 회원/강의/별점/내용/날짜/상태',
          '게시/숨김 상태 전환',
          '답글 달기 버튼',
          '삭제 버튼',
        ],
        notes: '숨김 처리된 리뷰는 사용자 화면에 미노출.',
        access: '관리자 전용',
      },
      {
        id: 'A-18',
        name: '1:1 문의 관리',
        url: '/admin/board/inquiries',
        desc: '회원 문의 확인 및 답변 처리',
        components: [
          '대기 중인 문의 수 표시',
          '문의 카드 — 제목/회원/내용/접수일/상태',
          '대기 문의 주황 테두리 강조',
          '답변 입력 텍스트에리어',
          '답변하기 버튼',
        ],
        notes: '답변 완료 시 회원 이메일로 알림 발송 (PG 설정 필요).',
        access: '관리자 전용',
      },
    ],
  },
  {
    group: '배너/팝업 관리',
    color: '#EC4899',
    bg: '#FDF2F8',
    items: [
      {
        id: 'A-19',
        name: '배너/팝업 관리',
        url: '/admin/banners',
        desc: '메인 배너 및 팝업 등록/관리 페이지',
        components: [
          '배너 목록 — 이름/유형(메인·팝업·상단바)/기간/상태',
          '드래그 순서 변경',
          '게시/비게시 상태 전환',
          '배너 추가 폼 — 이름/유형/기간/연결URL/이미지업로드',
          '수정/삭제 액션',
        ],
        notes: '등록한 배너는 메인 홈 또는 팝업으로 표시.',
        access: '관리자 전용',
      },
    ],
  },
  {
    group: '통계/리포트',
    color: '#64748B',
    bg: '#F8FAFC',
    items: [
      {
        id: 'A-20',
        name: '통계/리포트',
        url: '/admin/stats',
        desc: '매출·회원·강의 통계 대시보드',
        components: [
          'KPI 카드 — 이번달 매출/주문/신규회원/활성강의 + 전월 대비 증감',
          '월별 매출 막대 차트 (최근 6개월)',
          '강의별 매출 비중 차트 (수평 프로그레스)',
          '회원 현황 — 총/신규/유료/재구매율',
          '결제 수단 비중',
        ],
        notes: '향후 실제 DB 연동 시 실시간 데이터로 대체.',
        access: '관리자 전용',
      },
    ],
  },
  {
    group: '운영 설정',
    color: '#0B1B2F',
    bg: '#F1F5F9',
    items: [
      {
        id: 'A-21',
        name: '사이트 기본정보',
        url: '/admin/settings',
        desc: '사이트명, 회사정보, 환불 정책 설정',
        components: [
          '브랜드 정보 — 사이트명/슬로건/SEO 설명',
          '회사 정보 — 상호/사업자번호/대표자/이메일/주소/고객센터',
          '환불 정책 — 환불 가능 기간(일)/수강률(%)',
          '설정 저장 버튼',
        ],
        notes: '설정 변경 시 프론트 화면에 즉시 반영.',
        access: '관리자 전용',
      },
      {
        id: 'A-22',
        name: '약관 관리',
        url: '/admin/settings/terms',
        desc: '이용약관 전문 편집 페이지',
        components: [
          '약관 본문 텍스트에리어 (원시 텍스트)',
          '최종 수정일 표시',
          '저장 버튼',
        ],
        notes: '저장 후 /terms 페이지에 즉시 반영.',
        access: '관리자 전용',
      },
      {
        id: 'A-23',
        name: '개인정보처리방침',
        url: '/admin/settings/privacy',
        desc: '개인정보처리방침 전문 편집 페이지',
        components: [
          '방침 본문 텍스트에리어',
          '최종 수정일 표시',
          '저장 버튼',
        ],
        notes: '저장 후 /terms?tab=privacy에 반영.',
        access: '관리자 전용',
      },
      {
        id: 'A-24',
        name: 'PG/알림 설정',
        url: '/admin/settings/pg',
        desc: 'Toss Payments 연동 및 알림 설정',
        components: [
          'Toss Payments — 클라이언트키/시크릿키/테스트모드 토글',
          '이메일 알림 설정 — 신규주문/환불요청/신규문의/신규회원 각각 토글',
          '알림 수신 이메일 주소',
          '설정 저장 버튼',
        ],
        notes: 'Toss Payments 실제 연동 시 프로덕션 키로 교체 필요.',
        access: '관리자 전용',
      },
    ],
  },
]

export default function AdminDocsPage() {
  const totalScreens = screens.reduce((acc, g) => acc + g.items.length, 0)

  return (
    <div className="min-h-screen bg-[#F4F6FA]">
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #0B1B2F 0%, #1a2f4a 100%)' }} className="text-white">
        <div className="max-w-5xl mx-auto px-8 py-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Link href="/docs" className="text-xs text-stone-400 hover:text-white">← 목록으로</Link>
                <span className="text-stone-600">|</span>
                <span className="text-xs text-stone-400">EnglishPro · 관리자</span>
              </div>
              <h1 className="text-2xl font-bold mb-1">관리자 화면 구성서</h1>
              <p className="text-stone-400 text-sm">Admin Screen Specification</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-[#E8A43A]">{totalScreens}</div>
              <div className="text-xs text-stone-400 mt-1">총 화면 수</div>
            </div>
          </div>
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
          <span>접근 경로: /admin/*</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-8 pb-16">
        {screens.map((group) => (
          <div key={group.group} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 rounded-full" style={{ backgroundColor: group.color }} />
              <h2 className="font-bold text-[#0B1B2F] text-base">{group.group}</h2>
              <span className="text-xs text-stone-400">{group.items.length}개 화면</span>
            </div>

            <div className="space-y-4">
              {group.items.map((screen) => (
                <div
                  key={screen.id}
                  className="bg-white rounded-2xl border border-stone-100 overflow-hidden"
                >
                  <div className="flex items-start justify-between px-6 py-4 border-b border-stone-50">
                    <div className="flex items-center gap-3">
                      <span
                        className="text-[10px] font-bold px-2.5 py-1 rounded-lg"
                        style={{ backgroundColor: group.bg, color: group.color }}
                      >
                        {screen.id}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-[#0B1B2F]">{screen.name}</h3>
                          <span className="text-[10px] px-1.5 py-0.5 bg-red-50 text-red-500 rounded font-semibold">{screen.access}</span>
                        </div>
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
            EnglishPro 영어 강의 플랫폼 · 관리자 화면 구성서 v1.0
          </div>
          <Link
            href="/docs/user"
            className="text-xs text-[#E8A43A] font-semibold hover:underline"
          >
            ← 사용자 화면 구성서 보기
          </Link>
        </div>
      </div>
    </div>
  )
}
