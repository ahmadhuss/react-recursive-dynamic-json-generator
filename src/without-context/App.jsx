import React, {Component} from 'react';
import {Field} from './components/Field';
import {changeText, changeChild, addChildren} from './utility';

const ROOT = [
    {
        id: '1',
        parentId: null,
        child: null,
        text: ''
    }
];


class App extends Component {

    state = {
        item: ROOT
    };

    /**
     * @param {string} id - Id of the Item
     * @param {string} text - Text you want to set on item
     */
    handleChangeText = (id, text) => {
        const {item} = this.state;
        // Returns new-array
        const new_arr = changeText(id, text, item);
        // Set state
        this.setState(prevState => {
            return {item: new_arr};
        });

        console.log('Change Text final : ', new_arr);
    };


    /**
     * @param {string} Id - Id of the item
     * @param {number} quantity - Quantity of children you want to generate
     */
    handleAddChildren = (Id, quantity) => {
        const {item} = this.state;
        // Returns new-array and Update child property to array
        const new_arr0 = changeChild(Id, [], item);

        console.log('Change Child final : ', new_arr0);

        // Returns new-array
        const new_arr = addChildren(Id, quantity, new_arr0);
        // Set state
        this.setState(prevState => {
            return {item: new_arr};
        });

        console.log('Add Child final : ', new_arr);

    };


    render() {
        const {item} = this.state;
        return (
            <>
                <ul>
                    {/* `item` prop is very important because it help us to change the text of the item. and add children to item. */}
                    {item.map(element => <Field key={element.id} item={element}
                                                handleChangeText={this.handleChangeText}
                                                handleAddChildren={this.handleAddChildren}/>)}
                </ul>
                <div>
                    <h1>JSON</h1>
                    <p style={{
                        width: '780px',
                        fontWeight: '600',
                        lineHeight: '1.8',
                        letterSpacing: '.2rem',
                        margin: '0 auto'
                    }}>{JSON.stringify(this.state.item)}</p>
                </div>
            </>
        );

    };

}

export default App;


