import React from 'react';
import { useWorkflow } from '../hooks/useWorkflow';
import { View } from '../../../primitives/View';

export default function FinalizeWorkflow(): JSX.Element {
    const context = useWorkflow();

    return (
        <View>
            <h1>Finalize Workflow</h1>
            <pre>{JSON.stringify(context, null, 2)}</pre>
            <button onClick={() => context.onStep('initializeWorkflow')}>Start over</button>
        </View>
    )
}
