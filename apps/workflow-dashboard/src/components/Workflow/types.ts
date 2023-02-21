import { ReactNode } from 'react';

export type ComponentProps = {
    children: ReactNode;
    className?: string;
}

export type WorkflowProps = ComponentProps & {
    defaultRoute: string;
    route?: string;
}

export type StepProps = Omit<ComponentProps, 'children'> & {
    id: string;
    Component: (props: any) => JSX.Element;
    navigate?: (route: string) => void;
}

export type StepComponentProps = Omit<ComponentProps, 'children'> & {
    navigate: (route: string) => void;
}

export type RouterProps = ComponentProps & {
    route: string;
    navigate: (route: string) => void;
};
