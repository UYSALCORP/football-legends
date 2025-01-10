import React from 'react'
import { Col, Card } from "react-bootstrap";
import { useState } from "react";

const LegendCard = ({legend}) => {
    const [show, setShow] = useState(false)
  return (
        <Col key={legend.id}>
          <Card className='player-card' role="button" onClick={() => setShow(!show)}>
            {!show ? (
              <Card.Img variant="top" src={legend.img} />
            ) : (
              <>
                <Card.Header>
                  <Card.Title>{legend.name}</Card.Title>
                </Card.Header>
                <ul className="mx-auto">
                  {legend.statistics.map((item, index) => (
                    <li key={index} className="list-unstyled h5 text-start mt-4">
                      ⚽ {item}
                    </li>
                  ))}
                </ul>
                <span className="fw-bold">Career Years: {legend.official_career}</span>
              </>
            )}
          </Card>
        </Col>
      )}


export default LegendCard
