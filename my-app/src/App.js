import React, {Component, PropTypes} from 'react';
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state = { a: 'initialised'};
    };

    update(){
      this.setState({ a: this.widget.refs.input.value});
    };

    render() {
        return (
            <div>
                <Widget ref={ component => this.widget = component} update={this.update.bind(this)}/>
                <h2>{this.state.a}</h2>
            </div>);
    }
}
export default App;

export class Widget extends Component {
    render(){

    return( <input type="text" ref="input" onChange={this.props.update}/>);
};}
