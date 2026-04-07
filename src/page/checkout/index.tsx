'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  CreditCard,
  Smartphone,
  Building2,
  ShieldCheck,
  ChevronRight,
  Lock,
  CheckCircle,
} from 'lucide-react'
import { useCourse } from '@/state/course'

type PaymentMethod = 'card' | 'kakao' | 'naver' | 'toss' | 'bank'

const paymentMethods: { id: PaymentMethod; label: string; icon: React.ReactNode }[] = [
  { id: 'card', label: '신용/체크카드', icon: <CreditCard className="w-4 h-4" /> },
  { id: 'kakao', label: '카카오페이', icon: <Smartphone className="w-4 h-4" /> },
  { id: 'naver', label: '네이버페이', icon: <Smartphone className="w-4 h-4" /> },
  { id: 'toss', label: '토스페이', icon: <Smartphone className="w-4 h-4" /> },
  { id: 'bank', label: '무통장 입금', icon: <Building2 className="w-4 h-4" /> },
]

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const courseId = searchParams.get('courseId') ?? '1'
  const { items } = useCourse((s) => ({ items: s.items }))
  const course = items.find((c) => c.id === courseId) ?? items[0]

  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('card')
  const [agreed, setAgreed] = useState(false)
  const [loading, setLoading] = useState(false)

  const discount = course.originalPrice - course.price

  const handlePay = async () => {
    if (!agreed) {
      alert('구매 조건 및 환불 정책에 동의해 주세요.')
      return
    }
    setLoading(true)
    // 실제 구현 시 토스페이먼츠 SDK 연동
    // import { loadTossPayments } from '@tosspayments/payment-sdk'
    // const tossPayments = await loadTossPayments('CLIENT_KEY')
    // await tossPayments.requestPayment({ ... })
    setTimeout(() => {
      alert('결제 처리 중...\n(실제 토스페이먼츠 SDK 연동 시 결제창이 실행됩니다)')
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#F9F7F4] py-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-[#0B1B2F] mb-8 flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#E8A43A]" />
            결제하기
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Payment form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Buyer Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 border border-stone-100"
            >
              <h2 className="font-bold text-[#0B1B2F] mb-4">구매자 정보</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-500 mb-1.5">이름</label>
                  <input
                    type="text"
                    placeholder="홍길동"
                    className="w-full px-3 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-[#0B1B2F] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-500 mb-1.5">이메일</label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full px-3 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-[#0B1B2F] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-500 mb-1.5">연락처</label>
                  <input
                    type="tel"
                    placeholder="010-0000-0000"
                    className="w-full px-3 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-[#0B1B2F] transition-colors"
                  />
                </div>
              </div>
            </motion.div>

            {/* Payment Method */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 border border-stone-100"
            >
              <h2 className="font-bold text-[#0B1B2F] mb-4">결제 수단</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`flex items-center gap-2 px-3 py-2.5 border rounded-lg text-sm transition-all ${
                      selectedMethod === method.id
                        ? 'border-[#0B1B2F] bg-[#0B1B2F]/5 text-[#0B1B2F] font-semibold'
                        : 'border-stone-200 text-stone-600 hover:border-stone-300'
                    }`}
                  >
                    {method.icon}
                    {method.label}
                  </button>
                ))}
              </div>

              {/* Toss Payments Badge */}
              <div className="mt-5 flex items-center gap-2 text-xs text-stone-400">
                <ShieldCheck className="w-4 h-4 text-[#00B5E2]" />
                <span>
                  결제 시스템은{' '}
                  <span className="text-[#0064FF] font-semibold">토스페이먼츠</span>로
                  안전하게 처리됩니다
                </span>
              </div>
            </motion.div>

            {/* Agreement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 border border-stone-100"
            >
              <label className="flex items-start gap-3 cursor-pointer">
                <div
                  onClick={() => setAgreed(!agreed)}
                  className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                    agreed ? 'bg-[#0B1B2F] border-[#0B1B2F]' : 'border-stone-300'
                  }`}
                >
                  {agreed && <CheckCircle className="w-3.5 h-3.5 text-white fill-white" />}
                </div>
                <span className="text-sm text-stone-700 leading-relaxed">
                  구매 조건 및 환불 정책에 동의합니다.{' '}
                  <span className="text-[#E8A43A] underline cursor-pointer">환불 정책 보기</span>
                </span>
              </label>
            </motion.div>
          </div>

          {/* Right: Order Summary */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-2xl p-6 border border-stone-100 sticky top-24"
            >
              <h2 className="font-bold text-[#0B1B2F] mb-4">주문 요약</h2>

              {/* Course Info */}
              <div className="flex gap-3 mb-5 pb-5 border-b border-stone-100">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-16 h-12 object-cover rounded-lg"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-[#0B1B2F] line-clamp-2 leading-tight">
                    {course.title}
                  </div>
                  <div className="text-xs text-stone-500 mt-1">{course.instructor}</div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 mb-5 pb-5 border-b border-stone-100">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">정가</span>
                  <span className="text-stone-500">{course.originalPrice.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#E8A43A]">할인</span>
                  <span className="text-[#E8A43A]">-{discount.toLocaleString()}원</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-[#0B1B2F]">최종 결제금액</span>
                <span className="text-2xl font-bold text-[#0B1B2F]">
                  {course.price.toLocaleString()}원
                </span>
              </div>

              <button
                onClick={handlePay}
                disabled={loading}
                className="w-full py-3.5 bg-[#E8A43A] text-white font-bold rounded-lg hover:bg-[#d4932a] transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#E8A43A]/20 disabled:opacity-60"
              >
                {loading ? (
                  '처리 중...'
                ) : (
                  <>
                    결제하기
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="mt-4 text-center text-xs text-stone-400 flex items-center justify-center gap-1.5">
                <Lock className="w-3 h-3" />
                토스페이먼츠 보안 결제
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
