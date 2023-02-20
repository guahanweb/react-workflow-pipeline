import React from 'react';
import { useWorkflow } from '../hooks/useWorkflow';
import { View } from '../../../primitives/View';

export default function InitializeWorkflow(): JSX.Element {
    const context = useWorkflow();

    return (
        <View>
            <h1>Initialize Workflow</h1>
            <pre>{JSON.stringify(context, null, 2)}</pre>
            <button onClick={() => context.onStep('finalizeWorkflow')}>Finaize</button>
        </View>
    )
}
