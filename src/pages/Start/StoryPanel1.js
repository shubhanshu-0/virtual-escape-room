import React, { useState, useEffect } from 'react';

const StoryPanel1 = () => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const panelText = "In the middle of a forest covered in thick fog, you and your adventurous friends found yourselves on a night with no moon. The only source of light was the flashlights they were carrying. As you continued to explore deeper into the woods, a spooky shape appeared through the mist. It was the Thornwood Mansion, a house that had been forgotten for a long time. It looked big and old, with its decaying front giving it a creepy and intimidating appearance, casting a scary shadow over all of you.";

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
    <>
    {/* STORY */}
    <div className={`typewriter-text fade-in ${text ? 'typing' : ''} storytxt`}>{text}</div>
    </>
  );
}

export default StoryPanel1;
