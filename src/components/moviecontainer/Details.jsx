// import React, {useEffect} from 'react'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import './details.css'
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Details(props) {

  return (
    <>
      <div className="main_container">
      <Row><button onClick={() => props.closeDetails(false)}>X</button></Row>
        <div className="model">
          <Row><button onClick={() => props.closeDetails(false)}>X</button></Row>
          <Row>
            <Col>
              <img src={props.imgsource} alt="" height={100} width={70} />
            </Col>
            <Col>
              <Row className='titletext'><h3>{props.title}</h3></Row>
              <Row className='text'>{props.releaseyear} . {props.timeduration}min</Row>
              <Row className='text'>{props.genrus}</Row>
              <Row className='rate'>
                <div className="stars">
                  <svg viewBox="0 0 576 512" width="100" title="star">
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                  </svg>
                  <div className="ratepoint">{props.rating}/10</div>
                </div></Row>
            </Col>
          </Row>
          <Row>
            <div className="description">{props.description}</div>
          </Row>
        </div>
      </div>

    </>
  )
}

Details.defaultProps = {
  imgsource: "https://static.tvmaze.com/uploads/images/medium_portrait/413/1034988.jpg",
  title: "All Rise",
  releaseyear: 2020,
  timeduration: 57,
  genrus: "Adventure . Drama . Action",
  rating: 9.8,
  description: "All Rise is a courthouse drama that follows the chaotic, hopeful and sometimes absurd lives of its judges, prosecutors and public defenders, as they work with bailiffs, clerks and cops to get justice for the people of Los Angeles amidst a flawed legal process. Among them is newly appointed Judge Lola Carmichael, a highly regarded and impressive deputy district attorney who doesn't intend to sit back on the bench in her new role, but instead leans in, immediately pushing the boundaries and challenging the expectations of what a judge can be."
}