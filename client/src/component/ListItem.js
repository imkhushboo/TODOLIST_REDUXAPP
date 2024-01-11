import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../state';
import { bindActionCreators } from 'redux';
const ListItem = (props) => {
    const dispatch = useDispatch();
    const { deleteItem, saveItem } = bindActionCreators(action, dispatch);

    const list1 = useSelector(state => state.addItem);
    const [textvalue, setTextvalue] = useState(props.text);
    const [stringvalue, setStringvalue] = useState(list1[props.id].text);
    useEffect(() => {
        console.log(list1);
        console.log(list1[props.id].text);
        setStringvalue(list1[props.id].text);
    }, [])
    return (
        <div className="card" style={{ "width": "15rem", "height": "15rem" }}>
            <div className="d-flex justify-content-between card-header">
                <h5 className="p-2 card-title">Task : {props.id}</h5>
                <buttton className="btn btn-danger" onClick={() => { deleteItem(props.id) }}>-</buttton>
                {/* <button className="btn btn-success" data-toggle="modal" data-target="#exampleModal" >edit</button> */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Task :{props.id}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <input value={textvalue} onChange={(e) => { console.log(e.target); setTextvalue(e.target.value) }}></input>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { saveItem(props.id, textvalue) }}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="card-body">
                <p className="card-text">{list1[props.id].text}</p>
            </div>
        </div>
    );
}

export default ListItem;
