import React, { useMemo } from 'react';

import { RouterProps } from './types';
import { useWorkflow } from '../hooks/useWorkflow';
import { InitializeWorkflow } from '../InitializeWorkflow';
import { FinalizeWorkflow } from '../FinalizeWorkflow';
import { RenderNothing } from '../../RenderNothing';

type RouteComponent = (props: Omit<RouterProps, 'children'>) => JSX.Element;

const getRouteComponent = (route: string): RouteComponent | typeof RenderNothing => {
    switch (route) {
        case 'idle':
        case 'transition':
            return RenderNothing;
        case 'initializeWorkflow':
            return InitializeWorkflow;
        case 'finalizeWorkflow':
            return FinalizeWorkflow;
        default:
            // eslint-disable-next-line no-console
            console.warn(
                `Unhandled Workflow route - please check route definitions: ${route}`
            );
            return RenderNothing;
    }
}

export function Router({
    className,
    variation,
}: RouterProps): JSX.Element {
    const { route } = useWorkflow();
    const RouterChildren = useMemo(() => getRouteComponent(route), [route]);

    return (
        <RouterChildren
            className={className}
            variation={variation}
        />
    )
}
