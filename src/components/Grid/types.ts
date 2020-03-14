import { IStudent } from '../../data/model';

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
    config: IGridConfig
    fetchData: () => void
    onSort: (column: string) => () => void
    onFilter: (column: string) => () => void
}

export interface IState {

}
