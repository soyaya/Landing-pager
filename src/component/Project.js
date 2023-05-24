import React, { useState } from 'react';
import { Card, Button, Row, Col, Modal } from 'antd';
import { motion } from 'framer-motion';
import '../assets/Project.css';
import image1 from '../img/pix.jpg';
import image2 from '../img/Rub.jpg';


const Project = () => {
  const projects = [
    {
      id: 1,
      title: 'Project X',
      image: image1,
      content: 'Aliquip ut proident laborum ut pariatur eiusmod ipsum aute.',
      countdown: 21037956,
    },
    {
      id: 2,
      title: 'Project Y',
      image: image2,
      content: 'Cupidatat occaecat laboris quis magna dolore quis labore sit.',
      countdown: 63113852,
    },
    {
      id: 3,
      title: 'Project Z',
      image: image1,
      content: 'A great service for the agriculture industry. ',
      countdown: 94670777,
    },
  ];

  const titleVariants = {
    initial: { color: 'red', scale: 1 },
    animate: {
      color: ['red', 'green', 'blue'],
      scale: [1, 1.2, 1],
      transition: { duration: 1, repeat: Infinity },
    },
  };

  const firstLetterVariants = {
    initial: { y: 0, scale: 1 },
    animate: {
      y: [-10, 10, -10, 0],
      scale: [1, 1.2, 1.2, 1],
      transition: { duration: 0.6, repeat: Infinity },
    },
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleLearnMoreClick = (project) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
    setModalVisible(false);
  };

  const Timer = ({ countdown }) => {
    // Timer implementation remains the same
  };

  return (
    <Row gutter={[16, 16]} justify="center">
      {projects.map((project) => (
        <Col xs={24} sm={12} md={8} key={project.id}>
          <Card
            hoverable
            cover={<img src={project.image} alt={project.title} />}
            className="project-card"
          >
            <motion.div
              className="project-title"
              variants={titleVariants}
              initial="initial"
              animate="animate"
            >
              <motion.span
                className="project-first-letter"
                variants={firstLetterVariants}
                initial="initial"
                animate="animate"
              >
                {project.title.charAt(0)}
              </motion.span>
              {project.title.substring(1)}
            </motion.div>
            <p>{project.content}</p>
            <Button type="primary" className="glitter" onClick={() => handleLearnMoreClick(project)}>
              Learn More
            </Button>
            <Timer countdown={project.countdown} />
          </Card>
        </Col>
      ))}
      {selectedProject && (
        <Modal
          visible={modalVisible}
          onCancel={handleModalClose}
          footer={null}
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <h2>{selectedProject.title}</h2>
          <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%' }} />
          <p>{selectedProject.content}</p>
          <Button onClick={handleModalClose}>Close</Button>
        </Modal>
      )}
    </Row>
  );
};

export default Project;
