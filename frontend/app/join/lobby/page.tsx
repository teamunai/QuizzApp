import { redirect } from 'next/navigation'

export default function JoinLobbyRedirect({
  searchParams,
}: {
  searchParams: { pin?: string; quizId?: string }
}) {
  const pin = (searchParams?.quizId || searchParams?.pin || '').toUpperCase()
  const target = pin ? `/join?quizId=${encodeURIComponent(pin)}` : '/join'
  redirect(target)
}
