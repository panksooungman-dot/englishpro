'use client'

import { motion } from 'motion/react'
import { Plus, Edit2, Trash2, GripVertical, Image as ImageIcon } from 'lucide-react'

const banners = [
  { id: 1, name: '메인 히어로 배너', type: '메인', size: '1920x600', link: '/events/spring', status: '게시', period: '2025-04-01 ~ 2025-04-30' },
  { id: 2, name: '봄 특가 프로모션', type: '팝업', size: '600x400', link: '/events/spring', status: '게시', period: '2025-04-05 ~ 2025-04-15' },
  { id: 3, name: '모바일 앱 출시 예정', type: '상단바', size: '전체 너비', link: '/events', status: '비게시', period: '2025-04-10 ~ 2025-04-20' },
  { id: 4, name: '수강생 모집 배너', type: '메인', size: '1920x400', link: '/courses', status: '비게시', period: '2025-03-01 ~ 2025-03-31' },
]

const typeColor: Record<string, string> = {
  '메인': 'bg-blue-50 text-blue-600',
  '팝업': 'bg-purple-50 text-purple-600',
  '상단바': 'bg-orange-50 text-orange-600',
}

export default function BannersPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#0B1B2F]">배너/팝업 관리</h2>
          <p className="text-sm text-stone-500 mt-0.5">사이트 배너와 팝업을 관리합니다</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-[#E8A43A] text-white text-sm font-semibold rounded-lg hover:bg-[#d4932a] transition-colors">
          <Plus className="w-4 h-4" />
          배너 추가
        </button>
      </div>

      <div className="space-y-3">
        {banners.map((banner, i) => (
          <motion.div
            key={banner.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="bg-white rounded-xl p-5 border border-stone-100 flex items-center gap-4"
          >
            <GripVertical className="w-4 h-4 text-stone-300 cursor-grab shrink-0" />
            <div className="w-16 h-12 bg-stone-100 rounded-lg flex items-center justify-center shrink-0">
              <ImageIcon className="w-6 h-6 text-stone-300" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-[#0B1B2F] text-sm">{banner.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${typeColor[banner.type]}`}>{banner.type}</span>
              </div>
              <div className="text-xs text-stone-400">{banner.period} · {banner.size}</div>
            </div>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold shrink-0 ${banner.status === '게시' ? 'bg-green-50 text-green-700' : 'bg-stone-100 text-stone-500'}`}>
              {banner.status}
            </span>
            <div className="flex items-center gap-1 shrink-0">
              <button className="p-1.5 text-stone-400 hover:text-[#E8A43A] hover:bg-orange-50 rounded-md transition-colors">
                <Edit2 className="w-3.5 h-3.5" />
              </button>
              <button className="p-1.5 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Form */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="bg-white rounded-xl p-6 border border-stone-100"
      >
        <h3 className="font-bold text-[#0B1B2F] mb-4">새 배너 추가</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">배너명 *</label>
            <input type="text" placeholder="배너 이름" className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">유형 *</label>
            <select className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]">
              <option>메인</option>
              <option>팝업</option>
              <option>상단바</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">시작일</label>
            <input type="date" className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">종료일</label>
            <input type="date" className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
          </div>
          <div className="col-span-2">
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">연결 URL</label>
            <input type="text" placeholder="/events/spring" className="w-full px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
          </div>
        </div>
        <div className="border-2 border-dashed border-stone-200 rounded-xl p-6 text-center mb-4 hover:border-[#E8A43A] transition-colors cursor-pointer">
          <ImageIcon className="w-8 h-8 text-stone-300 mx-auto mb-2" />
          <p className="text-xs text-stone-400">배너 이미지 업로드</p>
        </div>
        <button className="px-4 py-2 bg-[#E8A43A] text-white text-sm font-semibold rounded-lg hover:bg-[#d4932a] transition-colors">
          배너 추가
        </button>
      </motion.div>
    </div>
  )
}
