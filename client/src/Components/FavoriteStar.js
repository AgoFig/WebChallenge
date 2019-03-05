import React from 'react'
// image import
import StarIcon from '../Assets/Images/Favorite-Star-(True)/Favorite-True.png';
import VoidStarIcon from '../Assets/Images/Favorite-Star-(False)/Favorite-False.png';
class FavoriteStar extends React.Component {

  render() {
    let iconSrc = StarIcon
    if (this.props.isFavorite !== true) {
      iconSrc = VoidStarIcon
    }
    return <img className="favorite-star" src={iconSrc} alt="Favorite" onClick={this.props.handler} />
  }
}
export default FavoriteStar
