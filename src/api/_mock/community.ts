export type Notice = {
  id: string
  title: string
  content: string
  date: string
  isPinned?: boolean
  category: string
}

export type FaqItem = {
  id: string
  question: string
  answer: string
  category: string
}

export type Review = {
  id: string
  name: string
  avatar: string
  course: string
  rating: number
  comment: string
  date: string
  helpful: number
}

export type InquiryItem = {
  id: string
  title: string
  status: 'answered' | 'pending'
  date: string
  answer?: string
}

export const mockNotices: Notice[] = [
  {
    id: '1',
    title: '[필독] 2025년 새로운 강의 커리큘럼 안내',
    content: '안녕하세요, EnglishPro 운영팀입니다. 2025년 새롭게 개편된 강의 커리큘럼을 안내드립니다...',
    date: '2025-03-15',
    isPinned: true,
    category: '공지',
  },
  {
    id: '2',
    title: '토스페이먼츠 결제 시스템 업그레이드 안내',
    content: '더욱 안전하고 빠른 결제를 위해 토스페이먼츠 결제 시스템을 업그레이드합니다...',
    date: '2025-03-10',
    isPinned: true,
    category: '시스템',
  },
  {
    id: '3',
    title: '3월 신규 강의 오픈 안내 — 영어 면접 완성',
    content: 'English for Job Interviews 강의가 새롭게 오픈되었습니다. 초기 수강생 30% 할인 혜택...',
    date: '2025-03-01',
    category: '강의',
  },
  {
    id: '4',
    title: '수강 후기 이벤트 안내 — 스타벅스 기프티콘 증정',
    content: '후기 작성 시 추첨을 통해 스타벅스 기프티콘을 증정합니다. 자세한 내용은...',
    date: '2025-02-20',
    category: '이벤트',
  },
  {
    id: '5',
    title: '설 연휴 고객센터 운영 안내',
    content: '설 연휴(2/8~2/10)동안 고객센터 운영이 제한됩니다...',
    date: '2025-02-05',
    category: '공지',
  },
  {
    id: '6',
    title: '2024년 수료증 발급 시스템 오픈',
    content: '강의 완강 후 수료증 발급이 가능해졌습니다. 마이페이지 > 내 강의실에서 확인하세요...',
    date: '2025-01-15',
    category: '시스템',
  },
]

export const mockFaqs: FaqItem[] = [
  {
    id: '1',
    question: '수강 기간이 얼마나 되나요?',
    answer:
      '모든 강의는 결제 후 평생 수강이 가능합니다. 언제든지 원하실 때 다시 돌아와서 복습하실 수 있어요.',
    category: '수강',
  },
  {
    id: '2',
    question: '환불은 어떻게 받을 수 있나요?',
    answer:
      '결제 후 7일 이내, 강의 수강 진도율 10% 미만인 경우 전액 환불이 가능합니다. 마이페이지 > 주문/결제 내역에서 신청하시거나 1:1 문의를 남겨주세요.',
    category: '환불',
  },
  {
    id: '3',
    question: '강의를 모바일에서도 볼 수 있나요?',
    answer:
      '네, 스마트폰과 태블릿 등 모바일 기기에서도 최적화된 화면으로 수강하실 수 있습니다.',
    category: '수강',
  },
  {
    id: '4',
    question: '수료증은 어떻게 받나요?',
    answer:
      '강의를 100% 완강하시면 자동으로 수료증이 발급됩니다. 마이페이지 > 내 강의실 > 수강완료 탭에서 PDF로 다운받으실 수 있어요.',
    category: '수료증',
  },
  {
    id: '5',
    question: '결제 수단은 어떤 것들이 있나요?',
    answer:
      '신용카드, 체크카드, 카카오페이, 네이버페이, 토스페이, 무통장 입금 등 다양한 결제 수단을 지원합니다. 토스페이먼츠를 통해 안전하게 처리됩니다.',
    category: '결제',
  },
  {
    id: '6',
    question: '강의 관련 질문은 어떻게 남기나요?',
    answer:
      '각 강의 상세 페이지 하단의 Q&A 섹션을 이용하시거나, 1:1 문의를 통해 직접 강사에게 질문하실 수 있습니다. 보통 24시간 이내에 답변 드립니다.',
    category: '문의',
  },
  {
    id: '7',
    question: '쿠폰은 어떻게 사용하나요?',
    answer:
      '결제 페이지에서 쿠폰 코드를 입력하시면 자동으로 할인이 적용됩니다. 보유 쿠폰은 마이페이지 > 쿠폰/포인트에서 확인하실 수 있어요.',
    category: '쿠폰',
  },
  {
    id: '8',
    question: '여러 강의를 같이 구매할 수 있나요?',
    answer:
      '네, 장바구니에 여러 강의를 담아 한 번에 결제하실 수 있습니다. 2개 이상 구매 시 추가 할인 혜택도 제공됩니다.',
    category: '결제',
  },
]

export const mockCommunityReviews: Review[] = [
  {
    id: '1',
    name: '김민지',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80',
    course: 'Business English Mastery',
    rating: 5,
    comment:
      '비즈니스 이메일 쓰는 시간이 절반으로 줄었어요. 패턴이 명확해서 바로 실무에 적용할 수 있었습니다. 강의 내용이 알차고 Sarah 선생님 설명이 정말 쉬워요.',
    date: '2025-03-10',
    helpful: 24,
  },
  {
    id: '2',
    name: '이준혁',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80',
    course: 'IELTS 7.0+ 완전정복',
    rating: 5,
    comment:
      'IELTS 6.0에서 7.5로 올렸습니다! Writing Task 2 전략이 특히 탁월했어요. 고득점 표현을 체계적으로 배울 수 있어서 실력 향상이 확실히 느껴졌습니다.',
    date: '2025-03-05',
    helpful: 31,
  },
  {
    id: '3',
    name: '박수연',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
    course: '영어 발음 교정 완성',
    rating: 5,
    comment:
      '발음 때문에 항상 자신이 없었는데 30일 만에 정말 달라졌어요. 미국인 친구가 발음이 좋아졌다고 먼저 얘기해줬을 때 너무 기뻤습니다.',
    date: '2025-02-28',
    helpful: 19,
  },
  {
    id: '4',
    name: '최동현',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
    course: 'English for Job Interviews',
    rating: 5,
    comment:
      '외국계 컨설팅 최종 합격! STAR 기법으로 경험을 논리적으로 영어로 전달하는 방법을 배웠어요. 이 강의 없었으면 합격 못 했을 것 같습니다.',
    date: '2025-02-20',
    helpful: 45,
  },
  {
    id: '5',
    name: '정혜린',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80',
    course: '일상 영어 회화',
    rating: 4,
    comment:
      '여행가서 처음으로 외국인과 자연스럽게 대화했어요! 실제 상황에 맞는 표현들이 많아서 실용적입니다. 다음 강의도 기대됩니다.',
    date: '2025-02-15',
    helpful: 12,
  },
  {
    id: '6',
    name: '강태양',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80',
    course: '영어 글쓰기 완성',
    rating: 4,
    comment:
      '에세이 쓰는 방법을 처음부터 체계적으로 배울 수 있었어요. 문장 구조 이해가 많이 됐습니다. 예제가 더 많으면 좋겠지만 전반적으로 매우 만족합니다.',
    date: '2025-02-10',
    helpful: 8,
  },
]
