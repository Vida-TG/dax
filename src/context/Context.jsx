import { createContext, useReducer } from "react";


export const CartContext = createContext()
export const Context = (props) => {
    const courseReducer = (state, action) => {
        switch(action.type) {
            case 'ADD':
                const tempState = state.filter((course)=>action.payload.id==course.id)
                if (tempState.length > 0) return state;
                return [...state, action.payload];
            case 'REMOVE':
                const tempState1 = state.filter((course) => {
                    return course.id != action.payload.id
                })
                return tempState1;
            case 'CLEAR':
                console.log("clearrr")
                return [];
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(courseReducer, [])
    return(
        <CartContext.Provider value={{state, dispatch}}>
            {props.children}
        </CartContext.Provider>
    )
}