import React from 'react';

class NoHook extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      textTodo:'',
      todos:[]
    }
  }

  onChange(e){
    //this.setState({textTodo = !this.state.textTodo})
    let state = this.state;
    state.textTodo = e.target.value;
    this.setState(state);
  }

  buttonClick(){
    let state = this.state;
    state.todos.push(state.textTodo);
    state.textTodo = '';
    this.setState(state);
  }

  componentDidMount(){
    console.log('class component mounted');
  }

  componentDidUpdate(){
    console.log('class component updating: '+new Date());
  }

  componentWillUnmount(){
    console.log('CLASS component being unmounted')
  }

    render() {
      const {todos, textTodo} = this.state;
      const {text} = this.props;
      return (
        <div>
            <div>
            <input className="inputText" placeholder="todo" type="text" value={textTodo} onChange={(e) => this.onChange(e)}/>
            </div>
            <br></br>
            <div>
              <button className="button" onClick={() => this.buttonClick() }>{text}</button>
            </div>

            <div>
              {
                todos.map( todo => <p key={todo}>{todo}</p> )
              }
            </div>
        </div>
      )
    }
}

export default NoHook;