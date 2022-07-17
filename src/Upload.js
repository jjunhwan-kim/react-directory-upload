import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { Row, Col, Button, Form, Container } from 'react-bootstrap';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [upload, setUpload] = useState(false);

  const handleFile = e => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const uploadFile = async e => {
    if (file === null) {
      alert('파일을 등록해주세요');
    }

    const formData = new FormData();
    formData.append('file', file);

    console.log(formData);

    setUpload(true);

    const response = await axios.post(
      'http://localhost:8080/upload',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    setFile(null);
    setUpload(false);

    console.log(response);
  };

  if (upload) {
    return 'Uploading...';
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form encType="multipart/form-data">
            <Form.Group className="mb-3">
              <Form.Label>File</Form.Label>
              <Form.Control type="file" name="file" onChange={handleFile} />
              <Button onClick={uploadFile}>업로드</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Upload;
