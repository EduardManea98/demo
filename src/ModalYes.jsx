import { useEffect, useRef, useState } from 'react';
import Confetti from 'react-confetti';
import Modal from './Modal';

const playBackgroundMusic = (music) => {
  const audio = new Audio(music);
  audio.volume = 0.8;
  audio.loop = true;
  audio.play();
  return audio;
}

const ModalYes = ({ open, sound, image }) => {
  const audioRef = useRef(null);
  const imageRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  console.log(dimensions)
  useEffect(() => {
    if (open && sound) {
      audioRef.current = playBackgroundMusic(sound);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    };
  }, [open, sound]);

  useEffect(() => {
    if (imageRef.current) {
      const updateDimensions = () => {
        setDimensions({
          width: imageRef.current.offsetWidth,
          height: imageRef.current.offsetHeight
        });
      };

      // Wait for image to load
      if (imageRef.current.complete) {
        updateDimensions();
      } else {
        imageRef.current.addEventListener('load', updateDimensions);
      }
      
      window.addEventListener('resize', updateDimensions);

      return () => {
        window.removeEventListener('resize', updateDimensions);
        if (imageRef.current) {
          imageRef.current.removeEventListener('load', updateDimensions);
        }
      };
    }
  }, [open]);

  return (
    <Modal
      open={open}
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
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        style={{
          zIndex: 100,
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
        <h1
          style={{
            position: 'absolute',
            top: 12,
            backgroundColor: '#ffffff',
            borderRadius: 12,
            margin: 0,
            padding: '10px 8px',
          }}
        >
          NU MAI POTI DA INAPOI
        </h1>
        <img
          ref={imageRef}
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

export default ModalYes