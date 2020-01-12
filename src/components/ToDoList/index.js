import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  font-family: sans-serif;
  font-size: 1.1em;

  li {
    line-height: 2em;
  }
`;

export default function ToDoList({ theme }) {
  return (
    <List>
      {console.log(theme)}
      <li>Estudar CSS</li>
      <li>Estudar ReactJS</li>
      <li>Estudar React-Native</li>
      <li>Estudar Node.js</li>
    </List>
  );
}
