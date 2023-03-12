import { Button, Input } from "@mui/material";
import { Container } from "@mui/system";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import { setUserSlice } from "../redux/slice/user";
import { addUsersSlice, editUsersSlice } from "../redux/slice/users";
import { CREATE_USER, GET_USERS, UPDATE_USER_BY_ID } from "../redux/types";

const MyForm = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleChange = (prop) => (event) => {
        dispatch(setUserSlice({ ...user, [prop]: event.target.value }));
    };
    const handleSubmit = () => {
        //user.id === null ? dispatch(addUsersSlice({...user, id: nanoid(8)})) : dispatch(editUsersSlice(user));
        user.id === null
            ? dispatch({ type: CREATE_USER, user: { ...user, id: nanoid(8) } })
            : dispatch({ type: UPDATE_USER_BY_ID, user });
        dispatch(
            setUserSlice({
                id: null,
                name: "",
                email: "",
                password: "",
            })
        );
    };
    return (
        <>
            <Container>
                <Typography>
                    id = {user.id === null ? "no selected user(select by edit)" : user.id}
                </Typography>
                <Input
                    onChange={handleChange("name")}
                    placeholder="Enter name"
                    value={user.name}
                    fullWidth
                />
                <Input
                    onChange={handleChange("email")}
                    placeholder="Enter email"
                    value={user.email}
                    fullWidth
                />
                <Input
                    onChange={handleChange("password")}
                    placeholder="Enter password"
                    value={user.password}
                    fullWidth
                />
                <Button
                    onClick={() => handleSubmit()}
                    fullWidth
                    variant="contained"
                >
                    Submit
                </Button>
            </Container>
        </>
    );
};

export default MyForm;
