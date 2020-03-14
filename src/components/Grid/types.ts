import { IStudent } from '../../data/model'
import { IKeyValue } from '../common'

export interface IGridConfigColumn {
  name: string
  source: string
  type: string
  sortable?: boolean
  filterable?: boolean
  visible?: boolean
  width?: number
}

export interface IGridConfig {
  columns: IGridConfigColumn[]
  virtualize?: boolean
}

export interface IGrid {
  payload: IStudent[]
  received: boolean
  orderBy: string
  desc: boolean
  virtualizeOn?: boolean
  config: IGridConfig
  fetchData: () => void
  onSort: (column: string) => () => void
  onFilter: (column: string) => (value: string) => void
}

export interface IRenderItemProps {
  index: number
  style: IKeyValue<string>
}
