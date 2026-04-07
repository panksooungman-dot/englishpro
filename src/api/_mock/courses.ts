export type Course = {
  id: string
  title: string
  subtitle: string
  instructor: string
  instructorTitle: string
  price: number
  originalPrice: number
  thumbnail: string
  category: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  lessons: number
  students: number
  rating: number
  reviews: number
  tags: string[]
  description: string
  curriculum: CurriculumSection[]
  isBestseller?: boolean
  isNew?: boolean
}

export type CurriculumSection = {
  title: string
  lessons: CurriculumLesson[]
}

export type CurriculumLesson = {
  title: string
  duration: string
  isFree?: boolean
}

export type Testimonial = {
  id: string
  name: string
  avatar: string
  course: string
  rating: number
  comment: string
  job: string
}

export type Instructor = {
  name: string
  title: string
  bio: string
  photo: string
  students: number
  courses: number
  rating: number
  specialties: string[]
}

export const mockInstructor: Instructor = {
  name: 'Sarah Mitchell',
  title: 'TESOL Certified English Coach',
  bio: '10년 이상의 영어 교육 경력을 가진 TESOL 공인 강사입니다. 글로벌 기업 임원, 취업 준비생, 일상 영어를 원하는 분들까지 5,000명 이상을 코칭했습니다. 실전에서 바로 쓸 수 있는 영어를 가르치는 것이 저의 철학입니다.',
  photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
  students: 5200,
  courses: 8,
  rating: 4.9,
  specialties: ['Business English', 'IELTS/TOEFL', 'Pronunciation', 'Conversation'],
}

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Business English Mastery',
    subtitle: '글로벌 비즈니스 환경에서 자신있게 영어로 소통하세요',
    instructor: 'Sarah Mitchell',
    instructorTitle: 'TESOL Certified English Coach',
    price: 89000,
    originalPrice: 130000,
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    category: 'Business',
    level: 'Intermediate',
    duration: '24시간',
    lessons: 64,
    students: 3240,
    rating: 4.8,
    reviews: 312,
    isBestseller: true,
    tags: ['Business', 'Email', 'Presentation', 'Meeting'],
    description:
      '이메일 작성, 회의 진행, 프레젠테이션까지 — 실전 비즈니스 영어의 모든 것을 담았습니다. 실제 직장에서 쓰는 표현과 패턴을 중심으로 배우기 때문에 수강 즉시 업무에 활용할 수 있습니다.',
    curriculum: [
      {
        title: '1강. 비즈니스 이메일의 기본',
        lessons: [
          { title: '오리엔테이션 & 강의 소개', duration: '5:00', isFree: true },
          { title: '프로페셔널한 이메일 시작하기', duration: '12:30', isFree: true },
          { title: '용건 전달하기 — 핵심 패턴 20선', duration: '18:45' },
          { title: '정중한 거절·요청 표현', duration: '15:20' },
          { title: '이메일 마무리 & 서명', duration: '10:00' },
        ],
      },
      {
        title: '2강. 회의 & 컨퍼런스콜',
        lessons: [
          { title: '회의 시작하기', duration: '14:00' },
          { title: '의견 제시 & 반박하기', duration: '16:30' },
          { title: '결론 내리기 & 다음 단계 논의', duration: '12:00' },
          { title: '영상회의 에티켓', duration: '9:45' },
        ],
      },
      {
        title: '3강. 프레젠테이션 영어',
        lessons: [
          { title: '오프닝으로 청중 사로잡기', duration: '20:00' },
          { title: '데이터 & 그래프 설명하기', duration: '17:15' },
          { title: 'Q&A 세션 완벽 대응', duration: '14:30' },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'IELTS 7.0+ 완전정복',
    subtitle: '체계적인 전략으로 목표 점수를 확실히 달성하세요',
    instructor: 'Sarah Mitchell',
    instructorTitle: 'TESOL Certified English Coach',
    price: 119000,
    originalPrice: 160000,
    thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
    category: 'IELTS',
    level: 'Advanced',
    duration: '36시간',
    lessons: 92,
    students: 2180,
    rating: 4.9,
    reviews: 247,
    isBestseller: true,
    tags: ['IELTS', 'Writing', 'Speaking', 'Reading', 'Listening'],
    description:
      'IELTS 밴드 7.0 이상을 목표로 하는 수험생을 위한 전략 과정입니다. Listening, Reading, Writing, Speaking 4개 영역별 핵심 전략과 실전 모의고사를 통해 확실한 점수 향상을 경험하세요.',
    curriculum: [
      {
        title: '1강. IELTS 시험 전략',
        lessons: [
          { title: 'IELTS vs TOEFL 차이점', duration: '8:00', isFree: true },
          { title: '점수 산출 방식 이해하기', duration: '10:00', isFree: true },
          { title: '영역별 학습 로드맵', duration: '15:00' },
        ],
      },
      {
        title: '2강. Writing Task 1 & 2',
        lessons: [
          { title: 'Task 1 — 그래프·차트 묘사 전략', duration: '22:00' },
          { title: 'Task 2 — 에세이 구조 완성', duration: '25:00' },
          { title: '고득점 표현 100선', duration: '18:00' },
        ],
      },
      {
        title: '3강. Speaking 실전 훈련',
        lessons: [
          { title: 'Part 1 — 자기소개 & 일상 질문', duration: '20:00' },
          { title: 'Part 2 — 2분 스피치 전략', duration: '24:00' },
          { title: 'Part 3 — 추상적 토론 답변법', duration: '22:00' },
        ],
      },
    ],
  },
  {
    id: '3',
    title: '영어 발음 교정 완성',
    subtitle: '원어민처럼 자연스러운 발음, 30일 안에 만들어드립니다',
    instructor: 'Sarah Mitchell',
    instructorTitle: 'TESOL Certified English Coach',
    price: 69000,
    originalPrice: 95000,
    thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80',
    category: 'Pronunciation',
    level: 'Beginner',
    duration: '15시간',
    lessons: 40,
    students: 4560,
    rating: 4.7,
    reviews: 524,
    isNew: false,
    tags: ['Pronunciation', 'Accent', 'Intonation', 'Rhythm'],
    description:
      '한국인이 가장 어려워하는 영어 발음을 집중 교정합니다. 자음·모음 소리 만들기부터 강세, 억양, 연음까지 — 체계적인 30일 플랜으로 자신감 있는 발음을 만들어 드립니다.',
    curriculum: [
      {
        title: '1강. 기초 발음 원리',
        lessons: [
          { title: '입 모양과 혀 위치의 모든 것', duration: '12:00', isFree: true },
          { title: '한국어와 다른 영어 모음 8가지', duration: '15:00' },
          { title: 'R vs L, B vs V 완벽 구분', duration: '18:00' },
        ],
      },
      {
        title: '2강. 강세 & 억양',
        lessons: [
          { title: '단어 강세 규칙', duration: '14:00' },
          { title: '문장 강세 & 리듬 만들기', duration: '20:00' },
          { title: '질문 vs 서술문 억양 차이', duration: '12:00' },
        ],
      },
    ],
  },
  {
    id: '4',
    title: '일상 영어 회화 — 기초부터 유창함까지',
    subtitle: '외국인 앞에서 말문이 막히지 않도록',
    instructor: 'Sarah Mitchell',
    instructorTitle: 'TESOL Certified English Coach',
    price: 59000,
    originalPrice: 80000,
    thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    category: 'Conversation',
    level: 'Beginner',
    duration: '18시간',
    lessons: 52,
    students: 6120,
    rating: 4.8,
    reviews: 689,
    isNew: true,
    tags: ['Conversation', 'Daily English', 'Travel', 'Speaking'],
    description:
      '일상생활, 여행, SNS 소통까지 — 실생활에서 자주 쓰는 표현 중심의 회화 코스입니다. 문법보다 실전 패턴을 반복 훈련하여 자연스러운 대화를 만들어 드립니다.',
    curriculum: [
      {
        title: '1강. 첫 만남 & 자기소개',
        lessons: [
          { title: '자기소개 15가지 패턴', duration: '10:00', isFree: true },
          { title: '스몰토크 완전정복', duration: '14:00' },
          { title: '감사·사과·칭찬 표현', duration: '12:00' },
        ],
      },
      {
        title: '2강. 여행 영어',
        lessons: [
          { title: '공항 & 출입국 영어', duration: '16:00' },
          { title: '호텔 & 레스토랑 영어', duration: '18:00' },
          { title: '쇼핑 & 교통 영어', duration: '14:00' },
        ],
      },
    ],
  },
  {
    id: '5',
    title: '영어 글쓰기 — 에세이부터 SNS까지',
    subtitle: '영어로 생각을 정확하게 전달하는 Writing 완성 코스',
    instructor: 'Sarah Mitchell',
    instructorTitle: 'TESOL Certified English Coach',
    price: 79000,
    originalPrice: 110000,
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
    category: 'Writing',
    level: 'Intermediate',
    duration: '20시간',
    lessons: 55,
    students: 1890,
    rating: 4.6,
    reviews: 198,
    tags: ['Writing', 'Essay', 'Email', 'Grammar'],
    description:
      '영어 글쓰기의 기초 문장 구조부터 논리적인 에세이 작성, 업무 이메일, SNS 콘텐츠까지 다양한 영작 스킬을 체계적으로 배웁니다.',
    curriculum: [
      {
        title: '1강. 문장 구조의 원리',
        lessons: [
          { title: '영어 문장의 뼈대 이해', duration: '12:00', isFree: true },
          { title: '문장 연결하기 — 접속사 완전정복', duration: '16:00' },
          { title: '수동태·능동태 전략적 사용', duration: '14:00' },
        ],
      },
      {
        title: '2강. 단락 & 에세이 쓰기',
        lessons: [
          { title: '단락의 구조 — 주제문·뒷받침·결론', duration: '18:00' },
          { title: '5단락 에세이 완성', duration: '24:00' },
          { title: '논거 강화하기 & 퇴고 전략', duration: '20:00' },
        ],
      },
    ],
  },
  {
    id: '6',
    title: 'English for Job Interviews',
    subtitle: '외국계·글로벌 기업 취업 면접을 완벽하게 준비하세요',
    instructor: 'Sarah Mitchell',
    instructorTitle: 'TESOL Certified English Coach',
    price: 99000,
    originalPrice: 140000,
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80',
    category: 'Business',
    level: 'Intermediate',
    duration: '22시간',
    lessons: 58,
    students: 2340,
    rating: 4.9,
    reviews: 276,
    isNew: true,
    tags: ['Interview', 'Career', 'Business', 'HR'],
    description:
      '외국계 기업, 글로벌 스타트업 취업을 목표로 하는 분을 위한 영어 면접 완성 코스입니다. 자기소개, 경험 STAR 기법, 압박 면접 대응까지 실전 시뮬레이션으로 준비합니다.',
    curriculum: [
      {
        title: '1강. 면접 영어 기본기',
        lessons: [
          { title: '영어 자기소개 3가지 버전', duration: '15:00', isFree: true },
          { title: '왜 우리 회사인가 — 답변 전략', duration: '12:00' },
          { title: '강점·약점 영어로 말하기', duration: '14:00' },
        ],
      },
      {
        title: '2강. 경험 말하기 — STAR 기법',
        lessons: [
          { title: 'STAR 기법이란?', duration: '10:00' },
          { title: '리더십 경험 영어로 표현하기', duration: '18:00' },
          { title: '문제 해결 사례 스토리텔링', duration: '20:00' },
        ],
      },
    ],
  },
]

export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: '김지현',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    course: 'Business English Mastery',
    rating: 5,
    job: '외국계 IT기업 마케팅 매니저',
    comment:
      'Sarah 선생님 덕분에 영어 이메일 쓰는 시간이 절반으로 줄었어요. 특히 비즈니스 표현 패턴이 실무에서 바로 쓸 수 있어서 너무 좋았습니다. 강의 퀄리티가 정말 압도적이에요.',
  },
  {
    id: '2',
    name: '박성민',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    course: 'IELTS 7.0+ 완전정복',
    rating: 5,
    job: '대학원 유학 준비생',
    comment:
      'IELTS 6.0에서 7.5로 올렸습니다! Writing 전략이 특히 탁월해요. 에세이 구조부터 고득점 표현까지 정말 체계적으로 가르쳐 주셔서 합격 발표 받고 바로 리뷰 쓰러 왔어요.',
  },
  {
    id: '3',
    name: '이수진',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    course: '영어 발음 교정 완성',
    rating: 5,
    job: '프리랜서 영어 통역사',
    comment:
      '발음 때문에 항상 자신이 없었는데 30일 만에 정말 달라졌어요. 원어민 동료가 발음이 좋아졌다고 먼저 얘기해줬을 때 너무 기뻤습니다. 강력 추천합니다!',
  },
  {
    id: '4',
    name: '최동훈',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    course: 'English for Job Interviews',
    rating: 5,
    job: '글로벌 컨설팅 신입',
    comment:
      '외국계 컨설팅 최종 합격했습니다! 면접 준비하면서 STAR 기법 덕분에 경험을 논리적으로 영어로 전달할 수 있게 됐어요. 이 강의 없었으면 합격 못 했을 것 같아요.',
  },
]
