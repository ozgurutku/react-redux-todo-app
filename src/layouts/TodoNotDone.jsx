import React from 'react'
import { Button } from 'antd';
import { Divider } from 'antd';
import { completeTodo } from "../store/actions/todoDoneActions";
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../store/actions/todoActions';

export default function TodoNotDone() {
    
    const {todoItems} = useSelector(state =>  state.todo)
    
    const dispatch = useDispatch()

    function handleAddTodo(todo) {
        dispatch(completeTodo(todo));
        dispatch(removeTodo(todo));
    }

    return (
        <>
            <Divider plain>Active Todos</Divider>

            <ul>
                {todoItems.map((todo,i) => <li className='Todo-li' key={i}>{todo} <Button key={i} className='Complete-todo-button' type="primary" onClick={() => handleAddTodo(todo)}>Complete</Button></li>)}
            </ul>
        </>
    )
}
