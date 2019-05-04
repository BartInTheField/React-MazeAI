import { action } from 'typesafe-actions';
import { MazeActions } from './types';

export const fetchMazes = () => action(MazeActions.FETCH);
export const fetchMazesSuccess = (data: Maze[]) =>
  action(MazeActions.FETCH_SUCCESS, data);
export const fetchMazesError = (error: string) =>
  action(MazeActions.FETCH_ERROR, error);
