'use client';

import { useState, useEffect } from 'react';

interface Headline {
  text: string;
  highlightStart?: number;
  highlightEnd?: number;
}

interface TypewriterHeadlineProps {
  headlines: Headline[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export default function TypewriterHeadline({
  headlines,
  typingSpeed = 60,
  deletingSpeed = 40,
  pauseTime = 1500,
}: TypewriterHeadlineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentHeadline = headlines[currentIndex];
    const fullText = currentHeadline.text;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting, move to next headline
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % headlines.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, headlines, typingSpeed, deletingSpeed, pauseTime, isPaused]);

  const currentHeadline = headlines[currentIndex];
  const highlightStart = currentHeadline.highlightStart ?? 0;
  const highlightEnd = currentHeadline.highlightEnd ?? currentText.length;

  return (
    <h1 className="text-6xl md:text-8xl font-heading font-medium tracking-tighter leading-none min-h-[1.2em]">
      {currentText.slice(0, highlightStart)}
      {currentText.length > highlightStart && (
        <span className="gradient-text">
          {currentText.slice(highlightStart, Math.min(highlightEnd, currentText.length))}
        </span>
      )}
      {currentText.length > highlightEnd && currentText.slice(highlightEnd)}
      <span className="inline-block w-0.5 h-[1em] bg-primary ml-1 animate-pulse" />
    </h1>
  );
}
