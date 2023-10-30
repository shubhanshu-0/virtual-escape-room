import React, { useEffect, useState } from 'react';
import './Gameroom.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useScore } from "../../components/ScoreContext";
import Modal from "@mui/material/Modal";
import { gameover } from "../Dead/gameover";


function Game() {
  const { score, decreaseScore , isDead } = useScore();
  const [instructionsVisible, setInstructionsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [ischantpapervisible, setchantpapervisible] = useState(false);


  useEffect(()=>{
    if(!location.state || !location.state.auth){
      navigate('/');
    }
  },[]);

  const handleClick = () => {
    navigate('/Gameroom', {
        state: {
          auth: true
        },
      });
  };


  const restart = () => {
    navigate('/Gameroom', {
        state: {
          auth: true
        },
      });
  };

  const toggleInstructions = () => {
    decreaseScore(20);
    setInstructionsVisible(!instructionsVisible);
  };

  
  const [pathWidths, setPathWidths] = useState(
    // Initialize path widths as an array
    [
      { top: 570, left: 750, width: 65, height: 120 , type : 1,speed : 'fast' , no:'1'},
      { top: 432, left: 750, width: 65, height: 120 , type : 1,speed : 'fast' , no:'2'},
      { top: 570, left: 550, width: 200, height: 60 , type : 2,speed : 'slow', no:'3'},
      { top: 570, left: 815, width: 115, height: 60 , type : 1,speed : 'fast' , no:'4'},
      { top: 512, left: 605, width: 145, height: 40 , type : 2,speed : 'fast',no:'5'},
      { top: 300, left: 600, width: 50, height: 200 , type : 2,speed : 'fast',no:'6'},
      { top: 320, left: 650, width: 200, height: 40 , type : 2,speed : 'fast',no:'7'},
      { top: 530, left: 405, width: 200, height: 40 , type : 1,speed : 'fast',no:'8'},
      { top: 570, left: 405, width: 70, height: 60 , type : 2,speed : 'fast',no:'9'},
      { top: 330, left: 540, width: 60, height: 100 , type : 2,speed : 'fast',no:'10'},
      { top: 360, left: 480, width: 60, height: 70 , type : 2,speed : 'fast',no:'11'},
      { top: 432, left: 650, width: 100, height: 50 , type : 1,speed : 'fast',no:'12'},
      { top: 630, left: 325, width: 300, height: 50 , type : 2,speed : 'fast',no:'13'},
      { top: 440, left: 435, width: 165, height: 60 , type : 2,speed : 'fast',no:'14'},
      { top: 500, left: 435, width: 50, height: 30 , type : 1,speed : 'fast',no:'15'},
      { top: 480, left: 335, width: 50, height: 150 , type : 2,speed : 'fast',no:'16'},
      { top: 380, left: 335, width: 100, height: 100 , type : 2,speed : 'fast',no:'17'},
      { top: 310, left: 335, width: 50, height: 70 , type : 2,speed : 'fast',no:'18'},
      { top: 260, left: 335, width: 150, height: 50 , type : 2,speed : 'fast',no:'19'},
    //   { top: 200, left: 395, width: 50, height: 100 , type : 2,speed : 'fast',no:'20'},
    ]
  );
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (!isGameOver) {
        const isCursorInPath = pathWidths.some((path) =>
          mouseX >= path.left &&
          mouseX <= path.left + path.width &&
          mouseY >= path.top &&
          mouseY <= path.top + path.height
        );
        if ((mouseX < 930 || mouseX > 1080 ||  mouseY < 540 || mouseY > 710) && (mouseX < 395 || mouseX > 460 || mouseY < 180 || mouseY > 260 ) && !isCursorInPath) {
          decreaseScore(10);
          setIsGameOver(true);
          
        }

        const updatedWidths = pathWidths.map((path) => {
          if (
            mouseX >= path.left &&
            mouseX <= path.left + path.width &&
            mouseY >= path.top &&
            mouseY <= path.top + path.height
          ) {
           
            setTimeout(() => {
              let newWidth = path.width;
              let newHeight = path.height;
              if (path.type == 1) {
                newWidth--;
                if(path.speed == 'fast')  newWidth-=2;
              } else if(path.type == 2) {
                newHeight--;
                if(path.speed == 'fast')  newHeight-=2;
              }


              if (newWidth <= 0 || newHeight <= 0) {
                decreaseScore(10);
                setIsGameOver(true);
              }

              setPathWidths((prevPathWidths) =>
                prevPathWidths.map((p, index) =>
                  index === pathWidths.indexOf(path)
                    ? { ...p, width: newWidth, height: newHeight }
                    : p
                )
              );
            }, 30);
          }
          return path;
        });
        setPathWidths(updatedWidths);
      }

      setCursorX(mouseX);
      setCursorY(mouseY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isGameOver, pathWidths]);


  const chantpaper = () => {
    setchantpapervisible(!ischantpapervisible);
  };

  return (
    <div className="Game">
      <div className="start-point"></div>
      {isGameOver && (
        <div className="popup-container">
          <div className="game-over-popup">
            <h1>You have Lost blood , You need to Restart !</h1>
            <button onClick={restart}>RESTART</button>
          </div>
        </div>
      )}
      <div className="game-frame">
      {pathWidths.map((path, index) => (
        <div
          key={index}
          className="path"
          style={{
            width: path.width + 'px',
            height: path.height + 'px',
            top: path.top + 'px',
            left: path.left + 'px',
          }}></div>
        // >{path.no}</div>
      ))}
      </div>
      
      <div className="cursor" style={{ left: cursorX + 'px', top: cursorY + 'px' }}></div>
      <button className="end-point" onClick={chantpaper}></button>
      <Modal open={ischantpapervisible} onClose={chantpaper}>
        <div className='chant'>
            <button onClick={handleClick} style={{marginLeft:'17%'}}>Remember The Chant!</button>
        </div>
     </Modal>
    </div>
  );
}

export default Game;
