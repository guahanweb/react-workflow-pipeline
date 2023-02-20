import * as React from 'react';
import {
    ElementType,
    HTMLElementType,
    PrimitivePropsWithRef,
    ViewProps,
} from '../types';

const ViewPrimitive = <Element extends ElementType = 'div'>(
    {
        as = 'div',
        children,
        testId,
        ariaLabel,
        isDisabled,
        style,
        inert,
        ...rest
    }: PrimitivePropsWithRef<ViewProps, Element>,
    ref?: React.ForwardedRef<HTMLElementType<Element>>
) => {
    return React.createElement(
        as,
        {
            'aria-label': ariaLabel,
            'data-testid': testId,
            disabled: isDisabled,
            ref,
            inert: inert ? '' : null,
            ...rest,
        },
        children
    );
};

export const View = React.forwardRef(ViewPrimitive);

View.displayName = 'View';
