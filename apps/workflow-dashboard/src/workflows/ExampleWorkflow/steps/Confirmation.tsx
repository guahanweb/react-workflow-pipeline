import type { RenderedStepProps } from '../../../components/Workflow/types';
import React from 'react';
import { View } from '../../../primitives/View';
import { useWorkflowContext } from '../state';

export function Confirm({ nextStep, workflow }: RenderedStepProps) {
    const { state } = useWorkflowContext();

    return (
        <View>
            <h1>Are you Sure?</h1>
            <h2>Project: {state.name}</h2>
            <div className="workflow-controls">
                <button onClick={() => workflow.back()} className="btn btn-secondary">No</button>
                <button onClick={() => workflow.navigate(nextStep)} className="btn btn-primary">Yes</button>
            </div>
        </View>
    )
}

export function Confirmation({ workflow }: RenderedStepProps) {
    const { state } = useWorkflowContext();

    return (
        <View>
            <h1>Confirmation</h1>
            <h2>Project: {state.name}</h2>
            <div className="workflow-controls">
                <button onClick={() => workflow.reset()} className="btn btn-warning">Reset Workflow</button>
            </div>
        </View>
    )
}