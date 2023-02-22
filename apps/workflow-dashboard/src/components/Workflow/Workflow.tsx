import React, { useMemo } from 'react';
import type { WorkflowProps, RegisteredStepList } from './types';
import { View } from '../../primitives/View';
import { Step } from './Step';
import { Router } from './Router';
import { Loader } from './Loader';

function getRegisteredSteps(children: React.ReactNode) {
    const registeredSteps: RegisteredStepList = {};

    // we are going to be sure we only have Workflow.Step elements rendered
    // this lets us pass a referenece list to the router to do the actual rendering
    React.Children.forEach(children, (element: React.ReactNode) => {
        if (React.isValidElement(element) && element.type === Step && element.props.id) {
            registeredSteps[element.props.id] = element;
        }
    });

    return registeredSteps;
}

export default function Workflow({
    onReset,
    children,
    loading = false,
}: WorkflowProps) {
    const workflowSteps = useMemo(() => getRegisteredSteps(children), [children]);
    const initialStep = useMemo(() => (Object.keys(workflowSteps)[0] || ''), [workflowSteps]);

    return (
        <View className="workflow">
            <View className="workflow-content">
                <Router
                    route={initialStep}
                    steps={workflowSteps}
                    onReset={onReset}
                />
            </View>
            <Loader loading={loading} />
        </View>
    )
}

Workflow.Step = Step;
