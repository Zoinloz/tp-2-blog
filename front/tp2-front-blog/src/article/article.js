import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
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

    const handleDelete = async (event) => {
        
        event.preventDefault();
        axios.delete("https://localhost:8000/article/7")
            .then((result) => {
                console.log(result.data);
                console.log(result.gender);
                history.push('/article')
            })

    }

   
    return (
        <div>


            <Button className="pt-40" variant="primary" href="/article/add">ADD</Button>


            <Table striped bordered hover style={{ width: '90%', margin: 'auto' }}>
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
                            <td> <Button onClick={handleDelete}><DeleteIcon /></Button> / <Button href="/article/add"><EditIcon /></Button></td>

                        </tr>
                    ))}

                </tbody>
            </Table>
        </div>
    );
}

export default Article;