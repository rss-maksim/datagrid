import React from 'react'
import classnames from 'classnames'

interface IProps {
    children: string
    classname?: string
    style?: any
}

export const Cell = ({ children, classname, style }: IProps) => (
    <div className={classnames('grid-cell', classname)} style={style}>
        <span className="inner-grid-cell">{children}</span>
    </div>
)
