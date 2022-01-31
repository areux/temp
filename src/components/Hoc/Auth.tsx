import { connect } from "react-redux";

const requireAuth = (WrappedComponent: any) => {
    return (props: any) => {
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please login to view</p>
            )}
        </div>
    }
}
