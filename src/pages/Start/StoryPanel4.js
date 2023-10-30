import React, { useState, useEffect } from 'react';

const StoryPanel4 = () => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const panelText = "With each passing moment, the mansion seemed to change, its rooms shifting and distorting as though possessed by vengeful spirits. Whispers echoed through the halls, and unsettling apparitions materialized. You are now trapped, caught in a sinister web of paranormal occurrences.";
  
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

export default StoryPanel4;
