import React, { useEffect, useState } from 'react';

import ListItem from './ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../state';
import { bindActionCreators } from 'redux';

const TodoList = () => {
    const dispatch = useDispatch();
    const { addItem } = bindActionCreators(action, dispatch);

    const list = useSelector(state => state.addItem);
    const [value, setValue] = useState({ id: 0, text: "" });
    useEffect(() => {
        console.log(list);
        setValue({
            id: list.length,
            text: ""
        })
    }, [list])
    return (
        <>
            <div className="container mx-5 my-6 " style={{ "textAlign": "center" }}>
                <h1 ><i className="fa-solid fa-list check mx-2"></i>To do list</h1>
                <input type="text" id="text" name="text" value={value.text} onChange={(e) => { setValue({ ...value, [e.target.name]: e.target.value }) }} />
                <button className="btn btn-primary mx-2" disabled={value.text === ""} onClick={() => { addItem(value); }}>+</button>

            </div>
            <div className="row mx-2 my-4">

                {list.map((list) => {
                    return <div className="col-md-3 my-3" key={list.id}>
                        <ListItem id={list.id} text={list.text} />
                    </div>
                })}
            </div>
        </>
    )
}

export default TodoList
