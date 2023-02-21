import * as React from 'react';
import { WorkflowProvider as Provider } from './context';
import { Router, RouterProps } from './Router';
import { InitializeWorkflow } from './InitializeWorkflow';

export type WorkflowProps = Partial<
RouterProps & {
    initialState: any;
    children:
    | React.ReactNode
}
>

export function WorkflowInternal({
    className,
    initialState,
    variation,
}: WorkflowProps): JSX.Element {
    return (
        <Router
            className={className}
            variation={variation}
        />
    )
}

export function Workflow(props: WorkflowProps): JSX.Element {
    return (
        <Provider>
            <WorkflowInternal {...props} />
        </Provider>
    )
}

Workflow.Provider = Provider;
Workflow.InitializeWorkflow = InitializeWorkflow;
