import React, { useState } from 'react';
import { Typography, Card, Button } from 'antd';
import rubImage from '../img/Rub.jpg';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const AnimatedCard = motion(Card);
const AnimatedButton = motion(Button);

const CustomComponent = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <AnimatedCard
        style={{ width: '800px', maxWidth: '100%', margin: '16px' }}
        hoverable
        cover={
          <div style={{ height: '400px' }}>
            <img
              src={rubImage}
              alt="Rub Iage"
              style={{ width: '800px',maxWidth: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        }
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleFlip}
      >
        {isFlipped ? (
          <div style={{ padding: '16px' }}>
            <Title level={3} style={{ textAlign: 'center' }}>
              //HOW WE HELP
            </Title>
            <Paragraph style={{ textAlign: 'center' , color:'black',fontSize:'24PX'}}>
              mollit commodo est aute cupidatat. Culpa pariatur in mollit elit labore duis exercitation quis minim tempor nostrud. Consequat est consectetur pariatur esse dolore. Non cupidatat nulla cupidatat adipisicing culpa sint adipisicing. Deserunt ipsum veniam officia tempor sunt amet nostrud ipsum enim anim exercitation proident id. Occaecat labore consectetur amet occaecat quis dolore amet consequat cillum Lorem. Exercitation tempor magna cillum ut nostrud do mollit pariatur non.
            </Paragraph>
            <AnimatedButton
              type="primary"
              style={{ marginTop: '16px', opacity: 1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={handleFlip}
            >
              Go Back
            </AnimatedButton>
          </div>
        ) : (
          <div style={{ padding: '16px' }}>
            <Title level={3} style={{ textAlign: 'center'  }}>
              <h1>INVESTORS</h1>
            </Title>
            <Paragraph style={{ textAlign: 'center',color:'black',fontSize:'24PX' }}>
         Elit irure ea amet in in officia excepteur occaecat cillum. Nulla nisi minim officia ea tempor tempor amet nulla officia nisi. Ea culpa do proident velit incididunt consectetur et ut minim. Velit proident laboris culpa duis exercitation duis minim. Cupidatat dolore tempor exercitation in voluptate ut cillum labore cillum.
            </Paragraph>
            <AnimatedButton
              type="primary"
              style={{ marginTop: '16px', opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={handleFlip}
            >
              LEARN MORE
            </AnimatedButton>
          </div>
        )}
      </AnimatedCard>
    </div>
  );
};

export default CustomComponent;
