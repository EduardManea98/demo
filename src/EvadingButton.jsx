import { useEffect, useRef, useState } from 'react';
import Button from './Button';

const EvadingButton = ({ text, onClick, style }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    // Initialize position
    if (!isInitialized) {
      const rect = button.getBoundingClientRect();
      setPosition({ x: rect.left, y: rect.top });
      setIsInitialized(true);
    }

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calculate distance from mouse to button center
      const deltaX = buttonCenterX - mouseX;
      const deltaY = buttonCenterY - mouseY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Trigger distance (when to start moving away)
      const triggerDistance = 150;

      if (distance < triggerDistance) {
        // Calculate direction to move away from mouse
        const angle = Math.atan2(deltaY, deltaX);
        
        // Move at same speed as mouse is approaching
        const moveSpeed = 5; // Multiplier to ensure it stays ahead
        const moveX = Math.cos(angle) * moveSpeed;
        const moveY = Math.sin(angle) * moveSpeed;

        setPosition(prev => {
          const newX = prev.x + moveX;
          const newY = prev.y + moveY;

          // Keep button within viewport bounds
          const maxX = window.innerWidth - rect.width - 20;
          const maxY = window.innerHeight - rect.height - 20;

          return {
            x: Math.max(20, Math.min(maxX, newX)),
            y: Math.max(20, Math.min(maxY, newY))
          };
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isInitialized]);

  return (
    <Button
      ref={buttonRef}
      onClick={onClick}
      style={{
        ...style,
        position: isInitialized ? 'fixed' : 'static',
        left: isInitialized ? position.x : 'auto',
        top: isInitialized ? position.y : 'auto',
        transition: 'none',
        cursor: 'pointer',
        zIndex: 10
      }}
      text={text}
    />
  );
};

export default EvadingButton;
