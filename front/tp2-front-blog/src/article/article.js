import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from "axios";
import React, { useEffect, useState } from 'react';

function Article({history}) {

    let [articlesAll, setArticle] = useState([])

    useEffect(() => {
      axios.get('https://127.0.0.1:8000/article/')
        .then(response => {
          console.log(response.data);
          setArticle(response.data);
        }
        )
        .catch((error) => { console.log(error) })
    }, []);

   

   
    return (
        <div  style={{paddingTop:'2%'}}>


            


            <Table striped bordered hover style={{ width: '90%', margin: 'auto'}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Subtitle</th>
                        <th>Image</th>
                        <th>Content</th>
                        <th>Publication date</th>
                        <th>Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {articlesAll.map(article => (
                        <tr key={article.id}>
                            <td>{article.id}</td>
                            <td>{article.title}</td>
                            <td>{article.subtitle}</td>
                            <td>{article.image}</td>
                            <td>{article.content}</td>
                            <td>{article.publicationDate}</td>
                            <td>{article.category}</td>
                            <td> <Button href={`/article/${article.id}`}><VisibilityIcon /></Button><Button ><DeleteIcon /></Button> / </td>

                        </tr>
                    ))}

                </tbody>
            </Table>
            <div  style={{paddingLeft:'5%', paddingTop:'2%'}}>
            <Button className="pt-40" variant="primary" href="/article/add">ADD Article</Button>
            </div>
        </div>
    );
}

export default Article;