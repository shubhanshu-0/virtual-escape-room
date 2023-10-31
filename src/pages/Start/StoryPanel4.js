import React, { useState, useEffect } from 'react';

const StoryPanel4 = () => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const panelText = "As time went on, the mansion started to transform. Its rooms seemed to move and twist, almost like they were being controlled by vengeful ghosts. You could hear faint, eerie voices in the corridors, and creepy figures would suddenly appear. Now, you're stuck and unable to escape, trapped in a very spooky and strange series of ghostly events.";
    
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

export default StoryPanel4;
