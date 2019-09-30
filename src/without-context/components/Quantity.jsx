import React, {Component} from 'react';

export class Quantity extends Component {
    /**
     * @type {{quantity: number}}
     */
    state = {
        quantity:0
    };


    /**
     * Handle onchange behavior of the input
     * @param target
     */
    handleChangeQuantity = ({target}) => {
        const val = parseInt(target.value);
        this.setState(prevState => {
            return {quantity: val};
        });
    };

    /**
     * Generate Quantity
     */
    handleGenerateQuantity = () => {
        this.props.onGenerateQuantity(this.state.quantity);
    };



    render() {
        return (
            <>
                <label>Children Quantity</label>
                <input type="number" min={0} onChange={this.handleChangeQuantity} value={this.state.quantity} />
                <button onClick={this.handleGenerateQuantity}>Generate</button>
            </>
        );

    }
}