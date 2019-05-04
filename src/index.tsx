import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { existy, unexisty } from './utils/functional';

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import Maze from './containers/Maze';
import SelectMaze from './containers/SelectMaze';

const App = () => {
  const [maze, setMaze] = useState(undefined);
  return (
    <>
      {existy(maze) && <Maze />}
      {unexisty(maze) && (
        <SelectMaze selectMaze={(newMaze: any) => console.log(newMaze)} />
      )}
    </>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
