import React, { useState, useEffect } from 'react';

const StoryPanel1 = () => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const panelText = "In the heart of a fog-shrouded forest, you with your adventurous friends found yourselves on a moonless night, their flashlights the only beacons in the darkness. As you ventured deeper into the woods, an eerie silhouette emerged from the mist - the long-forgotten Thornwood Mansion. It loomed, its decaying facade casting an ominous shadow over them.";

  useEffect(() => {
    const interval = setInterval(() => {
      if (textIndex < panelText.length) {
        setText(panelText.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 20); 

    return () => {
      clearInterval(interval);
    };
  }, [panelText, textIndex]);

  return (
    <div>
    STORY
    <div className={`typewriter-text fade-in ${text ? 'typing' : ''} storytxt`}>{text}</div>
    </div>
  );
}

export default StoryPanel1;
