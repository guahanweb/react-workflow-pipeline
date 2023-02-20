import React from 'react';
import { WorkflowContext } from '../../context';
// import { WorkflowRoute, WorkflowServiceFacade } from './types';

export default function useWorkflow() {
    const context = React.useContext(WorkflowContext);

    if (!context) {
        throw new Error('`useWorkflow()` must be used within a WorkflowProvider');
    }

    // this is where we can configure routes and mappings by step
    // we can inject any global state here (user info, etc)
    // const { route } = context;
    // const comparator = selector ? getComparator(selector) : defaultComparator;

    return {
        ...context,
    }
}
