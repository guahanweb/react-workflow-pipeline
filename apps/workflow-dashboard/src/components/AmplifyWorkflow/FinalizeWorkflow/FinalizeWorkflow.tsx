import React, { useCallback } from 'react';
import { useWorkflow } from '../hooks/useWorkflow';
import { View } from '../../../primitives/View';

export default function FinalizeWorkflow(): JSX.Element {
    const context = useWorkflow();

    const previousStep = useCallback(() => {
        context.onStep('initializeWorkflow');
    }, [context]);

    return (
        <View>
            <h1>Finalize Workflow</h1>
            <pre>{JSON.stringify(context, null, 2)}</pre>
            <button onClick={() => previousStep()}>Start over</button>
        </View>
    )
}
