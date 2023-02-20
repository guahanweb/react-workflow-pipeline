type WorkflowEventData = Record<PropertyKey, any>; // TODO: this should be typed further

export type WorkflowRoute =
    | 'initializeWorkflow'
    | 'confirmCompetedWorkflow'
    | 'finalizeWorkflow';

interface WorkflowServiceContextFacade {
    route: WorkflowRoute;
    error: string;
    user: any;
    // extend with any global workflow data types
};

type SendEventAlias =
    | 'initialize'
    | 'confirm';

type WorkflowSendEventAliases = Record<SendEventAlias, (data?: WorkflowEventData) => void>;

export interface WorkflowServiceFacade extends WorkflowSendEventAliases, WorkflowServiceContextFacade {}
