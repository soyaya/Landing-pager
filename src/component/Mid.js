import React, { useState } from 'react';
import { Row, Col, Card, Modal } from 'antd';
import { SnippetsTwoTone , HighlightTwoTone  , FileAddTwoTone , DatabaseTwoTone } from '@ant-design/icons';







function Mid() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const showModal = (content) => {
    setIsModalVisible(true);
    setModalContent(content);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleLinkClick = (content) => {
    showModal(content);
  };

  return (
    <div style={{ width: '100%', padding: '20px' }}>
      <Modal
        title="Davtechinvest"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{modalContent}</p>
      </Modal>
      <Row gutter={[16, 16]} style={{fontFamily:'Ariel', fontSize:'18px'}}>
        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <Card
  title="Data Collection and Analysis"
  extra={<button href="#" onClick={() => handleLinkClick('Dahering relevant data from various sources within the target industries. This may involve leveraging APIs, conducting surveys, scraping publicly available data, or partnering with data providers. The collected data can then be analyzed using advanced analytical techniques to identify patterns, trends, and correlations that can provide valuable insights to investors')}>More</button>}
  style={{ width: '100%',  }}
>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <span style={{ fontSize:'50px' }}><DatabaseTwoTone /></span>
    <h3 style={{ textAlign: 'center' }}>Focused on different industries</h3>
    <p style={{ textAlign: 'center', color:'black' }}>Thlo lorem chniques to identify patterns, trends, and correlations that can provide valuable insights to investors</p>
  </div>
</Card>

        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <Card
  title="Machine Learning Model Development"
  extra={<button href="#" onClick={() => handleLinkClick('Laborum officia officia do consectetur cupidatat voluptate excepteur qui nisi consectetur culpa dolor.')}>More</button>}
  style={{ width: '100%' }}
>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <span style={{  fontSize:'50px' }}><FileAddTwoTone /></span>
    <h3 style={{ textAlign: 'center' }}>Machine Learning  Model Development</h3>
    <p style={{ textAlign: 'center',color:'black'  }}>Fugiat cupidatat tempor laborum nulla cillum cillum tempor mollit aliqua consequat nostrud aliquip deserunt elit.</p>
  </div>
</Card>

        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <Card
  title="Domain Expertise"
  extra={<button href="#" onClick={() => handleLinkClick('Et deserunt sit eiusmod laborum eiusmod.')}>More</button>}
  style={{ width: '100%' }}
>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <span style={{ fontSize:'50px' }}><HighlightTwoTone /></span>
    <h3 style={{ textAlign: 'center' }}>in-depth knowledge and understanding</h3>
    <p style={{ textAlign: 'center',color:'black'  }}>Lorem nulla nisi pariatur dolore voluptate enim duis irure consectetur tempor.</p>
  </div>
</Card>

        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <Card
  title="Collaboration and Partnerships"
  extra={<button href="#" onClick={() => handleLinkClick('Adipisicing ea reprehenderit qui officia mollit laboris ea voluptate labore nisi ullamco magna amet.')}>More</button>}
  style={{ width: '100%' }}
>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <span style={{ fontSize:'50px' }}><SnippetsTwoTone /></span>
    <h3 style={{ textAlign: 'center' }}>Collaboration and Partnerships</h3>
    <p style={{ textAlign: 'center' }}>Voluptate ex ipsum exercitation proident consequat.</p>
  </div>
</Card>

        </Col>
      </Row>
    </div>
  );
}

export default Mid;
