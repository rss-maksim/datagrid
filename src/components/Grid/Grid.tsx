import classnames from 'classnames'
import React from 'react'
import { FixedSizeList } from 'react-window'

import {IGrid, IGridConfigColumn, IState} from './types'
import { IStudent } from '../../data/model'
import { Cell, HeaderCell } from './components'
import { formatValue } from './helpers'
import { DataTypes } from '../../const/dataTypes'
import { Preloader } from '../Preloader'

import './index.scss'

export class Grid extends React.Component<IGrid, IState> {
    componentDidMount(): void {
        this.props.fetchData()
    }

    render() {
        const { payload, received, config, orderBy, desc, onSort, onFilter } = this.props
        if (!received) {
            return <Preloader />
        }

        return (
            <div className="grid-container">
                <div className="grid-row header-grid-row">
                    {config.columns.map(({ name, source, type, width, sortable= true, filterable, visible= true }: IGridConfigColumn) => {
                        const style = width ? { maxWidth: width } : null

                        return <HeaderCell
                                    classname={`header-grid-cell-${source} ${type}`}
                                    style={style}
                                    key={name}
                                    isOrderByThis={orderBy === source}
                                    desc={desc}
                                    onSort={sortable ? onSort(source) : undefined}
                                    onFilter={filterable ? onFilter(source) : undefined}>
                                {name}
                                </HeaderCell>
                    })}
                </div>
                {payload.map((student: IStudent | any, index: number) => {
                    return (
                        <FixedSizeList
                            height={500}
                            width={500}
                            itemSize={160}
                            itemCount={payload.length}
                            className="list-container">
                            {({ index, style }) => (
                                <div className="grid-row" key={index}>
                                    {config.columns.map(({ source, type, width }: IGridConfigColumn) => {
                                        const style = width ? { maxWidth: width } : null

                                        return (
                                            <Cell classname={classnames(`grid-cell-${type} grid-cell-${source}`, {
                                                active: type === DataTypes.boolean && Boolean(student[source])
                                            })} style={style} key={`${source}-${index}`}>{formatValue(student[source], type)}</Cell>
                                        )
                                    })}
                                </div>
                            )}
                        </FixedSizeList>
                    )
                })}
            </div>
        )
    }
}
