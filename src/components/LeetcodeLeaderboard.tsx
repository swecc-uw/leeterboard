import { ProblemCounts } from "../types";
import styled from "styled-components";

interface LeetcodeLeaderboardProps {
  problemCounts: ProblemCounts[];
}

const LeaderboardContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LeaderboardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const LeaderboardHeader = styled.thead`
  background-color: #f8f8f8;
`;

const LeaderboardHeaderCell = styled.th`
  padding: 12px;
  font-weight: bold;
  text-align: left;
`;

const LeaderboardRow = styled.tr`
  color: #333;
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
`;

const LeaderboardCell = styled.td`
  padding: 12px;
  color: #333;
`;

const LeetcodeLeaderboard = ({ problemCounts }: LeetcodeLeaderboardProps) => {
  console.log(problemCounts);
  return (
    <LeaderboardContainer>
      <LeaderboardTable>
        <LeaderboardHeader>
          <LeaderboardRow>
            <LeaderboardHeaderCell>User</LeaderboardHeaderCell>
            <LeaderboardHeaderCell>Total</LeaderboardHeaderCell>
            <LeaderboardHeaderCell>Easy</LeaderboardHeaderCell>
            <LeaderboardHeaderCell>Medium</LeaderboardHeaderCell>
            <LeaderboardHeaderCell>Hard</LeaderboardHeaderCell>
          </LeaderboardRow>
        </LeaderboardHeader>
        <tbody>
          {problemCounts.map((submission) => (
            <LeaderboardRow key={submission.username}>
              <LeaderboardCell>{submission.username}</LeaderboardCell>
              <LeaderboardCell>{submission.total}</LeaderboardCell>
              <LeaderboardCell>{submission.easy}</LeaderboardCell>
              <LeaderboardCell>{submission.medium}</LeaderboardCell>
              <LeaderboardCell>{submission.hard}</LeaderboardCell>
            </LeaderboardRow>
          ))}
        </tbody>
      </LeaderboardTable>
    </LeaderboardContainer>
  );
};

export default LeetcodeLeaderboard;