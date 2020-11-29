import React, { Component } from 'react';
import logo from './CSU.png';
import './App.css';
import TaskList from './TaskList';

class App extends Component {
    constructor(){
        super()
        this.state = {
            todoList: ['Finishing my react app'],
            task: '',
            doneList: ['Other finished projects']
        }
    }
    render(){
        return (
            <div className="App">
                <div className="jumbotron jumbotron-fluid">
                <div className="container">
                <h1 className="display-4">Welcome to the School Todo List!</h1>
                <p className="lead">Type in an item to add it to the pending list. Clicking on an item on the pending list will send it to the completed list. Clicking on a completed item will remove it.</p>
                </div>
                </div>
                <div className="formFormat">
                <form onSubmit={(e) => this.addTodo(e)}>
                    <input
                        type='text'
                        className='input'
                        placeholder='Enter Todo Item'
                        value={this.state.task}
                        onChange={(e) => this.setState({task: e.target.value})}
                    />
                    <br/>
                    <br/>
                    <button type="submit" class="btn btn-primary btn-lg">Add To Pending List</button>
                    <br/>
                    <br/>
                    {/*<button type='submit'>Add Todo</button>*/}
                </form>
                <div className="formDisplay">
                <div className="form1"><TaskList title={'Pending Todo'} buttonText={'Done'} tasks={this.state.todoList} buttonFunction={this.removeTodo} /></div>
                <div className="form2"><TaskList title={'Completed'} buttonText={'Delete'} tasks={this.state.doneList} buttonFunction={this.deleteTodo} /></div>
                </div>
                </div>
            </div>
        );
    }
    addTodo(e){
        e.preventDefault();
        this.setState({task: '', todoList: [ ... this.state.todoList, this.state.task] });
    }
    removeTodo = key =>{
        let todoList = this.state.todoList;
        let index = todoList.indexOf(key);
        if(index > -1){
            this.setState({doneList: [...this.state.doneList, key]});
            todoList.splice(index, 1);
        }
        this.setState({todoList: todoList});
        //if(this.state.todoList != null){
        //this.setState({ todoList: null })
        //}
    }
        deleteTodo = key =>{
        let doneList = this.state.doneList;
        let index = doneList.indexOf(key);
        if(index > -1){
            doneList.splice(index, 1);
        }
        this.setState({doneList: doneList});
        //if(this.state.todoList != null){
        //this.setState({ todoList: null })
        //}
    }
}

export default App;
