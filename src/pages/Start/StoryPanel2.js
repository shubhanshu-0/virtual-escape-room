import React, { useState, useEffect } from 'react';

const StoryPanel2 = () => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const panelText = "Driven by your curiosity and a bit of daring, you made the choice to go inside the mansion, even though you'd heard stories about curses linked to it for many years. The old wooden door made a creepy creaking noise as it opened, and as you entered, you found yourself in a place filled with mysterious and spooky secrets.";

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

export default StoryPanel2;
