import { useState, useEffect, useMemo } from 'react'
import { ProblemCounts } from './types'
import LeetcodeLeaderboard from './components/LeetcodeLeaderboard';
import useCachedUserSubmissionCounts from './hooks/useCachedProblemCounts';
import { fetchUsers } from './services/leetcode'

function App() {
  const [users, setUsers] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchUsers()
      .then((users) => {
        setUsers(users)
        setLoading(false)
      })
  }, [])

  const problemCounts = useCachedUserSubmissionCounts(users)

  const weightedScore = (pc: ProblemCounts) =>
    pc.easy + pc.medium * 2 + pc.hard * 3

  const ordering = (a: ProblemCounts, b: ProblemCounts) =>
    weightedScore(b) - weightedScore(a)

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>Leetcode Leaderboard</h1>
      <LeetcodeLeaderboard
        problemCounts={
          problemCounts.sort(ordering)
        }
      />
    </>
  )
}

export default App
