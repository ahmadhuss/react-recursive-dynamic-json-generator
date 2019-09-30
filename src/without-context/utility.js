// This utility class is using RYS (Repeat yourself) 😆 approach not DRY (Don't Repeat yourself) 😯 approach.
/**
 * Figure out which nested child text is updated
 * @param {string} iD
 * @param {string} text
 * @param {Array<Object>} data
 * @returns {Array<Object>}
 */
export const changeText = (iD, text, data) => {
    let newArr;
    newArr = data.map(item => {
        if (item.id === iD) {
            // Construct new array of object with updated value
            return {...item, text};
        } else {
            if (Array.isArray(item.child) && item.child.length > 0) {
                // Assign that result to item.children,
                // then let it return the full item with the updated children:
                item.child = changeText(iD, text, item.child);
                return item;
            }
            // Wrong id nothing is matched
            return item;
        }
    });
    return newArr;
};


/**
 * Update child property to array
 * @param {string} iD - Id of the item
 * @param {array} child - update `child` property of the given item id
 * @param {Array<Object>} data - Array of object
 * @returns {Array<Object>}
 */
export const changeChild = (iD, child, data) => {
    let newArr;
    newArr = data.map(item => {
        if (item.id === iD) {
            // Construct new array of object with updated value
            return {...item, child};
        } else {
            if (Array.isArray(item.child) && item.child.length > 0) {
                // Assign that result to item.children,
                // then let it return the full item with the updated children:
                item.child = changeChild(iD, child, item.child);
                return item;
            }
            // Wrong id nothing is matched
            return item;
        }
    });
    return newArr;
};


/**
 * Add new children to list item
 * @param {string} Id
 * @param {number} quantity
 * @param {Array<Object>} data
 * @returns {Array<Object>}
 */
export const addChildren = (Id, quantity, data) => {
    let newData;
    newData = data.map(item => {
        if (item.id === Id) {
            const arr_items = [...Array(quantity)].map((_, i) => {
                return {id: `${Id}.${i + 1}`, parentId: Id, child: null, text: ''};
            });
            return {...item, child: arr_items};
        } else {
            // Remember item.child should be an array
            if (Array.isArray(item.child)) {
                // Assign that result to item.children,
                // then let it return the full item with the updated children:
                item.child = addChildren(Id, quantity, item.child);
                return item;
            }
            // Wrong id nothing is matched
            return item;
        }
    });
    return newData;
};