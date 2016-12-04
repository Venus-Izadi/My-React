import React, {Component, PropTypes} from 'react';
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state = {myState: "initial state"};
    };

    update(e){
      this.setState({myState: e.target.value});
    };

    render() {
        return (
            <div>
                <Widget update={this.update.bind(this)}/>
                <h2>{this.props.text}</h2>
                <CustomisedButton>Click here</CustomisedButton>
            </div>);
    }
}
const Widget = (props) =>
    <input type="text" onChange={props.update}/>;

const CustomisedButton = (props) => {
    return <button>{props.children}</button>
};

App.propTypes = {
    text(props, propName, component) {
        if(!(propName in props)) {
            return new Error(`missing ${propName}`);
        }
        if(props[propName] && props[propName].length < 4) {
            return new Error(`${propName} is too short`);
        }
    },
};

export default App;

