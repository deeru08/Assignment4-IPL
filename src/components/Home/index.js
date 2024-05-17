import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    IplData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIplData()
  }

  getIplData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedIplData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({IplData: updatedIplData, isLoading: false})
  }

  render() {
    const {IplData, isLoading} = this.state
    return (
      <div className="HomeContainer">
        <div className="HomeTopPart">
          <img
            className="iplLogo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="iplDash">IPL Dashboard</h1>
        </div>
        <div className="TeamCards">
          {IplData.map(each => (
            <TeamCard key={each.id} Details={each} />
          ))}
        </div>
      </div>
    )
  }
}

export default Home
