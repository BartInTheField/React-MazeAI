import React from 'react';
import { RouteComponentProps } from 'react-router';

interface PlayMazeProps {
  maze: Maze;
}
type Props = PlayMazeProps & RouteComponentProps;
const PlayMaze = (props: Props) => {
  return <div>{JSON.stringify(props.match.params)}</div>;
};

export default PlayMaze;
