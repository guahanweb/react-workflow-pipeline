import React from 'react';
import { WorkflowRoute }  from '../hooks/useWorkflow/types';

// @TODO: expand the context with all necessary information
type WorkflowContextType = {
    route: WorkflowRoute;
    isPending: boolean;
    onStep: (newRoute: WorkflowRoute) => void;
};

export const WorkflowContext = React.createContext<WorkflowContextType | null>(null);
