import React, { useCallback, useEffect, useState } from 'react';
import { WorkflowRoute } from '../hooks/useWorkflow/types';
import { WorkflowContext } from './WorkflowContext';

export default function WorkflowProvider({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    const defaultStep: WorkflowRoute = 'initializeWorkflow';
    const [ route, setRoute ] = useState<WorkflowRoute>(defaultStep);
    const [ isPending, ] = useState<boolean>(false);

    const onStep = useCallback(function (newRoute: WorkflowRoute) {
        setRoute(newRoute);
    }, []);

    useEffect(() => {
        // anything we need to do when steps change
    }, [route]);

    const value = {
        route,
        isPending,
        onStep,
    };

    return (
        <WorkflowContext.Provider value={value}>
            {children}
        </WorkflowContext.Provider>
    );
}
