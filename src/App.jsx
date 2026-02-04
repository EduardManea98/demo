/* eslint-disable react-hooks/set-state-in-effect */
import { useState } from "react";
import Button from './Button';
import ModalRefused from "./ModalRefused";
import ModalYes from "./ModalYes";

const pairedImagesSounds = [
  { text: 'aha...', image: 'images/refuse/bruh.jpg', sound: 'sounds/bruh.mp3' },
  { text: 'sper ca ai gresit butonul', image: 'images/refuse/among-us-role-reveal.jpg', sound: 'sounds/among-us-role-reveal.mp3' },
  { text: 'sa inteleg ca nu', image: 'images/refuse/banana-cat-cry.jpg', sound: 'sounds/banana-cat-cry.mp3' },
  { text: 'DE CE TOT APESI AICI!!!', image: 'images/refuse/auughhh.jpg', sound: 'sounds/auughhh.mp3' },
  { text: 'vezi ca ma activez', image: 'images/refuse/pumnu-meu-beton-armat.jpg', sound: 'sounds/pumnu-meu-beton-armat.mp3' },
  { text: 'SI ITI SARE MAMALIGA', image: 'images/refuse/punch.gif', sound: 'sounds/punch.mp3' },
  { text: 'ce veatza crudaaaa', image: 'images/refuse/billie-eilish.webp', sound: 'sounds/billie-eilish.mp3' },
  { text: 'cine a pus butonul asta aci?', image: 'images/refuse/cry.gif', sound: 'sounds/cry.mp3' },
  { text: 'SA-L IA DRACII', image: 'images/refuse/das-war-ein-befehl.jpg', sound: 'sounds/das-war-ein-befehl.mp3' },
  { text: 'CA IMI DA', image: 'images/refuse/emotional-damage.avif', sound: 'sounds/emotional-damage.mp3' },
  { text: 'UN LUCRU AM DE ZIS', image: 'images/refuse/shocked.jpg', sound: 'sounds/shocked.mp3' },
  { text: 'english or spanish?', image: 'images/refuse/english-or-spanish-song.webp', sound: 'sounds/english-or-spanish-song.mp3' },
  { text: 'TE-AM PRINS', image: 'images/refuse/faaah.jpg', sound: 'sounds/faaah.mp3' },
  { text: 'AI APASAT IAR!!!!', image: 'images/refuse/oh-my-god-meme.jpg', sound: 'sounds/oh-my-god-meme.mp3' },
  { text: 'il spamezi...', image: 'images/refuse/rick-morty.jpg', sound: 'sounds/rick-morty.mp3' },
  { text: 'pana nu mai merge', image: 'images/refuse/error.jpg', sound: 'sounds/error.mp3' },
  { text: 'pauza de bulangerie', image: 'images/refuse/french-meme-song.jpg', sound: 'sounds/french-meme-song.mp3' },
  { text: 'revenind...', image: 'images/refuse/loading-lost-connection.gif', sound: 'sounds/loading-lost-connection.mp3' },
  { text: 'CUM ADICA REVENIND?!', image: 'images/refuse/reveal.gif', sound: 'sounds/reveal.mp3' },
  { text: 'TE-AM PRINS CA AI APASAT IAR', image: 'images/refuse/vine-boom.webp', sound: 'sounds/vine-boom.mp3' },
  { text: 'NU MAI POT!!!', image: 'images/refuse/sad-song.jpg', sound: 'sounds/sad-song.mp3' },
  { text: 'rezista...', image: 'images/refuse/they-ask-you-how-you-are.jpg', sound: 'sounds/they-ask-you-how-you-are.mp3' },
  { text: 'one more thing...', image: 'images/refuse/let-her-go.jpg', sound: 'sounds/let-her-go.mp3' },
  { text: "THAT'S IT! NO MORE!", image: 'images/refuse/tuco-get-out.avif', sound: 'sounds/tuco-get-out.mp3' },
];

function App() {
  const [isRefuseModalOpen, setIsRefuseModalOpen] = useState(false);
  const [refuseCount, setRefuseCount] = useState(-1);

  const [isYesModalOpen, setIsYesModalOpen] = useState(false);

  const handleOnClickNo = () => {
    setRefuseCount(prev => {
      const newCount = prev + 1;

      setIsRefuseModalOpen(true);
      return newCount;
    });
  }

  const yesStyles = {
    backgroundColor: 'green',
  }

  const noStyles = {
    backgroundColor: '#e42a2a',
    fontSize: 12,
    padding: 12,
    height: 12,
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        padding: 24,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '48px 24px',
          borderRadius: 16,
          fontSize: 24,
          gap: 24,
          backgroundColor: '#ffffffd3'
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            gap: 12
          }}>
          <div>
            <h1 style={{ textAlign: 'center', margin: 0 }}>RALU</h1>
            <h1 style={{
              // display: 'flex',
              // justifyContent: 'center',
              textAlign: 'center',
              fontSize: 40,
              margin: 0
            }}>
              Will you be my Valentine? ❤️
              </h1>
          </div>
          <img src='images/question-cat.jpg'
            style={{
              height: '100%',
              width: '100%',
              maxWidth: 500,
              maxHeight: 400,
              borderRadius: 16,
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            gap: 120,
            alignItems: 'center'
          }}
        >
          {refuseCount < pairedImagesSounds.length - 1
            ? <Button
              text={"no"}
              style={noStyles}
              onClick={handleOnClickNo}
            />
            : <Button
              text={"YES, BUT BLUE"}
              style={{ ...yesStyles, backgroundColor: '#4053ff' }}
              onClick={() => setIsYesModalOpen(true)}
            />
          }
          <Button
            text={"YES"}
            style={yesStyles}
            onClick={() => setIsYesModalOpen(true)}
          />
        </div>
      </div>

      {refuseCount >= 0 && pairedImagesSounds[refuseCount]?.image && <ModalRefused
        open={isRefuseModalOpen}
        onClose={() => setIsRefuseModalOpen(false)}
        image={pairedImagesSounds[refuseCount]?.image}
        text={pairedImagesSounds[refuseCount]?.text}
        sound={pairedImagesSounds[refuseCount]?.sound}
      />}

      {isYesModalOpen && <ModalYes
        open={isYesModalOpen}
        image={'images/cat-love.jpg'}
        sound={'sounds/buzele-cu-rosu-inchis.mp3'}
      />}
    </div>
  )
}

export default App
