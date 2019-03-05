import React from 'react'
class Asset extends React.Component {
  render() {
    let splitted = this.props.src.split(".png");
    let img2x = splitted[0] + "@2x" + splitted[1];
    let img3x = splitted[0] + "@3x" + splitted[1];
    return(
      <img class="{this.props.class}"
        src="{this.props.src}"
        alt="Star Image"
        title="Star Image"
        caption="false"
        data-constrained="true"
        width="700"
        style="width: 700px;"
        srcset="https://www.solstice.com/hs-fs/hubfs/2018/Front%20Page%20Changes/Google_Next_Home-1.png?width=350&amp;name=Google_Next_Home-1.png 350w, https://www.solstice.com/hs-fs/hubfs/2018/Front%20Page%20Changes/Google_Next_Home-1.png?width=700&amp;name=Google_Next_Home-1.png 700w, https://www.solstice.com/hs-fs/hubfs/2018/Front%20Page%20Changes/Google_Next_Home-1.png?width=1050&amp;name=Google_Next_Home-1.png 1050w, https://www.solstice.com/hs-fs/hubfs/2018/Front%20Page%20Changes/Google_Next_Home-1.png?width=1400&amp;name=Google_Next_Home-1.png 1400w, https://www.solstice.com/hs-fs/hubfs/2018/Front%20Page%20Changes/Google_Next_Home-1.png?width=1750&amp;name=Google_Next_Home-1.png 1750w, https://www.solstice.com/hs-fs/hubfs/2018/Front%20Page%20Changes/Google_Next_Home-1.png?width=2100&amp;name=Google_Next_Home-1.png 2100w"
        sizes="(max-width: 700px) 100vw, 700px">
      )
    }
  }


  export default PersonIcon
