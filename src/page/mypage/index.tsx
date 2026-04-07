'use client'

import { motion } from 'motion/react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import {
  User,
  ShoppingBag,
  Tag,
  Heart,
  MessageSquare,
  ChevronRight,
  Star,
  Gift,
  CreditCard,
  Edit3,
} from 'lucide-react'
import { useCourse } from '@/state/course'
import { useCart } from '@/state/cart'

type Tab = 'profile' | 'orders' | 'coupon' | 'wishlist' | 'inquiries'

const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: 'profile', label: '내 정보', icon: User },
  { id: 'orders', label: '주문/결제 내역', icon: ShoppingBag },
  { id: 'coupon', label: '쿠폰/포인트', icon: Tag },
  { id: 'wishlist', label: '찜한 강의', icon: Heart },
  { id: 'inquiries', label: '문의 내역', icon: MessageSquare },
]

const mockOrders = [
  { id: 'ORD-001', title: 'Business English Mastery', price: 89000, date: '2025-03-10', status: '결제완료' },
  { id: 'ORD-002', title: 'IELTS 7.0+ 완전정복', price: 119000, date: '2025-02-15', status: '결제완료' },
  { id: 'ORD-003', title: '영어 발음 교정 완성', price: 69000, date: '2025-01-20', status: '결제완료' },
]

const mockCoupons = [
  { id: 'C001', name: '신규 가입 20% 할인', discount: '20%', expiry: '2025-06-30', used: false },
  { id: 'C002', name: '후기 작성 감사 쿠폰', discount: '5,000원', expiry: '2025-05-15', used: false },
  { id: 'C003', name: '시즌 할인 쿠폰', discount: '15%', expiry: '2025-03-01', used: true },
]

export default function MyPage() {
  const searchParams = useSearchParams()
  const currentTab = (searchParams.get('tab') as Tab) ?? 'profile'
  const { items } = useCourse((s) => ({ items: s.items }))
  const { wishlist } = useCart((s) => ({ wishlist: s.wishlist }))
  const wishlistCourses = items.filter((c) => wishlist.includes(c.id))

  return (
    <div className="min-h-screen bg-[#F9F7F4]">
      {/* Header */}
      <div className="bg-[#0B1B2F] text-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#E8A43A]/20 rounded-full flex items-center justify-center">
                <User className="w-7 h-7 text-[#E8A43A]" />
              </div>
              <div>
                <div className="text-xs text-[#E8A43A] font-semibold mb-0.5">My Page</div>
                <h1 className="text-2xl font-bold">홍길동 님</h1>
                <div className="text-stone-400 text-sm">user@example.com</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-2xl border border-stone-100 overflow-hidden">
              {tabs.map(({ id, label, icon: Icon }) => (
                <Link
                  key={id}
                  href={id === 'profile' ? '/mypage' : `/mypage?tab=${id}`}
                  className={`flex items-center gap-3 px-5 py-3.5 text-sm transition-colors border-b border-stone-50 last:border-b-0 ${
                    currentTab === id
                      ? 'bg-[#0B1B2F] text-white font-semibold'
                      : 'text-stone-600 hover:bg-stone-50 hover:text-[#0B1B2F]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {currentTab === 'profile' && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-8 border border-stone-100"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-bold text-[#0B1B2F] text-lg">내 정보</h2>
                  <button className="flex items-center gap-1.5 text-sm text-stone-500 hover:text-[#0B1B2F] transition-colors">
                    <Edit3 className="w-4 h-4" /> 수정
                  </button>
                </div>
                <div className="space-y-4">
                  {[
                    { label: '이름', value: '홍길동' },
                    { label: '이메일', value: 'user@example.com' },
                    { label: '연락처', value: '010-1234-5678' },
                    { label: '가입일', value: '2024-12-01' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center gap-4 py-3 border-b border-stone-50">
                      <span className="text-sm text-stone-500 w-20 shrink-0">{label}</span>
                      <span className="text-sm text-[#0B1B2F] font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {currentTab === 'orders' && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <h2 className="font-bold text-[#0B1B2F] text-lg mb-5">주문/결제 내역</h2>
                <div className="space-y-3">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="bg-white rounded-xl p-5 border border-stone-100 flex items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-stone-400 mb-1">{order.id} · {order.date}</div>
                        <div className="font-semibold text-[#0B1B2F] text-sm">{order.title}</div>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <span className="text-sm font-bold text-[#0B1B2F]">{order.price.toLocaleString()}원</span>
                        <span className="text-xs px-2.5 py-1 bg-green-50 text-green-700 rounded-full font-medium">{order.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-sm text-stone-500 text-center">
                  총 {mockOrders.reduce((s, o) => s + o.price, 0).toLocaleString()}원 결제
                </div>
              </motion.div>
            )}

            {currentTab === 'coupon' && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-bold text-[#0B1B2F] text-lg">쿠폰/포인트</h2>
                </div>
                {/* Points */}
                <div className="bg-[#0B1B2F] rounded-2xl p-6 text-white mb-6 flex items-center gap-5">
                  <Gift className="w-10 h-10 text-[#E8A43A]" />
                  <div>
                    <div className="text-stone-400 text-sm mb-1">보유 포인트</div>
                    <div className="text-3xl font-bold">2,500P</div>
                    <div className="text-stone-400 text-xs mt-1">1P = 1원, 결제 시 사용 가능</div>
                  </div>
                </div>
                {/* Coupons */}
                <div className="space-y-3">
                  {mockCoupons.map((coupon) => (
                    <div
                      key={coupon.id}
                      className={`bg-white rounded-xl p-5 border flex items-center gap-5 ${coupon.used ? 'opacity-50 border-stone-100' : 'border-stone-200'}`}
                    >
                      <div className="w-12 h-12 bg-[#E8A43A]/10 rounded-xl flex items-center justify-center shrink-0">
                        <CreditCard className="w-5 h-5 text-[#E8A43A]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[#0B1B2F] text-sm">{coupon.name}</div>
                        <div className="text-xs text-stone-400 mt-0.5">만료: {coupon.expiry}</div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-bold text-[#E8A43A]">{coupon.discount}</div>
                        <div className={`text-xs mt-0.5 ${coupon.used ? 'text-stone-400' : 'text-green-600'}`}>
                          {coupon.used ? '사용완료' : '사용가능'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {currentTab === 'wishlist' && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <h2 className="font-bold text-[#0B1B2F] text-lg mb-5">찜한 강의</h2>
                {wishlistCourses.length === 0 ? (
                  <div className="bg-white rounded-2xl p-12 text-center border border-stone-100">
                    <Heart className="w-12 h-12 mx-auto text-stone-200 mb-4" />
                    <p className="text-stone-500 text-sm mb-4">아직 찜한 강의가 없어요</p>
                    <Link href="/courses" className="text-sm font-semibold text-[#E8A43A] hover:text-[#d4932a]">
                      강의 둘러보기 →
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {wishlistCourses.map((course) => (
                      <div key={course.id} className="bg-white rounded-xl p-4 border border-stone-100 flex gap-4 items-center">
                        <img src={course.thumbnail} alt={course.title} className="w-20 h-14 object-cover rounded-lg shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-[#E8A43A] mb-0.5">{course.category}</div>
                          <div className="font-semibold text-[#0B1B2F] text-sm line-clamp-1">{course.title}</div>
                          <div className="flex items-center gap-1 text-xs text-stone-500 mt-1">
                            <Star className="w-3 h-3 text-[#E8A43A] fill-[#E8A43A]" />{course.rating}
                          </div>
                        </div>
                        <div className="shrink-0 text-right">
                          <div className="font-bold text-[#0B1B2F] text-sm">{course.price.toLocaleString()}원</div>
                          <Link href={`/courses/${course.id}`} className="text-xs text-[#E8A43A] hover:text-[#d4932a] mt-1 block">
                            자세히 →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {currentTab === 'inquiries' && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-bold text-[#0B1B2F] text-lg">문의 내역</h2>
                  <Link href="/community/inquiry?tab=write" className="text-sm font-semibold text-[#E8A43A] flex items-center gap-1">
                    새 문의 <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-white rounded-2xl p-8 text-center border border-stone-100">
                  <MessageSquare className="w-12 h-12 mx-auto text-stone-200 mb-3" />
                  <p className="text-stone-500 text-sm">문의 내역이 없습니다.</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
