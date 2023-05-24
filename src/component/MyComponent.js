import React, { useState } from 'react';
import { Row, Col, Form, Input, Upload, Button, Modal } from 'antd';
import Rub from '../img/imge.jpg';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const { TextArea } = Input;

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);
const db = getFirestore();

const MyComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleViewRoles = () => {
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const onFinish = async (values) => {
    try {
      await addDoc(collection(db, 'jobSeekers'), {
        name: values.name,
        email: values.email,
        experience: values.text,
        resume: values.upload?.fileList[0]?.name,
      });

      form.resetFields();

      // Display success message or perform any necessary actions

    } catch (error) {
      // Handle the error (e.g., display error message)
    }
  };

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={15}>
        <div style={{ height: '600px' }}>
          <img
            src={Rub}
            alt="Rub Image"
            style={{ width: '600px', maxWidth: '100%', height: '80%', objectFit: 'cover' }}
          />
        </div>
      </Col>
      <Col xs={24} sm={12} md={9}>
        <div>
          <h2 style={{ textAlign: 'center' }}>Career</h2>
          <p style={{ textAlign: 'center', fontSize: '24px' }}>
            Click the button to view available opportunities
            <Button onClick={handleViewRoles}>View roles</Button>
          </p>
          <Form form={form} onFinish={onFinish} style={{ width: '70%', margin: '0 auto' }}>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="text" label="Experience" rules={[{ required: true }]}>
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item name="upload" label="Resume">
              <Upload>
                <Button>Click to Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
      <Modal
        title="Available Roles"
        visible={modalVisible}
        onCancel={handleModalCancel}
        footer={null}
        width={600}
      >
        {/* Place your content for the modal here */}
        <p>Modal Content</p>
      </Modal>
    </Row>
  );
};

export default MyComponent;
