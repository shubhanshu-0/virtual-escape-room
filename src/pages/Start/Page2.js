import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Panel1 from './Panel1';
import Panel2 from './Panel2';
import Panel3 from './Panel3';
import './storypanels.css';
import StoryPanel1 from './StoryPanel1'
import StoryPanel2 from './StoryPanel2';
import StoryPanel3 from './StoryPanel3'
import StoryPanel4 from './StoryPanel4';
import StoryPanel5 from './StoryPanel5'
import StoryPanel6 from './StoryPanel6';


const Page2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPanel, setCurrentPanel] = useState(1);

  useEffect(() => {
    if (!location.state || !location.state.auth) {
      navigate('/');
    }
  }, [location.state, navigate]);

  const handleNextClick = () => {
    if (currentPanel < 9) {
      setCurrentPanel(currentPanel + 1);
    } else {
      navigate('/page25', {
        state: {
          auth: true,
        },
      });
    }
  };
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);


  const getBackgroundClass = () => {
    switch (currentPanel) {
      case 4:
        return 'sp1';
      case 5:
        return 'sp2';
      case 6:
        return 'sp3';
      case 7:
        return 'sp4';
      case 8:
        return 'sp5';
      case 9:
        return 'sp6';
      default:
        return 'default-bg'; 
    }
  };

  return (
    <div className={`fade-in-panel2 bg start ${fadeIn ? 'fade-in' : ''} ${getBackgroundClass()}`}>
      <div className='title' style={{marginBottom:"7rem"}}>VIRTUAL ESCAPE</div>
      <div className='desc' style={{ padding:"2rem 10rem", alignSelf:"flex-start"}}>
      {currentPanel === 1 && <Panel1 />}
      {currentPanel === 2 && <Panel2 />}
      {currentPanel === 3 && <Panel3 />}
      {currentPanel === 4 && <StoryPanel1/>}
      {currentPanel === 5 && <StoryPanel2 />}
      {currentPanel === 6 && <StoryPanel3/>}
      {currentPanel === 7 && <StoryPanel4 />}
      {currentPanel === 8 && <StoryPanel5/>}
      {currentPanel === 9 && <StoryPanel6/>}
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default Page2;