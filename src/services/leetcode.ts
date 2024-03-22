import { ProblemCounts } from '../types'

export async function fetchUserSubmissionCounts (
  username: string
): Promise<ProblemCounts> {
  console.log('cache miss')
  const response = await fetch(
    `https://alfa-leetcode-api.onrender.com/${username}/solved`
  )
  const data = await response.json()

  const result: ProblemCounts = {
    username: username,
    easy: data.easySolved,
    medium: data.mediumSolved,
    hard: data.hardSolved,
    total: data.solvedProblem
  }

  return result
}

export async function fetchUsers () {
  return ['elimelt', 'warzonewarrior', 'nishant', 'iperg', ]
}
