import { useEffect, useRef } from 'react';
import Modal from './Modal';

const ModalRefused = ({ onClose, open, sound, image, text }) => {
  const audioRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (open) {
      // Create and play audio
      audioRef.current = new Audio(sound);
      audioRef.current.volume = 0.5;
      audioRef.current.play();

      // Set timeout to auto-close after 6 seconds
      timeoutRef.current = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
        onClose();
      }, 6000);

      // Clear timeout if audio ends naturally
      const handleEnded = () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };

      audioRef.current.addEventListener('ended', handleEnded);
    }

    // Cleanup: runs when open becomes false or component unmounts
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    };
  }, [open, sound, onClose]);

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          position: 'relative',
          height: '100%',
        }}
      >
        <h1
          style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: 20,
            position: 'absolute',
            top: 12,
            backgroundColor: '#ffffff',
            borderRadius: 12,
            margin: 0,
            padding: '10px 8px',
          }}
        >
          {text}
        </h1>
        <img
          src={image}
          style={{
            width: '100%',
            maxHeight: '70vh',
            objectFit: 'contain',
            borderRadius: 8
          }}
        />
      </div>
    </Modal>
  )
}

export default ModalRefused