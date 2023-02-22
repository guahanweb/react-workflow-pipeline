import React, { useCallback, useState, useRef, useMemo } from 'react';
import type { RouterProps, RegisteredStepList } from '../types';
import { RenderNothing } from '../../RenderNothing';

type RouteComponent = (props: any) => JSX.Element;

const getRouteComponent = (steps: RegisteredStepList, route: string): RouteComponent | typeof RenderNothing => {
    const element = steps && steps[route];

    if (element) {
        return (props: any) => {
            const internalProps = {
                ...(element.props as any),
                ...props,
            }

            return React.cloneElement(element, internalProps);
        }
    } else {
        return RenderNothing;
    }
};

export default function Router({
    route,
    steps,
    onReset,
}: RouterProps): JSX.Element {
    const history = useRef<string[]>([]);
    const [currentRoute, setCurrentRoute] = useState(route);
    const RouterChildren = useMemo(() => getRouteComponent(steps, currentRoute), [steps, currentRoute]);

    const navigate = useCallback(function (nextStep: string) {
        setCurrentRoute((prev: string) => {
            history.current.push(prev);
            return nextStep;
        });
    }, []);

    const back = useCallback(function () {
        if (history.current.length) {
            const previous = history.current.pop();
            setCurrentRoute(previous as string);
        }
    }, []);

    const reset = useCallback(function () {
        if (typeof onReset === 'function') onReset();

        history.current = [];
        setCurrentRoute(route);
    }, [onReset]);

    return (
        <RouterChildren
            workflow={{
                navigate,
                back,
                reset,
            }}
        />
    )
}