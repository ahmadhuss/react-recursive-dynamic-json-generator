import {createContext} from 'react';



/**
 * We will assign these empty functions in our App component state, after that we use <Provider> as a Higher Order
 * Component and pass App component `state` which has all these functions and we pass to it.
 * @type {React.Context<{doAddChildren: AppContext.doAddChildren, doChangeText: AppContext.doChangeText}>}
 */
export const AppContext = createContext({doChangeText:(id,text) => {},doAddChildren:(id,quantity) => {}});

// For Higher Order components with children
export const AppProvider = AppContext.Provider;
// I don't need AppContext.Consumer component because I could use `static contextType` or useContext hook
// export const AppConsumer = AppContext.Consumer;


/**
 * We can use AppContext on functional component easily with compare to class component
 * Because of underneath render method code we are providing this app context data globally to all
 * children component where they can access this data.
 * where we add <AppContext.Consumer>. component & inside that pass function  You just simply use
 * import {AppContext} from './providers/DataProvider';
 * Functional component : const data = useContext(AppContext)
 */