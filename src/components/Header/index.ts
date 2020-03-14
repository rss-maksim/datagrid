import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { Header as HeaderComponent } from './Header'
import { toggleVirtualize } from './reducer'

const mapStateToProps = ({ headerReducer: { virtualizeOn } }: any) => ({ virtualizeOn })

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleVirtualize: () => dispatch(toggleVirtualize())
})

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)

export { headerReducer } from './reducer'
