import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography
} from '@mui/material';
import {
  Lock as LockIcon,
  Email as EmailIcon,
} from '@mui/icons-material';
import { styled } from '@mui/system';
import './Profile.css';

const useStyles = styled((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(2),
    },
  },
}));

function Profile() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [location, setLocation] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className='Profile'>
      <Container>
        <Box display="flex" style={{ marginTop: 48 }}>
          <Box
            flex={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
            className="profile-section"
            width={800}
          >
            <Typography variant="h4">My Profile</Typography>
            <Typography variant="h6" gutterBottom>
              Saumya Pande
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className="action-button"
              style={{ width: '300px' }}
            >
              Profile Information
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="action-button"
              style={{ marginTop: 8, width: '300px' }}
            >
              Newsletter Subscription
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="action-button"
              style={{ marginTop: 8, width: '300px' }}
            >
              Manage Notifications
            </Button>
          </Box>

          <Box flex={6} ml={3} className="form-section">
            <Box mb={4}>
              <Typography variant="h5">Personal Information</Typography>
              <form className={classes.form}>
                <TextField
                  label="Name"
                  variant="outlined"
                  placeholder="Enter Name"
                  fullWidth
                  style={{ marginTop: '6px' }}
                  value={name}
                  onChange={handleNameChange}
                />
                <TextField
                  label="Date of Birth"
                  type="date"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  style={{ marginTop: '15px' }}
                  value={dateOfBirth}
                  onChange={handleDateOfBirthChange}
                />
                <TextField
                  label="Location"
                  variant="outlined"
                  placeholder="Enter Location"
                  fullWidth
                  style={{ marginTop: '15px' }}
                  value={location}
                  onChange={handleLocationChange}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  className="save-button"
                  style={{ marginTop: '15px' }}
                >
                  Save Personal Info
                </Button>
              </form>
            </Box>

            <Box>
              <Typography variant="h5">Security</Typography>
              <form className={classes.form}>
                <TextField
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  placeholder="Enter Email"
                  fullWidth
                  style={{ marginTop: '6px' }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  placeholder="Enter Password"
                  fullWidth
                  style={{ marginTop: '15px' }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  placeholder="Confirm Password"
                  fullWidth
                  style={{ marginTop: '15px' }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  className="save-button"
                  style={{ marginTop: '15px' }}
                >
                  Save Security Info
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Profile;
