import React, { useState, useEffect } from "react";

const AutoType = ({ texts, speed = 150, pause = 1000 }) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isFinished) return;

    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, speed);

      if (charIndex === currentText.length) {
        if (textIndex === texts.length - 1) {
          // Final text reached, stop after it fully types out
          timeout = setTimeout(() => {
            setDisplayText(texts[0]); // go back to name
            setIsFinished(true);
          }, pause);
        } else {
          setIsDeleting(true);
          timeout = setTimeout(() => {}, pause);
        }
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, speed / 2);

      if (charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => prev + 1);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, pause, isFinished]);

  return <span style={{color:"yellow"}}>{displayText}</span>;
};

export default AutoType;
