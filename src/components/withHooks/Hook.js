import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import addTodo from '../../redux/actions';

function Hook({text}){
    
    //hook
    const [todos, setTodos] = useState([]);
    const [textTodo, setTextTodo] = useState('');

    //redux
    const state = useSelector(state => {console.log(state); return state.todos});
    const todosList = state.todos;
    const dispatch = useDispatch();

    function cleanup(){
        console.log('HOOK component being unmouted');
    }

    //componentDidMount
    useEffect(() =>{
        console.log('hook component mounted');
        //componentWillUnmount
        return () => cleanup();
    }, []);
    
    //can cause maximum update depth exceeded error
    useEffect(() =>{
        console.log('hook component updating: '+ new Date());
    });
    
    useEffect(() =>{
        console.log('Todos foi modificado');
    }, [todosList]);

    function adicionarTodo(){
        setTextTodo('');
        dispatch(addTodo(textTodo))
    }

    return(
        <div>
            <div>
                <input type="text" value={textTodo} onChange={(e) => setTextTodo(e.target.value)}/>
            </div>
            <br></br>
            <div>
                <button onClick={() => adicionarTodo()}>{text}</button>
            </div>
            <div>
              {todosList.map( todo =>{
                return (
                  <p key={todo}>{todo}</p>
                )
              })}
            </div>
        </div>
    );
}

export default Hook;