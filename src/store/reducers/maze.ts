import { Reducer } from 'redux';
import { MazeActions } from '../actions/types';

export interface MazeState {
  mazes: Maze[];
  isLoading: boolean;
  error?: string;
}

const initialState: MazeState = {
  mazes: [],
  isLoading: false,
  error: undefined,
};

const reducer: Reducer<MazeState> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case MazeActions.FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case MazeActions.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        mazes: payload,
      };
    case MazeActions.FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export { reducer as mazeReducers };
