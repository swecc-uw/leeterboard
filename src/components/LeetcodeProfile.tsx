import { useEffect, useState } from "react";


interface LeetcodeProfileProps {
  username: string;
}

interface Stats {
  easy: number;
  medium: number;
  hard: number;
}

const LeetcodeProfile = ({ username }: LeetcodeProfileProps) => {
  const [submissions, setSubmissions] = useState<Stats>({ easy: 0, medium: 0, hard: 0});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchProfile = async () => {
      fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`)
      .then(response => response.json()) // Convert the response to JSON format
      .then(data => {
        console.log(data);
        const { easySolved: easy, mediumSolved: medium, hardSolved: hard } = data;
        setSubmissions({ easy, medium, hard });
      })
        }
    fetchProfile().then(() => setLoading(false));
  }
  , []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{username}</h1>
          <p>Total: {submissions?.easy + submissions?.medium + submissions?.hard}</p>
          <p>Easy: {submissions?.easy}</p>
          <p>Medium: {submissions?.medium}</p>
          <p>Hard: {submissions?.hard}</p>
        </div>
      )}
    </div>
      );
}

export default LeetcodeProfile;
