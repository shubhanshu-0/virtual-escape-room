import React, { useState, useEffect } from 'react';

const StoryPanel3 = () => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const panelText = "As you move forward , you found yourself alone and your friends have disappeared, you start touching objects with a malevolent history, unaware of the dark energy that now clung to their every step. Each item they interacted with carried its own unique curse, revealing fragments of the mansion's gruesome history.";
  
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

export default StoryPanel3;
