import React, {Component} from 'react';
import TaskItems from './TaskItems';

class TaskList extends Component{
    render(){
        const {title, buttonText, tasks, buttonFunction} = this.props;
        const taskItems = tasks.map((task) => <TaskItems tasks={task} key={task} buttonFunction={buttonFunction} />)
        return(
            <div>                
                <div className="todoLists"><p class="font-weight-bold">{title}</p></div>
                <div className="taskItems"><p class="font-italic">{taskItems}</p></div>
            </div>
        )
    }
}

export default TaskList;