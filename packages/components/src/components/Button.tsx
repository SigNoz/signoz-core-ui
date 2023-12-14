import React from 'react';

import { Button as ButtonComponent } from '@radix-ui/themes';
import { ButtonProps } from './types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
        return (
        <ButtonComponent {...props} ref={ref}>
            {props.children}
        </ButtonComponent>
        );
    }
);
