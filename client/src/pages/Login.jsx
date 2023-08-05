import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../graphql/mutations";
import { useSelector } from "react-redux";
import { getUser } from "../redux/slices/userSlice";
import { Navigate } from "react-router-dom";

import Page from "../components/Page";
import AuthService from "../utils/auth";


// import { Box, Grid, Typography, Button } from '@mui/material';
// import { styled } from '@mui/system';
// import { useTheme } from '@mui/material/styles';
// import { colors } from '../components/theme';
// import button from '../components/button';
// import Page from '../components/Page';
// import { ThemeProvider } from '@mui/material/styles';


const styles = {
  form: {
    display: "flex",
    flexDirection: "Column",
    width: "300px",
  },
  submitBtn: {
    cursor: "pointer",
  },
};


export default function Login() {
  const [loginUser, { error, data, loading }] = useMutation(LOGIN_USER);
  const { isAuthenticated } = useSelector(getUser());

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await loginUser({
        variables: { ...formState },
      });

      AuthService.login(data.loginUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <Page title={'LogIn-Page'} class-name= 'LogIn-Page' isProtected={false} pageStyles={{
      backgroundImage: `url(/pink-neon.jpg)`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
    >
      <form style={styles.form} onSubmit={handleFormSubmit}>
        <input
          placeholder="Email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          placeholder="Password"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        {loading ? (
          <button type="submit" disabled={true} style={styles.submitBtn}>
            Loading...
          </button>
        ) : (
          <button type="submit" style={styles.submitBtn}>
            Submit
          </button>
        )}
      </form>
      {error && <h3>{error.message}</h3>}
    </Page>
  );
}