export type Event = {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  discountRate: number
  endDate: string
  badge: string
  badgeColor: string
  isHot?: boolean
}

export const mockEvents: Event[] = [
  {
    id: '1',
    title: '봄맞이 특가 — 전 강의 최대 40% 할인',
    subtitle: '4월 한 달 동안 진행되는 특별 프로모션',
    description:
      '따뜻한 봄을 맞이해 전 강의를 최대 40% 할인합니다. 지금이 바로 영어 공부를 시작할 최고의 기회!',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    discountRate: 40,
    endDate: '2025-04-30',
    badge: '진행중',
    badgeColor: '#E8A43A',
    isHot: true,
  },
  {
    id: '2',
    title: 'IELTS 패키지 — 2강 묶음 30% 추가 할인',
    subtitle: 'IELTS + Business English 세트 구매 시',
    description:
      'IELTS 완전정복과 비즈니스 영어 마스터리를 함께 구매하면 30% 추가 할인 혜택을 드립니다.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
    discountRate: 30,
    endDate: '2025-04-15',
    badge: '한정',
    badgeColor: '#E53E3E',
    isHot: true,
  },
  {
    id: '3',
    title: '신규 회원 첫 구매 20% 쿠폰 증정',
    subtitle: '회원가입 즉시 쿠폰 지급',
    description:
      '지금 회원가입하시면 모든 강의에 사용 가능한 20% 할인 쿠폰을 즉시 드립니다.',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
    discountRate: 20,
    endDate: '상시',
    badge: '상시',
    badgeColor: '#38A169',
  },
  {
    id: '4',
    title: '수강 후기 작성 시 포인트 2배 적립',
    subtitle: '리뷰 남기고 다음 강의 할인받으세요',
    description:
      '강의 완강 후 후기를 작성하시면 포인트를 2배 적립해 드립니다. 적립 포인트는 다음 구매 시 현금처럼 사용 가능합니다.',
    image: 'https://images.unsplash.com/photo-1553484771-047a44eee27b?w=800&q=80',
    discountRate: 0,
    endDate: '2025-05-31',
    badge: '적립',
    badgeColor: '#805AD5',
  },
]
