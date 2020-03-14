import { connect } from 'react-redux';
import { Dispatch } from 'redux'

import { Grid as GridComponent } from './Grid'
import { fetchData, onSort } from './reducer';
import { sortBy } from './helpers'

const mapStateToProps = ({ gridReducer }: any) => {
    const { data, pagination, received, orderBy, desc } = gridReducer
    const { page, perPage } = pagination
    const payload = sortBy(data, orderBy, desc).slice(perPage * page, 1000 * (page + 1))
    return {
        payload,
        received,
        orderBy,
        desc
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchData: () => dispatch(fetchData()),
    onSort: (orderByField: string) => () => dispatch(onSort(orderByField)),
    onFilter: (orderByField: string) => () => dispatch(onSort(orderByField))
})

export const Grid = connect(mapStateToProps, mapDispatchToProps)(GridComponent)

export { gridReducer } from './reducer'
export { Cell } from './components/Cell'
export { gridSaga } from './saga'
