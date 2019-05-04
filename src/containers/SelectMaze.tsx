import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card, CardBody, CardImg } from 'shards-react';
import { getMazeFiles } from '../mazes/mazes';

const MazeImg = styled(CardImg)`
  image-rendering: pixelated; // Only works on Chrome
  height: auto;
  width: 100%;
`;

interface Props {
  selectMaze: any;
}
const SelectMaze = ({ selectMaze }: Props) => {
  const mazes = getMazeFiles();

  const clickMaze = (maze: any) => {
    selectMaze(maze);
  };

  return (
    <Container className="pt-5">
      <Row>
        {mazes.map((maze, index) => (
          <Col lg="3" onClick={() => clickMaze(maze)} key={index}>
            <Card>
              <MazeImg src={`../mazes/${maze.path}`} />
              <CardBody>
                {maze.name} with name {maze.path}
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SelectMaze;
