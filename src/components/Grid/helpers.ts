import moment from 'moment'
import { ascend, descend, path, prop, sort, toLower } from 'ramda'

import { DataTypes } from '../../const/dataTypes'
import { IStudent } from '../../data/model'
import { IGridConfigColumn } from './types'

export const formatValue = (value: number | string, type: string): string => {
  if (!value) {
    return ''
  }
  switch (type) {
    case DataTypes.number:
      return value.toLocaleString()
    case DataTypes.boolean:
      return ''
    case DataTypes.datetime:
      return moment(value).format('MMMM DD, YYYY, HH:mm')
    default:
      return String(value)
  }
}

export const sortBy = (data: IStudent[], orderByProp: string, desc: boolean): IStudent[] =>
  desc ? sort(ascend(prop(orderByProp)), data) : sort(descend(prop(orderByProp)), data)

export const filterBy = (key: string, filterValue: string) => (item: IStudent) => {
  const value: any = path([key], item)
  if (typeof value !== 'string' || !key) {
    return true
  }
  return toLower(value).includes(toLower(filterValue))
}

interface IResult {
  totalWidth: number
  col: number
}

export const getAverageWidth = (columns: IGridConfigColumn[]) => {
  const { innerWidth } = window
  const result: IResult = columns.reduce(
    (acc: IResult, column: IGridConfigColumn): IResult => {
      if (typeof column.width !== 'undefined') {
        return { totalWidth: acc.totalWidth - column.width, col: acc.col - 1 }
      }
      return acc
    },
    { totalWidth: innerWidth, col: columns.length }
  )

  return result.totalWidth / result.col
}
