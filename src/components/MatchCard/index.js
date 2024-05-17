import './index.css'

const MatchCard = props => {
  const {rmDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = rmDetails
  return (
    <div>
      <img src={competingTeamLogo} alt={competingTeam} />
      <h1>{competingTeam}</h1>
      <p>{result}</p>
      <h1>{matchStatus}</h1>
    </div>
  )
}

export default MatchCard
