import { filter } from 'ramda'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { Grid as GridComponent } from './Grid'
import { fetchData, onFilter, onSort } from './reducer'
import { filterBy, sortBy } from './helpers'

const PER_PAGE = 1200

const mapStateToProps = ({ gridReducer, headerReducer }: any) => {
  const { data, pagination, received, orderBy, desc, filterKey, filterValue } = gridReducer
  const { virtualizeOn } = headerReducer
  const { page } = pagination
  const filtered = Boolean(filterValue) ? filter(filterBy(filterKey, filterValue), data) : data
  const payload = sortBy(filtered, orderBy, desc).slice(PER_PAGE * page, PER_PAGE * (page + 1))
  return {
    payload,
    received,
    orderBy,
    desc,
    virtualizeOn
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchData: () => dispatch(fetchData()),
  onSort: (orderByField: string) => () => dispatch(onSort(orderByField)),
  onFilter: (filterKey: string) => (filterValue: string) => dispatch(onFilter({ filterValue, filterKey }))
})

export const Grid = connect(mapStateToProps, mapDispatchToProps)(GridComponent)

export { gridReducer } from './reducer'
export { Cell } from './components/Cell'
export { gridSaga } from './saga'
