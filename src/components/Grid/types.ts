import { IStudent } from '../../data/model';

export interface IGridConfigColumn {
    name: string
    source: string
    type: string
    sortable?: boolean
    filterable?: boolean
    visible?: boolean
}

export interface IGridConfig {
    columns: IGridConfigColumn[]
    virtualize?: boolean
}

export interface IGrid {
    payload: IStudent[]
    config: IGridConfig
    fetchData: () => void
}

export interface IState {

}
