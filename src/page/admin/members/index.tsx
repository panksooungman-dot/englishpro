'use client'

import { motion } from 'motion/react'
import { Search, Filter, Eye, ShieldOff, Mail } from 'lucide-react'

const members = [
  { id: 1, name: '김지현', email: 'jihyeon@example.com', joined: '2025-04-05', courses: 3, spent: 307000, status: '정상' },
  { id: 2, name: '이준혁', email: 'junhyuk@example.com', joined: '2025-04-04', courses: 1, spent: 119000, status: '정상' },
  { id: 3, name: '박수연', email: 'suyeon@example.com', joined: '2025-03-28', courses: 2, spent: 158000, status: '정상' },
  { id: 4, name: '최동현', email: 'donghyun@example.com', joined: '2025-03-20', courses: 4, spent: 406000, status: '정상' },
  { id: 5, name: '정혜린', email: 'hyerin@example.com', joined: '2025-03-15', courses: 1, spent: 59000, status: '정상' },
  { id: 6, name: '한소희', email: 'sohee@example.com', joined: '2025-03-10', courses: 2, spent: 188000, status: '정지' },
]

export default function MembersPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#0B1B2F]">회원 목록</h2>
          <p className="text-sm text-stone-500 mt-0.5">총 {members.length}명 (이번달 +124명)</p>
        </div>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-4 border border-stone-100 flex gap-3"
      >
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input type="text" placeholder="이름 또는 이메일 검색..." className="w-full pl-9 pr-4 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]" />
        </div>
        <select className="px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A] text-stone-600">
          <option>전체 상태</option>
          <option>정상</option>
          <option>정지</option>
        </select>
        <button className="flex items-center gap-1.5 px-3 py-2 border border-stone-200 rounded-lg text-sm text-stone-600 hover:bg-stone-50">
          <Filter className="w-4 h-4" />
          필터
        </button>
      </motion.div>

      {/* Table */}
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
                {['회원', '이메일', '가입일', '수강', '총 결제', '상태', '관리'].map((h) => (
                  <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-stone-500">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {members.map((m, i) => (
                <motion.tr
                  key={m.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className="border-b border-stone-50 hover:bg-stone-50/60 transition-colors"
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 bg-[#E8A43A]/10 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-[#E8A43A] text-xs font-bold">{m.name[0]}</span>
                      </div>
                      <span className="font-medium text-[#0B1B2F] text-xs">{m.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-xs text-stone-500">{m.email}</td>
                  <td className="px-5 py-3.5 text-xs text-stone-400">{m.joined}</td>
                  <td className="px-5 py-3.5 text-xs font-semibold text-[#0B1B2F]">{m.courses}개</td>
                  <td className="px-5 py-3.5 text-xs font-semibold text-[#0B1B2F]">{m.spent.toLocaleString()}원</td>
                  <td className="px-5 py-3.5">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${m.status === '정상' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
                      {m.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-1.5">
                      <button className="p-1.5 text-stone-400 hover:text-[#0B1B2F] hover:bg-stone-100 rounded-md transition-colors">
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 text-stone-400 hover:text-blue-500 hover:bg-blue-50 rounded-md transition-colors">
                        <Mail className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors">
                        <ShieldOff className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-stone-50 flex items-center justify-between">
          <span className="text-xs text-stone-400">{members.length}명 결과</span>
          <div className="flex gap-1">
            {[1, 2, 3].map((p) => (
              <button key={p} className={`w-7 h-7 text-xs rounded-md ${p === 1 ? 'bg-[#0B1B2F] text-white' : 'text-stone-500 hover:bg-stone-100'}`}>{p}</button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
