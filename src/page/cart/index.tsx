'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ShoppingCart, Trash2, ChevronRight, Tag, ShieldCheck } from 'lucide-react'
import { useCart } from '@/state/cart'
import { useCourse } from '@/state/course'

export default function CartPage() {
  const { items, removeFromCart, getTotalPrice } = useCart((s) => ({
    items: s.items,
    removeFromCart: s.actions.removeFromCart,
    getTotalPrice: s.actions.getTotalPrice,
  }))
  const { allCourses } = useCourse((s) => ({ allCourses: s.items }))

  const total = getTotalPrice()
  const originalTotal = items.reduce((sum, item) => sum + item.originalPrice, 0)
  const savings = originalTotal - total

  // Demo: add some items if empty
  const displayItems = items.length > 0 ? items : allCourses.slice(0, 2).map((c) => ({ ...c, addedAt: '' }))

  return (
    <div className="min-h-screen bg-[#F9F7F4]">
      <div className="bg-[#0B1B2F] text-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-xs text-[#E8A43A] font-bold uppercase tracking-widest mb-2">Cart</div>
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-7 h-7 text-[#E8A43A]" />
              <h1 className="text-3xl font-bold">장바구니</h1>
              <span className="text-stone-400 text-lg">{displayItems.length}개</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {displayItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingCart className="w-16 h-16 mx-auto text-stone-200 mb-4" />
            <h2 className="text-xl font-bold text-[#0B1B2F] mb-2">장바구니가 비어있어요</h2>
            <p className="text-stone-500 mb-6 text-sm">마음에 드는 강의를 장바구니에 담아보세요</p>
            <Link href="/courses" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B1B2F] text-white font-semibold rounded-lg hover:bg-[#162d4a] transition-colors">
              강의 둘러보기 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Item List */}
            <div className="lg:col-span-2 space-y-4">
              {displayItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-5 border border-stone-100 flex gap-4"
                >
                  <img src={item.thumbnail} alt={item.title} className="w-28 h-20 object-cover rounded-xl shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-[#E8A43A] font-semibold mb-1">{item.category}</div>
                    <h3 className="font-bold text-[#0B1B2F] text-sm leading-tight line-clamp-2 mb-2">{item.title}</h3>
                    <div className="text-xs text-stone-500">{item.instructor} · {item.level}</div>
                  </div>
                  <div className="shrink-0 flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1.5 text-stone-300 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="text-right">
                      <div className="font-bold text-[#0B1B2F]">{item.price.toLocaleString()}원</div>
                      <div className="text-xs text-stone-400 line-through">{item.originalPrice.toLocaleString()}원</div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Coupon */}
              <div className="bg-white rounded-2xl p-5 border border-stone-100">
                <div className="flex gap-3">
                  <Tag className="w-4 h-4 text-[#E8A43A] mt-2.5 shrink-0" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#0B1B2F] mb-2">쿠폰 / 포인트</div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="쿠폰 코드 입력"
                        className="flex-1 px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-[#0B1B2F]"
                      />
                      <button className="px-4 py-2 bg-[#0B1B2F] text-white text-sm font-medium rounded-lg hover:bg-[#162d4a] transition-colors">
                        적용
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-2xl p-6 border border-stone-100 sticky top-24">
                <h2 className="font-bold text-[#0B1B2F] mb-5">결제 금액</h2>
                <div className="space-y-2 mb-5 pb-5 border-b border-stone-100 text-sm">
                  <div className="flex justify-between">
                    <span className="text-stone-500">정가 합계</span>
                    <span className="text-stone-500">{(items.length > 0 ? originalTotal : allCourses.slice(0, 2).reduce((s, c) => s + c.originalPrice, 0)).toLocaleString()}원</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#E8A43A]">할인 금액</span>
                    <span className="text-[#E8A43A]">-{(items.length > 0 ? savings : allCourses.slice(0, 2).reduce((s, c) => s + (c.originalPrice - c.price), 0)).toLocaleString()}원</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-6 font-bold">
                  <span className="text-[#0B1B2F]">최종 결제금액</span>
                  <span className="text-2xl text-[#0B1B2F]">
                    {(items.length > 0 ? total : allCourses.slice(0, 2).reduce((s, c) => s + c.price, 0)).toLocaleString()}원
                  </span>
                </div>

                <Link
                  href="/checkout"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#E8A43A] text-white font-bold rounded-lg hover:bg-[#d4932a] transition-colors shadow-md shadow-[#E8A43A]/20"
                >
                  결제하기
                  <ChevronRight className="w-4 h-4" />
                </Link>

                <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-stone-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00B5E2]" />
                  토스페이먼츠 보안 결제
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
