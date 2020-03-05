import React from 'react'

interface IProps {
    children: string
}

export const Cell = ({ children }: IProps) => (
    <div className="grid-cell">{children}</div>
)
