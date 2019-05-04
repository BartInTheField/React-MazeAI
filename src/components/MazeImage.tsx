import React from 'react';
import styled from 'styled-components';
import { CardImg } from 'shards-react';

const MazeImage = styled(CardImg)`
  image-rendering: pixelated; // Only works on Chrome
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

export default MazeImage;
