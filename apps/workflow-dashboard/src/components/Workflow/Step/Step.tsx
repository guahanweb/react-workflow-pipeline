import React from 'react';
// import type { StepProps } from '../types';
import { View } from '../../../primitives/View';

export default function Step(props: any) {
    console.log(props);
    return (
        <View className={`workflow-step step-${props.id}`}>
            <props.Component
                className={props.className}
                navigate={props.navigate}
            />
        </View>
    )
}
