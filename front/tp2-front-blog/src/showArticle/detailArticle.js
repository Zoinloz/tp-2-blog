import Card from 'react-bootstrap/Card'
import axios from "axios";
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

const ArticleDetail = ({ match }) => {

    const [articles, setArticle] = useState([]);
    // const [concertInfo, setConcertInfo] = useState(null);

    function getArticle(id) {
        return axios.get('https://127.0.0.1:8000/article/detail?id=' + id)
    }
    useEffect(() => {
        getArticle(match.params.id).then((response) => setArticle(response.data))
            .catch((error) => { console.log(error) })
    }, []);


    return (
        <div className="test">


            <Card className="w-75 mx-auto my-4 shadow-lg bg-white rounded ">
                <Card.Header as="h3" className="titleCard text-center">
                    Détail de l'article
                </Card.Header>
                <Card.Body>

                    <Card>
                        <Card.Header>
                            <Container>
                                <Row className="pt-2">
                                    <Col>Title : {articles.title}</Col>
                                    </Row>
                                    <Row className="pt-2">

                                    <Col>SubTitle : {articles.subtitle}</Col>
                                    </Row>
                                    <Row className="pt-2">
                                    <Col>Image: {articles.image}</Col>
                                </Row>

                                <Row className="pt-2">
                                    <Col>Content : {articles.content}</Col>
                                </Row>
                                <Row className="pt-2">
                                    <Col>Publication Date : {articles.publicationDate}</Col>
                                </Row>
                                <Row className="pt-2">
                                    <Col>Category : {articles.category}</Col>
                                </Row>
                                <Row className="pt-2">
                                <Col><Button href={`/article/add/${articles.id}`}>EDIT</Button></Col>
                            
                                </Row>
                            </Container>
                            
                           
                            

                        </Card.Header>
                    </Card>


                </Card.Body >
            </Card >





        </div>

    );
}

export default ArticleDetail;