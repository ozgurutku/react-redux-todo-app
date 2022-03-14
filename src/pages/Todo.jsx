import React from 'react'
import { Input } from 'antd';
import { Row, Col } from 'antd';
import TodoAdd from '../layouts/TodoAdd';
import TodoHeader from '../layouts/TodoHeader';
import TodoDone from '../layouts/TodoDone';
import TodoNotDone from '../layouts/TodoNotDone';

const { TextArea } = Input;

export default function Todo() {

    return (
        <div >

            <Row className='Todo-container'>
                <Col span={8}></Col>
                <Col span={8}>
                    <TodoHeader />  
                    <TodoAdd/>
                    <Row className='Todo-container'>
                        <Col span={12}>
                            <TodoNotDone/>
                        </Col>
                        <Col span={12}>
                            <TodoDone/>
                        </Col>
                    </Row>
                </Col>
                <Col span={8}></Col>
            </Row>

        </div>
    )
}
