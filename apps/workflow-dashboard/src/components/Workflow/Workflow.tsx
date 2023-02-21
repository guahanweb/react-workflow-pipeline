import React, { useState } from 'react';
import type { WorkflowProps } from './types';
import { View } from '../../primitives/View';
import { Step } from './Step';
import { Router } from './Router';

export default function Workflow({
    children,
    defaultRoute,
    route,
}: WorkflowProps) {
    const [ currentRoute, setRoute ] = useState<string>(route || defaultRoute);

    return (
        <View>
            <Router route={currentRoute} navigate={setRoute}>
                {children}
            </Router>
        </View>
    )
}

Workflow.Step = Step;
