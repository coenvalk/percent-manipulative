import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';

class InputCheckLifted extends React.Component {
    constructor(props) {
        super(props);

        this.updateInput = this.updateInput.bind(this);
        this.getValue = this.getValue.bind(this);
    }

    componentDidUpdate(oldProps) {
        if (oldProps.target !== this.props.target) {
            this.props.onUpdate("");
        }
    }

    updateInput(event) {
        event.preventDefault();
        let v = parseFloat(event.target.value);
        if (isNaN(v)) v = "";
        this.props.onUpdate(v);
    }

    render() {
        const correct = this.props.val === this.props.target;
        let icon;
        if (correct) {
            icon = faCheckCircle;
        } else {
            icon = faTimesCircle;
        }
        return (
            <label className={ correct ? "correct" : "incorrect" }>
                <FontAwesomeIcon icon={icon} />
                <input type="number" value={this.props.val} onChange={(e) => this.updateInput(e)} />
            </label>)
    }

    getValue() {
        return this.state.val;
    }
}

export default InputCheckLifted;