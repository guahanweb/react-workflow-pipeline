import React, { useState, useCallback, createContext, useContext } from 'react';

export const initialState = {
    name: 'Default Project',
    loading: false,
};
const WorkflowContext: any = createContext(null);

export function WorkflowProvider({ children }: { children?: JSX.Element }) {
    const [ state, setState ] = useState(initialState);

    const load = useCallback(function () {
        setState((prev) => ({ ...prev, loading: true }));
        setTimeout(function () {
            setState((prev) => ({
                ...prev,
                name: 'Loaded Project',
                loading: false,
            }))
        }, 2000);
    }, []);

    return (
        <WorkflowContext.Provider value={{
            state,
            update: setState,
            load,
        }}>
            {children}
        </WorkflowContext.Provider>
    )
}

type WorkflowContextShape = {
    state: {
        name: string;
        loading: boolean;
    },
    update: (props: any) => void;
    load: () => void;
};

export function useWorkflowContext(): WorkflowContextShape  {
    const context = useContext<WorkflowContextShape>(WorkflowContext);

    if (typeof context === 'undefined' || !context) {
        throw new Error('cannot call `useWorkflowContext()` outside of a provider');
    }

    return context;
}
