import classnames from 'classnames'
import React from 'react'
// @ts-ignore
import List from 'react-virtualized-listview'

import { IGrid, IGridConfigColumn, IRenderItemProps } from './types'
import { IStudent } from '../../data/model'
import { Cell, HeaderCell } from './components'
import { formatValue, getAverageWidth } from './helpers'
import { DataTypes } from '../../const/dataTypes'
import { Preloader } from '../Preloader'
import { IKeyValue } from '../common'

import './index.scss'

const COLUMN_WIDTH = 160

export class Grid extends React.Component<IGrid> {
  componentDidMount(): void {
    this.props.fetchData()
  }

  render() {
    const { payload, received, config, orderBy, desc, virtualizeOn = true, onSort, onFilter } = this.props
    if (!received) {
      return <Preloader />
    }
    const columnWidth = getAverageWidth(config.columns) || COLUMN_WIDTH

    let offset = 0
    let currentIndex = 0
    const RenderRow = ({ index, style }: IRenderItemProps) => (
      <div className="grid-row" key={index}>
        {config.columns.map(({ source, type, width = columnWidth }: IGridConfigColumn) => {
          if (index !== currentIndex) {
            offset = 0
            currentIndex = index
          }
          const cellStyle: IKeyValue<string | number> = {
            ...style,
            ...(width ? { width, minWidth: width } : { flex: 1 }),
            left: `${offset}px`
          }
          offset += width
          // @ts-ignore
          const value = payload[index][source]

          return (
            <Cell
              classname={classnames(`grid-cell-${type} grid-cell-${source}`, {
                active: type === DataTypes.boolean && Boolean(value)
              })}
              style={cellStyle}
              key={`${source}-${index}`}
            >
              {formatValue(value, type)}
            </Cell>
          )
        })}
      </div>
    )

    const style = {}

    return (
      <div className="grid-container">
        <div className="grid-row header-grid-row">
          {config.columns.map(
            ({
              name,
              source,
              type,
              width = columnWidth,
              sortable = true,
              filterable = false,
              visible = true
            }: IGridConfigColumn) => {
              const style = width ? { width, minWidth: width } : null

              return (
                <HeaderCell
                  classname={`header-grid-cell-${source} ${type}`}
                  style={style}
                  key={name}
                  isOrderByThis={orderBy === source}
                  desc={desc}
                  onSort={sortable ? onSort(source) : undefined}
                  onFilter={filterable ? onFilter(source) : undefined}
                  filterable={filterable}
                >
                  {name}
                </HeaderCell>
              )
            }
          )}
        </div>
        {virtualizeOn ? (
          <List source={payload} rowHeight={30} renderItem={RenderRow} />
        ) : (
          payload.map((student: IStudent | any, index: number) => <RenderRow key={index} index={index} style={style} />)
        )}
      </div>
    )
  }
}
