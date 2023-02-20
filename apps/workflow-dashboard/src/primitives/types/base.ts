import React, { AriaAttributes } from 'react';

// Base component definition
export interface BaseComponentProps {
    id?: string;
    className?: string;
    testId?: string;
    inert?: boolean;
}

export interface AriaProps {
    ariaLabel?: AriaAttributes['aria-label'];
    ariaValuetext?: AriaAttributes['aria-valuetext'];
    role?: React.AriaRole;
}

export type Sizes = 'small' | 'large';
