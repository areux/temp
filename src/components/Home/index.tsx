import { connect } from "react-redux";
import TestCards from '../cards/ApiTestCard';
import { Container } from "@mui/material";

const Home = (props: any) => {
    return (
        <>
            <Container>
                <TestCards />
            </Container>
        </>
    );
};

const mapStateToProps = (state: any) => {
    return {
        isAuthenticated: state.auth.auth,
    };
};

export default connect(mapStateToProps)(Home);