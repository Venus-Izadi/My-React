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
                <input placeholder={this.state.myState} onChange={this.update.bind(this)}/>
                <h2>{this.state.myState}</h2>
            </div>);
    }
}
;

App.propTypes = {
    text: PropTypes.string.isRequired,
};

export default App;

