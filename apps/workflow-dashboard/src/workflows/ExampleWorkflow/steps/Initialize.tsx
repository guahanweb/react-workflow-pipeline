import type { RenderedStepProps } from '../../../components/Workflow/types';
import React, { useCallback, useState } from 'react';
import { View } from '../../../primitives/View';
import { useWorkflowContext } from '../state';

export function Initialize({ nextStep, workflow }: RenderedStepProps) {
    const { state, update } = useWorkflowContext();
    const [ localName, setLocalName ] = useState(state.name);

    const goToNext = useCallback(function () {
        update((prev: any) => {
            return prev.name !== localName
                ? { ...prev, name: localName }
                : prev;
        });

        workflow.navigate(nextStep);
    }, [localName, workflow]);

    return (
        <View>
            <h1>Step One</h1>
            <h2>Project: {state.name}</h2>

            <div className="mb-3">
                <label htmlFor="name-field" className="form-label">Project name</label>
                <input type="text" value={localName} onChange={(e) => setLocalName(e.target.value)} className="form-control" />
            </div>
            <div className="workflow-controls">
                <button onClick={() => goToNext()} className="btn btn-primary">Looks good!</button>
            </div>
        </View>
    )
}