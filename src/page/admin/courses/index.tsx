'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Plus, Search, Filter, Edit2, Trash2, Eye, Star, Users } from 'lucide-react'

const courses = [
  { id: '1', title: 'Business English Mastery', category: '비즈니스', price: 89000, students: 1243, rating: 4.9, status: '판매중', lessons: 24 },
  { id: '2', title: 'IELTS 7.0+ 완전정복', category: '시험대비', price: 119000, students: 892, rating: 4.8, status: '판매중', lessons: 36 },
  { id: '3', title: '영어 발음 교정 완성', category: '발음/스피킹', price: 69000, students: 2104, rating: 4.7, status: '판매중', lessons: 18 },
  { id: '4', title: 'English for Job Interviews', category: '비즈니스', price: 99000, students: 654, rating: 4.9, status: '판매중', lessons: 20 },
  { id: '5', title: '일상 영어 회화 완성', category: '회화', price: 59000, students: 3218, rating: 4.6, status: '판매중', lessons: 30 },
  { id: '6', title: 'TOEIC 900점 완성', category: '시험대비', price: 79000, students: 1876, rating: 4.8, status: '비공개', lessons: 42 },
]

const statusColor: Record<string, string> = {
  '판매중': 'bg-green-50 text-green-700',
  '비공개': 'bg-stone-100 text-stone-500',
  '준비중': 'bg-orange-50 text-orange-600',
}

export default function CoursesPage() {
  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#0B1B2F]">강의 목록</h2>
          <p className="text-sm text-stone-500 mt-0.5">총 {courses.length}개 강의</p>
        </div>
        <Link
          href="/admin/courses/register"
          className="flex items-center gap-1.5 px-4 py-2 bg-[#E8A43A] text-white text-sm font-semibold rounded-lg hover:bg-[#d4932a] transition-colors"
        >
          <Plus className="w-4 h-4" />
          강의 등록
        </Link>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl p-4 border border-stone-100 flex gap-3"
      >
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            placeholder="강의명 검색..."
            className="w-full pl-9 pr-4 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A]"
          />
        </div>
        <select className="px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A] text-stone-600">
          <option>전체 카테고리</option>
          <option>비즈니스</option>
          <option>시험대비</option>
          <option>회화</option>
          <option>발음/스피킹</option>
        </select>
        <select className="px-3 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:border-[#E8A43A] text-stone-600">
          <option>전체 상태</option>
          <option>판매중</option>
          <option>비공개</option>
          <option>준비중</option>
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
        transition={{ duration: 0.3, delay: 0.1 }}
        className="bg-white rounded-xl border border-stone-100 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-100 bg-stone-50/60">
                {['강의명', '카테고리', '가격', '수강생', '평점', '레슨', '상태', '관리'].map((h) => (
                  <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-stone-500">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {courses.map((course, i) => (
                <motion.tr
                  key={course.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className="border-b border-stone-50 hover:bg-stone-50/60 transition-colors"
                >
                  <td className="px-5 py-3.5 font-medium text-[#0B1B2F] max-w-[200px] truncate">{course.title}</td>
                  <td className="px-5 py-3.5 text-xs">
                    <span className="px-2 py-0.5 bg-[#E8A43A]/10 text-[#E8A43A] rounded-full font-semibold">{course.category}</span>
                  </td>
                  <td className="px-5 py-3.5 text-stone-700 font-semibold">{course.price.toLocaleString()}원</td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-1 text-stone-600 text-xs">
                      <Users className="w-3 h-3" />
                      {course.students.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-1 text-xs">
                      <Star className="w-3 h-3 text-[#E8A43A] fill-[#E8A43A]" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-xs text-stone-500">{course.lessons}강</td>
                  <td className="px-5 py-3.5">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${statusColor[course.status]}`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-1.5">
                      <button className="p-1.5 text-stone-400 hover:text-[#0B1B2F] hover:bg-stone-100 rounded-md transition-colors">
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <Link href={`/admin/courses/register?id=${course.id}`} className="p-1.5 text-stone-400 hover:text-[#E8A43A] hover:bg-orange-50 rounded-md transition-colors">
                        <Edit2 className="w-3.5 h-3.5" />
                      </Link>
                      <button className="p-1.5 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-stone-50 flex items-center justify-between">
          <span className="text-xs text-stone-400">{courses.length}개 결과</span>
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
