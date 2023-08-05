import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../graphql/mutations";
import { useSelector } from "react-redux";
import { getUser } from "../redux/slices/userSlice";
import { Navigate } from "react-router-dom";
import { Grid, Box, Typography, Button, Card } from '@mui/material';
import { styled } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import button from '../components/button';

import Page from "../components/Page";
import AuthService from "../utils/auth";

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

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',

});

const StyledCard = styled(Card)({
  padding: '10px',
  width: '100%',
  maxWidth: '500px',
  boxSizing: 'border-box',
  borderRadius: '10px',


});



export default function SignUp() {
  const [addUser, { error, data, loading }] = useMutation(ADD_USER);
  const { isAuthenticated } = useSelector(getUser());

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
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
      const { data } = await addUser({
        variables: { ...formState },
      });

      AuthService.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <Page isProtected={false} isProtected={false} title={'Login-Page'} class-name= 'Login-Page' isProtected={false} pageStyles={{
      backgroundImage: `url(/neon.jpg)`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
  <Container>
      <Grid>
        <StyledCard>
          <h2 style={{ textAlign: 'center' }}>Sign-Up</h2>
      <form style={styles.form} onSubmit={handleFormSubmit}>
        <input
          placeholder="First Name"
          name="firstName"
          type="text"
          value={formState.firstName}
          onChange={handleChange}
        />
        <input
          placeholder="Last Name"
          name="lastName"
          type="text"
          value={formState.lastName}
          onChange={handleChange}
        />
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
          <ThemeProvider theme={button}> 
          <Button> type="submit" disabled={true} style={styles.submitBtn}
            Loading...
          </Button>
          </ThemeProvider>
        ) : (
          <ThemeProvider theme={button}> 
          <Button type="submit" variant= "contained" style={styles.submitBtn}>
            Submit
          </Button>
          </ThemeProvider>
        )}
      </form>
      {error && <h3>{error.message}</h3>}
          </StyledCard>
        </Grid>
      </Container>
    </Page>
  );
}
