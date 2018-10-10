import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'To do Application',
            data: [{
                id: 1,
                    text: 'clean room'
                }, {
                id: 2,
                    text: 'wash the dishes'
                }, {
                id: 3,
                    text: 'feed my cat'
                }]
        };
        this.removeTodo = this.removeTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo]; // laczy stan aplikacji
        this.setState({data}); // nowe dane
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title="ToDo list" number={this.state.data.length}/> 
                <TodoList tasks={this.state.data} remove={this.removeTodo}/>         
            </div>
        );
    }
}

export default App;