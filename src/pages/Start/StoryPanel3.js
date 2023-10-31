import React, { useState, useEffect } from 'react';

const StoryPanel3 = () => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const panelText = "As you continued, you realized that you were now by yourself, and your friends had vanished. You began to touch objects in the mansion, not knowing that these items held a kind of negative energy from their dark past. Each object your hand came into contact with had its own curse, and by touching them, you uncovered parts of the mansion's disturbing and frightening history.";

  
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
    {/* STORY */}
    <div className={`typewriter-text fade-in ${text ? 'typing' : ''} storytxt`}>{text}</div>
    </>
  );
}

export default StoryPanel3;
