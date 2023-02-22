import React, { useCallback, useEffect, useRef } from 'react';
import { View } from '../../primitives/View';
import { Workflow } from '../../components/Workflow';

import { WorkflowProvider, useWorkflowContext, initialState } from './state';
import { Initialize } from './steps/Initialize';
import { Confirm, Confirmation } from './steps/Confirmation';

function WorkflowSequence() {
    const initialized = useRef(false);
    const { state, load, update } = useWorkflowContext();

    // load up the metadata for our entire workflow
    useEffect(function () {
        if (!initialized.current) {
            initialized.current = true;
            load();
        }
    }, []);

    const handleReset = useCallback(function () {
        update(initialState);
        load();
    }, [initialState]);

    return (
        <Workflow onReset={handleReset} loading={state.loading} className="workflow--example">
            <Workflow.Step id='intialize' Component={Initialize} nextStep='confirm'  />
            <Workflow.Step id='confirm' Component={Confirm} nextStep='confirmation'  />
            <Workflow.Step id='confirmation' Component={Confirmation} isFinal={true}  />
        </Workflow>
    )
}

export function ExampleWorkflow() {
    return (
        <View className="container">
            <WorkflowProvider>
                <WorkflowSequence />
            </WorkflowProvider>
        </View>
    )
}