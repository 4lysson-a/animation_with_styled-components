import React from "react";

import { Container } from "style";
import { fadeInAnimation } from "animations";
import { Box, AnimationDelay } from "components";

const App = () => {
  const loop = Array(20).fill(0);

  return (
    <Container>
      <AnimationDelay keyframe={fadeInAnimation}>
        {loop.map((_, index) => (
          <Box key={index} />
        ))}
      </AnimationDelay>
    </Container>
  );
};

export default App;
