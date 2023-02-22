import { ReactNode } from 'react';

export type ComponentProps = {
    children: ReactNode;
    className?: string;
}

export type WorkflowProps = ComponentProps & {
    loading?: boolean;
    onReset?: () => void;
    route?: string;
}

type BaseRouterProps = Omit<ComponentProps, 'children'>

export type RouterProps = BaseRouterProps & {
    route: string;
    steps: RegisteredStepList;
    onReset?: () => void;
};

export type StepComponentProps = Omit<ComponentProps, 'children'> & {
    id: string;
    state: any;
    Component: (props: any) => JSX.Element;
    nextStep: string;
    isFinal?: boolean;
}

export type RenderedStepProps = StepComponentProps & {
    workflow: BaseRouterProps & {
        navigate: (nextStep: string) => void;
        back: () => void;
        reset: () => void;
    }
}

export type RegisteredStepList = {
    [key: string]: JSX.Element;
}
