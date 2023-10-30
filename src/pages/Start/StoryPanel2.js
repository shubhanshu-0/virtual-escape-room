import React, { useState, useEffect } from 'react';

const StoryPanel2 = () => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const panelText = "Drawn by curiosity and a hint of reckless bravery, you decided to enter the mansion, ignoring the tales of curses that had plagued the mansion for centuries. The creaking wooden door opened with an unsettling groan, and you stepped into a world of haunting secrets.";

  useEffect(() => {
    const interval = setInterval(() => {
      if (textIndex < panelText.length) {
        setText(panelText.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 20); // Adjust the typing speed as needed (e.g., 50 milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [panelText, textIndex]);

  return (
    <>
    STORY
    <div className={`typewriter-text fade-in ${text ? 'typing' : ''} storytxt`}>{text}</div>
    </>
  );
}

export default StoryPanel2;
