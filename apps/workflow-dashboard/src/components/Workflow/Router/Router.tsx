import React, { useMemo } from 'react';
import type { RouterProps } from '../types';
import { RenderNothing } from '../../RenderNothing';

type RouteComponent = (props: any) => JSX.Element;

const getRouteComponent = (children: React.ReactNode, route: string): RouteComponent => {
    let result: any = null;

    React.Children.forEach(children, (element: any) => {
        if (!React.isValidElement(element)) return;

        if ((element.props as any)?.id === route) {
            // we create an element applying both the static props
            // as well as the additive props from the Router
            result = (props: any) => {
                const myProps = {
                    ...(element.props as any),
                    ...props,
                };

                return React.cloneElement(element, myProps);
            };
        }
    });

    if (result === null) {
        console.warn(`unknown route - check your step definitions: ${route}`);
        result = RenderNothing;
    }

    return result;
};

export default function Router({
    children,
    className,
    route,
    navigate,
}: RouterProps): JSX.Element {
    const RouterChildren = useMemo(() => getRouteComponent(children, route), [children, route]);

    return (
        <RouterChildren
            className={className}
            navigate={navigate}
        />
    )
}