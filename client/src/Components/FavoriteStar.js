import React from 'react'
// image import
import StarIcon from '../Assets/Images/Favorite-Star-(True)/Favorite-True.png';
import VoidStarIcon from '../Assets/Images/Favorite-Star-(False)/Favorite-False.png';
class FavoriteStar extends React.Component {
  constructor(props) {
  		super(props);
  		this.state = {
  			isFavorite: this.props.isFavoriteStatus
  		};
  		this.handleClick = this.handleClick.bind(this);
  		this.toggleIsFavorite = this.toggleIsFavorite.bind(this);
  	}
  	toggleIsFavorite() {
  		console.log(this.state);
  		this.props.favoriteHandler(this.state);
  	}
  	handleClick() {
  		this.setState({isFavorite: !this.state.isFavorite}, this.toggleIsFavorite);
  	}
  render() {
    let iconSrc = StarIcon
    if (this.state.isFavorite !== true) {
      iconSrc = VoidStarIcon
    }
    return <img className="favorite-star" src={iconSrc} alt="Favorite" onClick={this.handleClick} />
  }
}
export default FavoriteStar
