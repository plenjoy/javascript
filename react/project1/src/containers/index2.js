import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, getTodoList } from '../redux-actions/todoActions';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../contants/visibilityFilters';

import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

import './index.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;

    // 测试数据.
    dispatch(getTodoList());
  }

  render() {
    // Injected by connect() call:
   /* const { dispatch, visibleTodos, visibilityFilter } = this.props;*/

    return (
      <div className="app">
        <AddTodo
          onAddClick={text =>
            dispatch(addTodo(text))
          }
        />
        <TodoList
          todos={visibleTodos}
          onTodoClick={index =>
            dispatch(completeTodo(index))
          }
        />
        /*<Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))
          }
        />*/
      </div>
    );
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};

function selectTodos(todos, filter) {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      return [];
  }
}

function select(state) {
  return {
    visibleTodos: SHOW_ALL,
    visibilityFilter: SHOW_ALL
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App);
