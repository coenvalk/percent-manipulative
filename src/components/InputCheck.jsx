import React from 'react';
import InputCheckLifted from './InputCheckLifted';

class InputCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: NaN
        }

        this.updateInput = this.updateInput.bind(this);
        this.getValue = this.getValue.bind(this);
    }

    componentDidUpdate(oldProps) {
        if (oldProps.target !== this.props.target) {
            this.setState({
                val: NaN
            })
        }
    }

    updateInput(val) {
        this.setState({
            val: val
        });
    }

    render() {
        return (<InputCheckLifted onUpdate={this.updateInput} val={this.state.val} target={this.props.target} />)
    }

    getValue() {
        return this.state.val;
    }
}

export default InputCheck;