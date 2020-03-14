import moment from 'moment'
import { ascend, compose, descend, prop, sort, toLower } from 'ramda'

import { DataTypes } from '../../const/dataTypes'
import { IStudent } from '../../data/model'

export const formatValue = (value: number|string, type: string): string => {
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
