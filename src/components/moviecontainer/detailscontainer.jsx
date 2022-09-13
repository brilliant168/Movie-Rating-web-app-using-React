// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PropTypes } from 'prop-types';

function Detailscontainer(props) {
  return (
    <Card style={{ width: '15rem', margin: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card.Img variant="top" src={props.imgsource} style={{ width: '14rem', padding: '12px' }} />
      <Card.Body style={{ display: 'flex', flexDirection: 'column', paddingTop: '0px',width: '12.5rem', alignItems: 'center' }}>
        {/* <Card.Body style={{ display: 'flex', paddingLeft: '0px', paddingTop: '0px', paddingBottom: '0px' }}>
          <svg viewBox="0 0 576 512" width="15px" title="star" style={{ display: 'flex', height: '22px', paddingLeft: '0px', paddingTop: '0px' }}>
            <path fill='orange' d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
          </svg>
          <div className="px-2">{props.rating}/10</div>
        </Card.Body> */}
        <Card.Title style={{ display: 'flex', paddingBottom: '3px' }}>{props.title}</Card.Title>
        
          <a href= {props.url} style= {{textDecoration: 'none', color: "white"}}><div variant="primary" size="sm" className="btn px-2 my-2" style={{backgroundColor: 'skyblue'}}>More Details</div></a>
        
      </Card.Body>
    </Card>
  );
}

Detailscontainer.defaultProps = {
  rating: 5
}

Detailscontainer.prototype = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imgsource: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Detailscontainer;