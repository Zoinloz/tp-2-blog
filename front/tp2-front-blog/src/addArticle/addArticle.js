import axios from "axios";
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

function AddArticle({history}) {

    const [data, setData] = useState({

        title: '', subtitle: '', image: '', content: '', publicationDate: '', category: ''
    })

    const onChange = (e) => {
        e.persist();
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const dataInput = {
            title: data.title, subtitle: data.subtitle, image: data.image, content: data.content, publicationDate: data.publicationDate, category: data.category
        }
        axios.post("https://localhost:8000/article/new", dataInput)
            .then((result) => {
                console.log(result.data);
                console.log(result.gender);
                history.push('/article')
            })

    }

  return (

    <div style={{paddingTop: '2%'}}>
      <Card style={{width:'40%', margin:'auto'}}>
      <Card.Title>Add article</Card.Title>
        <Card.Body>
       <Form onSubmit={handleSubmit} id="create-concert-form">
                <div className="container">

                    <div className="row">
                        
                        <div className="col-sm presentationResto pt-4 text-justify">

                            <div className="row g-3 align-items-center">
                                <div className="col-auto">
                                    <label htmlFor="nameArtise" className="col-form-label">Title</label>
                                </div>
                                <div className="col-auto">
                                    <input type="text" onChange={onChange} name="title" value={data.title}   id="title" className="form-control" aria-describedby="nameArtise" />
                                </div>

                            </div>

                            <div className="row g-3 align-items-center pt-3 ">
                                <div className="col-auto">
                                    <label htmlFor="nameConcert" className="col-form-label ">Subtitle</label>
                                </div>
                                <div className="col-auto">
                                    <input type="text" onChange={onChange} name="subtitle" value={data.subtitle}   id="subtitle" className="form-control" aria-describedby="nameConcert" />
                                </div>

                            </div>

                            <div className="row g-3 align-items-center pt-3 ">
                                <div className="col-auto">
                                    <label htmlFor="nameConcert" className="col-form-label ">Image</label>
                                </div>
                                <div className="col-auto">
                                    <input type="text" onChange={onChange} name="image" value={data.image}   id="img"   className="form-control" aria-describedby="nameConcert" />
                                </div>

                            </div>

                            <div className="row g-3 align-items-center pt-3 ">
                                <div className="col-auto">
                                    <label htmlFor="nameConcert" className="col-form-label ">Content</label>
                                </div>
                                <div className="col-auto">
                                    <textarea type="text"  onChange={onChange} name="content" value={data.content} id="content"  className="form-control" aria-describedby="nameConcert" />
                                </div>

                            </div>

                            <div className="row g-3 align-items-center pt-3 ">
                                <div className="col-auto">
                                    <label htmlFor="nameConcert" className="col-form-label ">Publication Date</label>
                                </div>
                                <div className="col-auto">
                                    <input type="text"  onChange={onChange} name="publicationDate" value={data.publicationDate} id="pDate"  className="form-control" aria-describedby="nameConcert" />
                                </div>

                            </div>

                            <div className="row g-3 align-items-center pt-3 ">
                                <div className="col-auto">
                                    <label htmlFor="nameConcert" className="col-form-label ">Category</label>
                                </div>
                                <div className="col-auto">
                                    <input type="aretext"  onChange={onChange} name="category" value={data.category} id="category"  className="form-control" aria-describedby="nameConcert" />
                                </div>

                            </div>

                            <div className="row g-3 align-items-center pt-3 ">
                               
                            <div className="col-auto">
                                <Button type="submit"> ADD </Button>
                                </div>
                                <div className="col-auto">
                                <Button href="/article"> RETURN </Button>
                                </div>
                             

                            </div>

                        </div>

                    </div>






                </div>

                
            </Form>
            </Card.Body>
</Card>
    </div>
  );
}

export default AddArticle;