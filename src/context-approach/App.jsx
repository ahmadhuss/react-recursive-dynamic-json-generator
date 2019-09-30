import React, {Component} from 'react';
import {AppProvider} from './context';
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

    /**
     * We are using constructor for our state initialization, because if we initialize our state without
     * constructor and assign class methods on context Object like
     * `handleChangeText`, `handleAddChildren` then error is occur
     * `handleChangeText`, `handleAddChildren` is declared after `state` and is possibly not assigned yet.
     * That's why I'm using constructor to initialize our state.
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            item: ROOT,
            appContext: {
                doChangeText: this.handleChangeText,
                doAddChildren: this.handleAddChildren
            }
        }
    }


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
        const {item, appContext} = this.state;
        return (
            /**
             * Because we set appContext object globally, Now methods like `handleChangeText` & `handleAddChildren`
             * are available globally we don't need to pass this as props on `Field component` like
             * `handleChangeText={this.handleChangeText}` `handleAddChildren={this.handleAddChildren}`
             */
            <AppProvider value={appContext}>
                <ul>
                    {/* `item` prop is very important because it's id help us to change the text of the item. and add children to item. */}
                    {item.map(element => <Field key={element.id} item={element} />)}
                </ul>
            </AppProvider>
        );

    };

}

export default App;


