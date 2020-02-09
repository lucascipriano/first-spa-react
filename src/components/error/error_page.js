// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Button } from 'react-materialize';

const Error_page = () => (
  <Row>
    
    <Col m={8}>
        <h5 className="center">Pagina não existe :C</h5>
        <Button waves='light' className="center grey darken-2" node='a' href='/'> Voltar para Home</Button>

    </Col>
  </Row>
);

export default Error_page;