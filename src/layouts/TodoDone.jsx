import React from 'react'
import { Divider } from 'antd';
import { useSelector } from 'react-redux';

export default function TodoDone() {

    const {todoDoneItems} = useSelector(state => state.todoDone)

    return (
        <>
            <Divider plain>Completed Todos</Divider>
            <ul>
                
                {todoDoneItems.map((todo,i) => <li key={i}>{todo}</li>)}
            </ul>
        </>
    )
}
