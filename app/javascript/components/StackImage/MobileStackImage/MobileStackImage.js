import React from "react"
import PropTypes from "prop-types"
import StackImage from "../StackImage"
import Spacer from "../../Spacer/Spacer"


class MobileStackImage extends React.Component {
  render () {
    return (
      <React.Fragment>
      	<div>
	      	<ul style={ulStyle}>
	      	<div>
	      		<li style={liStyle}>
	      			<img src={'https://images.tandf.co.uk/common/jackets/agentjpg/978185941/9781859416914.jpg'} lt={"boohoo"} style={imgStyle}/>
		       	<Spacer spaceWidth={20} />
		       	</li>
		       
		       	<li style={liStyle}>
		       		<img src={'https://secure.coverart.textbookrush.com/large/650/1-9780132540650.jpg'} alt={"boohoo"} style={imgStyle}/>
		       	<Spacer spaceWidth={20} />
		       	</li>
		    </div>
		       	
		    <div>
		       	<li style={liStyle}>
		       		<img src={'https://www.lawctopus.com/wp-content/uploads/2015/06/law-as-a-career-book.jpg'} alt={"boohoo"} style={imgStyle}/>
		       	<Spacer spaceWidth={20} />
		       	</li>
	
		       	<li style={liStyle}>
		       		<img src={'https://d1nmq8yw1yjo7e.cloudfront.net/images/covers/300/9781760020552.jpg'} alt={"boohoo"} style={imgStyle}/>
		       <Spacer spaceWidth={20} />
		       	</li>
		    </div>
		       
	
	      	</ul>
      	</div>
      </React.Fragment>
    );
  }
}

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
}

const imgStyle = {
	width: '100%',
    height: 131,
}

const liStyle = {
  float: 'left',
  marginLeft: 10,
  marginLeft: 10,
	width: 100,
	height: 132,
	border: '2px solid white',
	borderColor: 'white',
	borderRadius: 2
}

MobileStackImage.propTypes = {
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  image4: PropTypes.string,
  image5: PropTypes.string,
};
export default MobileStackImage
