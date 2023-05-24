import React, { useState } from 'react';
import Pix from '../img/pix.jpg';
import { Carousel, Button, Space, Modal, Form, Input } from 'antd';
import { Col, Row } from 'antd';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const carouselStyle = {
  width: '100%',
  height: '100%',
  position: 'relative',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const white = {
  backgroundColor: 'white',
};

const position = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '70vh',
  textAlign: 'center',
};

const green = {
  color: 'green',
};

function Front() {
  const [learnMoreModalVisible, setLearnMoreModalVisible] = useState(false);
  const [contactUsModalVisible, setContactUsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleLearnMoreClick = () => {
    setLearnMoreModalVisible(true);
  };

  const handleContactUsClick = () => {
    setContactUsModalVisible(true);
  };

  const handleModalClose = () => {
    setLearnMoreModalVisible(false);
    setContactUsModalVisible(false);
  };

  const handleContactFormSubmit = async (values) => {
    try {
      await db.collection('contacts').add({
        name: values.name,
        email: values.email,
        message: values.message,
      });

      // Reset the form fields
      form.resetFields();

      // Close the modal
      setContactUsModalVisible(false);

      // Display success message or perform any necessary actions
      console.log('Form submitted successfully');
    } catch (error) {
      // Handle the error (e.g., display error message)
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section>
      <Row style={white}>
        <Col span={18} xs={24} sm={24} md={15} lg={15} xl={15}>
          <Carousel autoplay>
            <div style={carouselStyle}>
              <img src={Pix} alt="logo" style={imageStyle} />
            </div>
            <div style={carouselStyle}>
              <img src={Pix} alt="logo" style={imageStyle} />
            </div>
            <div style={carouselStyle}>
              <img src={Pix} alt="logo" style={imageStyle} />
            </div>
          </Carousel>
        </Col>
        <Col span={6} xs={24} sm={24} md={9} lg={9} xl={9} style={position}>
          <div>
            <h1>
              WE KEEP <span style={green}>INVESTORS</span> INFORMED
            </h1>
            <h5 style={{ margin: '50px', fontFamily: 'Arial', fontSize: '20px' }}> 
            Laborum eiusmod aliquip eu quis sunt ut elit aliqua Lorem qui do.
            </h5>

            <Space wrap>
              <Button type="primary" className="glitter" onClick={handleLearnMoreClick}>
                Learn More
              </Button>
              <Button type="primary" className="glitter" onClick={handleContactUsClick}>
                Contact Us
              </Button>
            </Space>
          </div>
        </Col>
      </Row>

      <Modal visible={learnMoreModalVisible} onCancel={handleModalClose} footer={null}>
        {/* Modal Content for Learn More */}
        <h2>Davinvest</h2>
        <p>
          Excepteur velit veniam ex non sint et adipisicing culpa. Culpa consequat id consectetur id veniam. Enim fugiat in nisi pariatur officia in ullamco. Dolor excepteur deserunt mollit ea sint consectetur voluptate velit duis mollit eu occaecat officia amet. Sunt fugiat voluptate ad aute pariatur eu elit sunt exercitation ea fugiat ut consequat nostrud.

Aliqua et nulla id exercitation amet do fugiat adipisicing. Aute nisi aliquip laborum eu mollit eu. Pariatur voluptate ullamco exercitation cupidatat. Lorem commodo ad velit velit id officia dolor consequat.

Proident commodo duis id voluptate commodo ea pariatur laboris sunt. Laborum in labore magna enim deserunt ex minim in eu officia dolore. Ut labore magna laborum velit incididunt non qui ut elit consectetur est aute id.
        </p>
      </Modal>

      <Modal visible={contactUsModalVisible} onCancel={handleModalClose} footer={null}>
        {/* Modal Content for Contact Us */}
        <h2>Contact Us Modal</h2>
        <Form form={form} onFinish={handleContactFormSubmit}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please enter your name',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: 'Please enter your email',
              },
              {
                type: 'email',
                message: 'Please enter a valid email',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="message"
            label="Message"
            rules={[
              {
                required: true,
                message: 'Please enter your message',
              },
            ]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </section>
  );
}

export default Front;
