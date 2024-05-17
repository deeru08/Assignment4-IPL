import {Component} from 'react'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    EachTeamData: {
      teamBannerUrl: '',
      latestMatchDetails: {},
      resentMatches: [],
    },
  }

  componentDidMount() {
    this.getEachTeamData()
  }

  getEachTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis/ccbp.in/team_matches/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedLmDetails = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_tesam,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }
    const updatedRmDetails = data.recentMatches.map(each => ({
      umpires: each.recent_matches.umpires,
      result: each.recent_matches.result,
      manOfTheMatch: each.recent_matches.man_of_the_match,
      id: each.recent_matches.id,
      date: each.recent_matches.date,
      venue: each.recent_matches.venue,
      competingTeam: each.recent_matches.competing_team,
      competingTeamLogo: each.recent_matches.competing_team_logo,
      firstInnings: each.recent_matches.first_innings,
      secondInnings: each.recent_matches.second_innings,
      matchStatus: each.recent_matches.match_status,
    }))
    const updatedEachTeamData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: updatedLmDetails,
      recentMatches: updatedRmDetails,
    }
    this.setState({EachTeamData: updatedEachTeamData})
  }

  render() {
    const {EachTeamData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = EachTeamData
    return (
      <div className="tmContainer">
        <img src={teamBannerUrl} alt="team banner" />
        <div>
          <h1>Latest Matches</h1>
          <LatestMatch
            lmDetails={latestMatchDetails}
            key={latestMatchDetails.id}
          />
        </div>
        <div>
          {recentMatches.map(each => (
            <MatchCard rmDetails={each} key={each.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default TeamMatches
