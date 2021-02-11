import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home() {
  return (

    <div className="pt-2" style={{ margin: 'auto' }}>
      <h1>Bienvenue,</h1> 
      <h2 className="pt-2">Fonctionalité fonctionelle :</h2>

      <Container>
      <Row>
        - Liste des articles
      </Row>
      <Row>
        - Ajouter un article
      </Row>
      <Row>
        - Show un article
      </Row>
      <Row>
        - Edit un article
      </Row>
      </Container>
    </div>
  );
}

export default Home;