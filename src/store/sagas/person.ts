import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { MazeActions } from '../actions/types';
import { fetchMazesSuccess, fetchMazesError } from '../actions/maze';
import { getMazeFiles } from '../../config/mazes';

function* handleFetch() {
  try {
    const res: Maze[] = getMazeFiles();

    yield put(fetchMazesSuccess(res));
  } catch (err) {
    yield put(fetchMazesError('Failed to load images'));
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeEvery(MazeActions.FETCH, handleFetch);
}

// Export our root saga.
// We can also use `fork()` here to split our saga into multiple watchers.
export function* personSaga() {
  yield all([fork(watchFetchRequest)]);
}
