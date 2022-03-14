import { Form } from 'antd';
import React from 'react'
import { Button } from 'antd';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from "../store/actions/todoActions";

const { TextArea } = Input;

export default function ({setTodo}) {

    const dispatch = useDispatch()

    function handleAddTodo (value) {
        const todo = value.todo;
        dispatch(addTodo(todo));
    };

    return (
        <div>
            <Form onFinish={handleAddTodo}>
            <Form.Item name="todo">
                <TextArea rows={4} htmltype="textarea" />
            </Form.Item>
                <Button className='Todo-button' type="primary" htmlType="submit">Add Todo</Button>
            </Form>
        </div>
    )
}
