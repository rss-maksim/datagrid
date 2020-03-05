import { connect } from 'react-redux';
import { Dispatch } from 'redux'

import { Grid as GridComponent } from './Grid'
import { fetchData } from './reducer';

const mapStateToProps = ({ gridReducer }: any) => {
    const { data: payload } = gridReducer
    return { payload }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchData: () => dispatch(fetchData())
})

export const Grid = connect(mapStateToProps, mapDispatchToProps)(GridComponent)

export { gridReducer } from './reducer'
export { Cell } from './components/Cell'
export { gridSaga } from './saga'
