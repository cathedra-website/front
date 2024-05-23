import React, { ReactNode } from "react";

export const Paragraph = ({children, attributes = { className: '' }}: {children: ReactNode, attributes?: React.ComponentPropsWithoutRef<'p'>}) => {
    const { className, ...rest } = attributes
    return <p className={`w-full font-light text-2xl leading-7 ${className}`} {...rest}>{children}</p>
}