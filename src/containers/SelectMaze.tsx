import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card, CardBody } from 'shards-react';
import MazeImage from '../components/MazeImage';
import { ApplicationState } from '../store';
import { Dispatch } from 'redux';
import { fetchMazes } from '../store/actions/maze';
import { connect } from 'react-redux';
import { arrayIsNotEmpty, existy } from '../utils/functional';
import { RouteComponentProps } from 'react-router-dom';

const SelectMazeCol = styled(Col)`
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const mapStateToProps = (state: ApplicationState) => ({
  maze: state.maze,
});
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchMazes: () => dispatch(fetchMazes()),
  };
};

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  RouteComponentProps;

const SelectMaze = ({ maze, fetchMazes, history }: Props) => {
  const { mazes, isLoading, error } = maze;

  useEffect(() => {
    fetchMazes();
  }, [fetchMazes]);

  const clickMaze = (maze: Maze) => {
    history.push(`/play/${maze.id}`);
  };

  return (
    <Container className="pt-5">
      {isLoading && <div>Loading ...</div>}
      {existy(error) && <div>Something went wrong!</div>}
      {arrayIsNotEmpty(mazes) && (
        <Row>
          {mazes.map((maze: Maze, index: number) => (
            <SelectMazeCol key={index} lg="3" onClick={() => clickMaze(maze)}>
              <Card>
                <MazeImage
                  height="auto"
                  width="100%"
                  src={`../mazes/${maze.path}`}
                />
                <CardBody>{maze.name}</CardBody>
              </Card>
            </SelectMazeCol>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectMaze);
