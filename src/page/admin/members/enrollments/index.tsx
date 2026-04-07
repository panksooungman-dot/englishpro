'use client'

import { motion } from 'motion/react'
import { Search } from 'lucide-react'

const enrollments = [
  { id: 1, member: '김지현', course: 'Business English Mastery', enrolled: '2025-03-10', progress: 72, lastAccess: '2025-04-05', status: '수강중' },
  { id: 2, member: '이준혁', course: 'IELTS 7.0+ 완전정복', enrolled: '2025-04-04', progress: 15, lastAccess: '2025-04-05', status: '수강중' },
  { id: 3, member: '박수연', course: '영어 발음 교정', enrolled: '2025-01-20', progress: 100, lastAccess: '2025-03-15', status: '수강완료' },
  { id: 4, member: '최동현', course: 'English for Job Interviews', enrolled: '2025-02-28', progress: 88, lastAccess: '2025-04-04', status: '수강중' },
  { id: 5, member: '정혜린', course: '일상 영어 회화', enrolled: '2025-04-03', progress: 5, lastAccess: '2025-04-03', status: '수강중' },
]

const statusColor: Record<string, string> = {
  '수강중': 'bg-blue-50 text-blue-600',
  '수강완료': 'bg-green-50 text-green-700',
  '중단': 'bg-stone-100 text-stone-500',
}

export default function EnrollmentsPage() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-bold text-[#0B1B2F]">수강 현황</h2>
        <p className="text-sm text-stone-500 mt-0.5">회원별 강의 수강 현황을 확인합니다</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-4 border border-stone-100 flex gap-3"
      >
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input type="text" placeholder="회원명 또는 강의명 검색..." className="w-full pl-9 pr-4 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
        </div>
        <select className="px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A] text-stone-600">
          <option>전체 상태</option>
          <option>수강중</option>
          <option>수강완료</option>
          <option>중단</option>
        </select>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl border border-stone-100 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-100 bg-stone-50/60">
                {['회원', '강의', '등록일', '진도율', '최근 접속', '상태'].map((h) => (
                  <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-stone-500">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {enrollments.map((e, i) => (
                <motion.tr
                  key={e.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className="border-b border-stone-50 hover:bg-stone-50/60 transition-colors"
                >
                  <td className="px-5 py-3.5 font-medium text-[#0B1B2F] text-xs">{e.member}</td>
                  <td className="px-5 py-3.5 text-xs text-stone-600 max-w-[160px] truncate">{e.course}</td>
                  <td className="px-5 py-3.5 text-xs text-stone-400">{e.enrolled}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-stone-100 rounded-full max-w-[80px]">
                        <div
                          className="h-1.5 rounded-full bg-[#E8A43A]"
                          style={{ width: `${e.progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-stone-600">{e.progress}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-xs text-stone-400">{e.lastAccess}</td>
                  <td className="px-5 py-3.5">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${statusColor[e.status]}`}>
                      {e.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
