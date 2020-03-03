import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { Header as HeaderComponent } from './Header';
import {changeLanguage} from './reducer';

const mapStateToProps = ({ headerReducer }: any) => ({})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeLanguage: (lang: string) => () => dispatch(changeLanguage(lang))
})

export const Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderComponent)


export { headerReducer } from './reducer'
export { headerSaga } from './saga'
