import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { setUser } from '../actions/userActions';

import Login from '../components/Login';


const mapStateToProps = (state) => {
    return {
        data: state.user.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (data) => {
            dispatch(setUser(data));
        },
    }
}

const loginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default withRouter(loginContainer);