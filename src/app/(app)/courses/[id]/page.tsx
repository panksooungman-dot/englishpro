import CourseDetailPage from '@/page/course-detail'
import { mockCourses } from '@/api/_mock/courses'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const course = mockCourses.find((c) => c.id === id)
  return {
    title: course ? `${course.title} — EnglishPro` : '강의 상세 — EnglishPro',
    description: course?.subtitle,
  }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <CourseDetailPage id={id} />
}
