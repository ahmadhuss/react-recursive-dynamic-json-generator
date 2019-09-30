import React from 'react';
import {Quantity} from './Quantity';

// Dumb component, completely controlled by parent
export const Field = (props) => {

    const {item, handleChangeText, handleAddChildren} = props;
    /**
     * @param event
     */
    const OnChangeText = (event) => {
        const {target} = event;
        const {value} = target;
        handleChangeText(item.id, value);
    };


    /**
     * @param {number} quantity
     */
    const onGenerateQuantity = (quantity) => {
        // Add children on given item.id but it parent-id and quantity
        handleAddChildren(item.id, quantity);
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
            <ul>{item.child.map(element => <Field key={element.id} item={element} handleChangeText={handleChangeText}
                                                  handleAddChildren={handleAddChildren}/>)}</ul>
            }
        </li>
    );
};