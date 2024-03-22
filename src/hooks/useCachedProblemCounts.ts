import { useState, useEffect } from 'react'
import { ProblemCounts } from '../types'
import { fetchUserSubmissionCounts } from '../services/leetcode'

export default function useCachedUserSubmissionCounts(users: string[]) {
  const [problemCounts, setProblemCounts] = useState<ProblemCounts[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const cachedData: ProblemCounts[] = []
      for (const user of users) {
        const cachedDataJSON = localStorage.getItem(`userSubmissionCounts_${user}`)
        if (cachedDataJSON) {
          cachedData.push(JSON.parse(cachedDataJSON))
        } else {
          const data = await fetchUserSubmissionCounts(user)
          cachedData.push(data)
          localStorage.setItem(`userSubmissionCounts_${user}`, JSON.stringify(data))
        }
      }
      setProblemCounts(cachedData)
    }

    fetchData()
  }, [users])

  return problemCounts
}