import React from 'react';
import { Row, Col, Typography, Input, Button } from 'antd';
import { MailOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import '../assets/Footer.css';
import '../assets/Footer.sass';
const { Title, Text } = Typography;

const Footer = () => {
  return (
    <footer className="footer">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <div className="footer-column">
            <Title level={5}>Quick Links</Title>
            <ul>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <div className="footer-column">
            <Title level={5}>Useful Links</Title>
            <ul>
              <li>Disclaimer</li>
              <li>Privacy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <div className="footer-column">
            <Title level={5}>Contact Us</Title>
            <ul>
              <li>123 Main Street, City</li>
              <li>123-456-7890</li>
              <li>info@example.com</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="footer-bottom">
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="footer-subscribe">
            <Title level={5}>Subscribe to Our Newsletter</Title>
            <Input placeholder="Enter your email" />
            <Button type="primary">Subscribe</Button>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="footer-social-links">
            <Text className="footer-social-text">Follow Us:</Text>
            <FacebookOutlined className="footer-social-icon" />
            <TwitterOutlined className="footer-social-icon" />
            <MailOutlined className="footer-social-icon" />
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
