import React from 'react';
import { View } from '../../../primitives/View';
import { RouteContainerProps } from './types';

export function RouteContainer({
    children,
    className,
    variation = 'default',
}: RouteContainerProps): JSX.Element {
    return (
        <View
            className={className}
            data-variation={variation}
        >
            {children}
        </View>
    )
}