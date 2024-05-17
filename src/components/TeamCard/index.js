import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {Details} = props
  const {id, name, teamImageUrl} = Details
  return (
    <Link to={`/team-matches/${id}`} className="linkClass">
      <div className="teamCard">
        <img className="tcImg" src={teamImageUrl} alt={`${name}`} />
        <h1 className="tcName">{name}</h1>
      </div>
    </Link>
  )
}

export default TeamCard
