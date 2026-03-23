import { useEffect, useState } from 'react'

export function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate))

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return timeLeft
}

function getTimeLeft(targetDate) {
  const distance = new Date(targetDate).getTime() - Date.now()
  if (distance <= 0) return { hours: '00', minutes: '00', seconds: '00' }
  const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, '0')
  const minutes = String(Math.floor((distance / 1000 / 60) % 60)).padStart(2, '0')
  const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, '0')
  return { hours, minutes, seconds }
}
