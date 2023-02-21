import React, { useCallback } from 'react';
import { useWorkflow } from '../hooks/useWorkflow';
import { View } from '../../../primitives/View';

export default function InitializeWorkflow(): JSX.Element {
    const context = useWorkflow();

    const nextStep = useCallback(() => {
        context.onStep('finalizeWorkflow');
    }, [context]);

    return (
        <View>
            <h1>Initialize Workflow</h1>
            <pre>{JSON.stringify(context, null, 2)}</pre>
            <button onClick={() => nextStep()}>Finaize</button>
        </View>
    )
}
