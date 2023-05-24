import React, { useState } from 'react';
import { Typography, Button, Card, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import { UserOutlined, BookOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import Pix from '../img/rubImage.jpg'

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const AnimatedCard = motion(Card);
const AnimatedButton = motion(Button);

const Appdev = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ textAlign: 'center' }}>
          <div style={{ padding: '16px', }}>
            <Title level={3}>{isFlipped ? 'SERVICES AND SOLUTION' : 'ABOUT US'}</Title>
            <div style={{ height: '400px' }}>
            <img
              src={Pix}
              alt="Rub Image"
              style={{ width: '500px',maxWidth: '100%', height: '80%', objectFit: 'cover' }}
            />
          </div>
            <Paragraph style={{fontSize:'24px' }}>{isFlipped ? ' Ipsum irure eu occaecat occaecat qui sit aute.' : 'Voluptate in adipisicing eiusmod quis amet dolor in fugiat pariatur exercitation nulla pariatur aliqua. '}</Paragraph>
            {isFlipped ? (
              <AnimatedButton
                type="primary"
                style={{ marginLeft: '10px', opacity: 1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onClick={handleFlip}
              >
                Go Back
              </AnimatedButton>
            ) : (
              <Button type="primary" style={{ marginLeft: '10px' }} onClick={handleFlip}>
                Checkout our services and solution
              </Button>
            )}
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div><h2 style={{ textAlign:'center' }}>SERVICES</h2></div>
          <Row gutter={[16, 16]} justify="space-between">
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <AnimatedCard
                hoverable
                style={{ width: '100%' }}
                cover={<UserOutlined style={{ fontSize: '50px', color: 'red' }} />}
              >
                <Meta style={{ fontSize: '20px', color: 'black' }} title="APP DEVELOPMENT " description="Laborum voluptate fugiat sit pariatur et adipisicing occaecat et do voluptate tempor laborum dolore exercitation." />
              </AnimatedCard>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <AnimatedCard
                hoverable
                style={{ width: '100%' }}
                cover={<BookOutlined style={{ fontSize: '50px', color: 'green' }} />}
              >
                <Meta style={{ fontSize: '20px', color: 'black' }} title="INDUSTRY ANALYSIS" description="Deserunt ea officia enim eiusmod cupidatat sunt qui sit anim qui ullamco veniam."/>
              </AnimatedCard>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <AnimatedCard
                hoverable
                style={{ width: '100%' }}
                cover={<MessageOutlined style={{ fontSize: '50px', color: 'blue' }} />}
              >
                <Meta style={{ fontSize: '20px', color: 'black' }} title="CLOUD SOLUTION" description="Enim culpa sit dolor consectetur duis magna proident." />
              </AnimatedCard>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <AnimatedCard
                hoverable
                style={{ width: '100%' }}
                cover={<SettingOutlined style={{ fontSize: '50px', color: 'orange' }} />}
              >
                <Meta style={{ fontSize: '20px', color: 'black' }} title="DATA INFORMATION" description=" Aute incididunt sint sint ipsum laboris officia esse elit culpa cupidatat ut." />
              </AnimatedCard>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Appdev;
