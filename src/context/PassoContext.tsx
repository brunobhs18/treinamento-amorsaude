'use client'
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

const initialState = { count: 0 };

type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'set'; payload: number };

function reducer(state: typeof initialState, action: Action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'set':
            return { count: action.payload };
        default:
            return state;
    }
}


interface PassoContextType {
    num: number;
    increment: () => void;
    decrement: () => void;
    handleclick: (e: React.MouseEvent<HTMLAnchorElement>, num: number) => void;
}

const PassoContext = createContext<PassoContextType | undefined>(undefined);


export function PassoProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const increment = () => dispatch({ type: 'increment' });
    const decrement = () => dispatch({ type: 'decrement' });
    const handleclick = (e: React.MouseEvent<HTMLAnchorElement>, num: number) => {
        e.preventDefault();
        dispatch({ type: 'set', payload: num });
    };

    return (
        <PassoContext.Provider value={{ num: state.count, increment, decrement, handleclick }}>
            {children}
        </PassoContext.Provider>
    );
}

export function usePasso() {
    const context = useContext(PassoContext);
    if (context === undefined) {
        throw new Error('usePasso must be used within a PassoProvider');
    }
    return context;
}
