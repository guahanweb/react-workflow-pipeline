export type RouteProps = {
    className: string | undefined;
    variation: 'default' | 'modal' | undefined;
};

export type RouteContainerProps = { children: React.ReactNode } & RouteProps;
