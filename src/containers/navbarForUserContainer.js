import { connect } from 'react-redux';

import NavbarForUser from '../components/NavbarForUser';

const mapStateToProps = (state) => {
    return {
        data: state.user.data
    }
}

const navbarForUserContainer = connect(
    mapStateToProps,
    null,
)(NavbarForUser)

export default navbarForUserContainer;