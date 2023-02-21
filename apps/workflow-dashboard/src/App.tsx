import React from 'react';
import { Workflow } from './components/Workflow';
import type { StepComponentProps } from './components/Workflow/types';

function StepOne({ navigate }: StepComponentProps) {
    return (
        <>
            <h1>Step One</h1>
            <p><button onClick={() => navigate('four')}>skip all</button></p>
            <p><button onClick={() => navigate('two')}>next</button></p>
        </>
    )
}

function StepTwo({ navigate }: StepComponentProps) {
    return (
        <>
            <h1>Step Two</h1>
            <p><button onClick={() => navigate('one')}>previous</button></p>
            <p><button onClick={() => navigate('three')}>next</button></p>
        </>
    )
}

function StepThree({ navigate }: StepComponentProps) {
    return (
        <>
            <h1>Step Three</h1>
            <p><button onClick={() => navigate('two')}>previous</button></p>
            <p><button onClick={() => navigate('four')}>next</button></p>
        </>
    )
}

function StepFour({ navigate }: StepComponentProps) {
    return (
        <>
            <h1>Step Four (Final)</h1>
            <p><button onClick={() => navigate('one')}>restart</button></p>
        </>
    )
}

function App() {
    return (
        <div className="App">
            <Workflow defaultRoute='one'>
                <Workflow.Step id='one' Component={StepOne} />
                <Workflow.Step id='two' Component={StepTwo} />
                <Workflow.Step id='three' Component={StepThree} />
                <Workflow.Step id='four' Component={StepFour} />
            </Workflow>
        </div>
    );
}

export default App;
