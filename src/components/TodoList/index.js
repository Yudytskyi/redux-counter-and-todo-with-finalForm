import React from 'react';
import { connect } from 'react-redux';
import ListItem from '../ListItem/index';

const TodoList = ({ tasks }) => {
  return (
    <>
      <h2>todo list</h2>
      {tasks.map((task, index) => (
        <li>
          <ListItem task={task} taskIndex={index} />
        </li>
      ))}
    </>
  );
};

const mapStateToProps = ({ todo }) => todo;

export default connect(mapStateToProps)(TodoList);
