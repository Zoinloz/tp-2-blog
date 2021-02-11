import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function Article() {
    return (

        <div>

           
                <Button className="pt-40" variant="primary" href="/article/add">ADD</Button>
          

            <Table striped bordered hover style={{ width: '90%', margin: 'auto' }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Subtitle</th>
                        <th>Category</th>
                        <th>Publication date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>12/12/2020</td>
                        <td>EDIT / DELETE</td>
                    </tr>


                </tbody>
            </Table>
        </div>
    );
}

export default Article;