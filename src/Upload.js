import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Row, Col, Button, Form, Container } from 'react-bootstrap';

const Upload = () => {
  const handleFiles = e => {
    console.log(e.target.files);
  };

  const uploadFiles = e => {};

  return (
    <Container>
      <Row>
        <Col>
          <Form encType="multipart/form-data">
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Directory</Form.Label>
              <Form.Control
                type="file"
                name="files[]"
                multiple=""
                webkitdirectory=""
                onChange={handleFiles}
              />
              <Button onClick={uploadFiles}>업로드</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="formGithub" className="mb-3">
              <Form.Label>GitHub</Form.Label>
              <Form.Control type="text" name="github"></Form.Control>
              <Button>제출</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Upload;
