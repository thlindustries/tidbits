import React, { useCallback, useState } from 'react';
import Vimeo from '@u-wave/react-vimeo';

import { Container } from './styles';

const LandingPage: React.FC = () => {
  const [finished, setFinished] = useState(false);
  const [timer, setTimer] = useState(null);

  const showCurrentTime = useCallback((info: any) => {
    console.log('Video pausado');
    console.log(info);
  }, []);

  const handleEndVideo = useCallback((info: any) => {
    console.log('Video terminado');
    console.log(info);
  }, []);

  const handleProgressVideo = useCallback((info: any) => {
    console.log('Video rodando');

    console.log(info);
  }, []);

  return (
    <Container>
      <p>Testing page</p>
      <Vimeo
        video="213710634"
        width="600"
        height="600"
        onPause={(info) => showCurrentTime(info)}
        onEnd={(info) => handleEndVideo(info)}
        onTimeUpdate={(info) => handleProgressVideo(info)}
        start={120}
      />
    </Container>
  );
};

export default LandingPage;
