import Card from 'react-bootstrap/Card'
import axios from "axios";
import React, { useEffect, useState } from 'react';
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
                            {articles.title}
                        </Card.Header>
                    </Card>


                </Card.Body >
            </Card >





        </div>

    );
}

export default ArticleDetail;