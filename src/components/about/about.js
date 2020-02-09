// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card} from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'

const About = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5>About</h5>
        <Card>
          <Row>
            <Col s={12} m={12}>
              <p>Página separada de About, só para ver como funciona</p>
            </Col>
          </Row>
        </Card>
    </Col>
  </Row>
);

export default About;