import React from 'react'

import {IGrid, IGridConfigColumn, IState} from './types'
import { IStudent } from '../../data/model'
import { Cell } from './components'

import './index.scss'

export class Grid extends React.Component<IGrid, IState> {
    componentDidMount(): void {
        this.props.fetchData()
    }

    render() {
        const { payload, config } = this.props
        if (!payload) {
            return
        }

        return (
            <div className="grid-container">
                {Boolean(payload && payload.length) && payload.map((student: IStudent | any, index: number) => {
                    return (
                        <div className="grid-row" key={index}>
                            {config.columns.map(({ source }: IGridConfigColumn) => (
                                <Cell key={`${source}-${index}`}>{student[source] as string}</Cell>
                            ))}
                        </div>
                    )
                })}
            </div>
        )
    }
}
