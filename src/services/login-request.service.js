import { loading } from "../Action/actions";

const Login = (user) => {
	const getUserThunk = async (dispatch, getState) => {
        dispatch(loading(true));
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(loading(false));
    }
    return getUserThunk;
}
export default Login;