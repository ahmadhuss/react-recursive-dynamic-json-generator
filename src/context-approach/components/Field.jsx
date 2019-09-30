import React, {useContext} from 'react';
// Import AppContext  we already globally declare methods
import {AppContext} from '../context';
import {Quantity} from './Quantity';

/**
 * Dumb component
 * In the Field component you can retrieve the context with static contextType = AppContext;, you can now
 * retrieve the function `doChangeText` & `doAddChildren` also by using useContext Hook.
 */
export const Field = (props) => {

    const {doChangeText, doAddChildren} = useContext(AppContext);

    const {item} = props;
    /**
     * @param event
     */
    const OnChangeText = (event) => {
        const {target} = event;
        const {value} = target;
        doChangeText(item.id, value);
    };


    /**
     * @param {number} quantity
     */
    const onGenerateQuantity = (quantity) => {
        // Add children on given item.id but it parent-id and quantity
        doAddChildren(item.id, quantity);
    };


    return (

        <li>
            <div className="wrap">
                <div>
                    <label>Enter Text:</label>
                    <input type="text" name="text" onChange={OnChangeText} value={item.text}/>
                </div>
                <div>
                    <Quantity onGenerateQuantity={onGenerateQuantity}/>
                </div>
            </div>
            {/*  --- pass props functions on `handleChangeText` `handleAddChildren` prop
            this is very very very very important STEP ---  */}

            {Array.isArray(item.child) && item.child.length > 0 &&
            <ul>{item.child.map(element => <Field key={element.id} item={element}/>)}</ul>
            }
        </li>
    );
};