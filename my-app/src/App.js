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
                <h2>{this.state.myState}</h2>
                <CustomisedButton>Click here</CustomisedButton>
            </div>);
    }
}
App.propTypes = {
    text: PropTypes.string.isRequired,
};

const Widget = (props) =>
    <input type="text" onChange={props.update}/>;

const CustomisedButton = (props) => {
    return <button>{props.children}</button>
};

export default App;

