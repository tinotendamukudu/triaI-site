'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  waitBeforeDelete?: number;
  loop?: boolean;
  className?: string;
  cursor?: boolean;
}

export default function Typewriter({
  text,
  speed = 100,
  deleteSpeed = 50,
  delay = 0,
  waitBeforeDelete = 2000,
  loop = false,
  className = '',
  cursor = true,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    const currentText = displayedText;
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
      } else {
        timer = setTimeout(() => {
          setDisplayedText(text.substring(0, currentText.length - 1));
        }, deleteSpeed);
      }
    } else {
      if (currentText === text) {
        if (loop) {
          timer = setTimeout(() => setIsDeleting(true), waitBeforeDelete);
        }
      } else {
        timer = setTimeout(() => {
          setDisplayedText(text.substring(0, currentText.length + 1));
        }, speed);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, started, text, speed, deleteSpeed, waitBeforeDelete, loop]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && (
        <span className="animate-pulse ml-1">|</span>
      )}
    </span>
  );
}
