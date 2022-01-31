import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
    return {
        isAuthenticated: state.isAuthenticated,
    };
};

// export default connect(mapStateToProps)();