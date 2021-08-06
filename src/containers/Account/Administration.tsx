import React, { useState, useEffect, useCallback } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  Snackbar,
  Grid,
  Typography,
  InputLabel,
  Button,
  FormControl,
  Select,
  MenuItem,
  TableCell,
  Table,
  TableHead,
  TableRow,
  TableBody,
  IconButton,
  Box,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

// import InfoIcon from '@material-ui/icons/Info';
import AuthLayout from '../../components/AuthLayout';
import {
  Img,
  DashboardWrrapper,
  ContentBoxWrap,
  WhiteBox,
  StyledDialog,
  FormGroup,
  H1,
  StyleTypography
} from './Styled';
// import edit from '../../assets/images/Edit.png';
import remove from '../../assets/images/Remove.png';

const Administration = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [revenue, setRevenue] = useState(false);
  const [owner, setOwner] = useState<string>('');
  const [team, setTeam] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [states, setStates] = useState({
    visible: false,
    vertical: 'top',
    horizontal: 'center',
    stop: true,
    msg: ''
  });
  const [updated, setUpdated] = useState(false);
  const [member, setMember] = useState({
    name: '',
    uuid: ''
  });

  const addTeam = useSelector((state: any) => state?.AddTeam?.data);
  const getTeam = useSelector((state: any) => state?.GetTeam?.data);

  const { vertical, horizontal, visible, msg } = states;

  // const handleClick = (newState) => () => {
  //   setStates({ open: true, ...newState });
  // };

  const handleToasterClose = () => {
    setStates({ ...states, visible: false, stop: true });
  };

  useEffect(() => {
    setUpdated(true);
  }, [addTeam]);

  const checkAddTeam = useCallback(
    (checkTeam) => {
      if (checkTeam?.message?.data && !states.visible && !states.stop) {
        setUpdated(false);
        setStates({
          ...states,
          visible: true,
          msg: `${checkTeam?.message?.data
            .substring(0, 1)
            .toUpperCase()}${checkTeam?.message?.data.substring(1)}`
        });
      } else if (checkTeam?.data?.detail && !states?.visible && updated && !states.stop) {
        setStates({
          ...states,
          visible: true,
          msg: `${checkTeam?.data?.detail
            .substring(0, 1)
            .toUpperCase()}${checkTeam?.data?.detail.substring(1)}`
        });
        setUpdated(false);
      } else {
        setRevenue(false);
      }
    },
    [states, updated]
  );

  useEffect(() => {
    checkAddTeam(addTeam);
  }, [addTeam, checkAddTeam]);

  useEffect(() => {
    dispatch({
      type: 'GET_TEAM',
      payload: { page: 1 }
    });
  }, [dispatch]);

  const handleClickRevenue = () => {
    setRevenue(true);
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setOwner(event.target.value as string);
  };

  // const handleClickOpen = (uuid: string) => {
  //   setOpen(true);
  // };

  const handleTeamChange = (event: React.ChangeEvent<{ value: String; name: String }>) => {
    let tempTeam = {
      firstName: '',
      lastName: '',
      email: ''
    };
    tempTeam = { ...team, [`${event.target.name}`]: event.target.value };
    setTeam(tempTeam);
  };

  const handleClickOpenDelete = (uuid: string, name: string) => {
    setMember({ name, uuid });
    setOpenDelete(true);
  };

  const handleAddTeam = () => {
    setStates({ ...states, stop: false });
    dispatch({
      type: 'GET_ADD_TEAM',
      payload: team
    });
    setTimeout(() => {
      dispatch({
        type: 'GET_TEAM',
        payload: { page: 1 }
      });
    }, 1000);
  };

  // const deleteTeam = () => {
  //   dispatch({
  //     type: 'GET_DELETE_TEAM',
  //     payload: team
  //   });
  // };

  const handleDelete = () => {
    dispatch({
      type: 'GET_REMOVE_TEAM',
      payload: member?.uuid
    });
    setTimeout(() => {
      dispatch({
        type: 'GET_TEAM',
        payload: { page: 1 }
      });
    }, 1000);
    setOpenDelete(false);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenDelete(false);
    setRevenue(false);
  };
  const Adobe_CaslonPro = createMuiTheme({
    typography: { fontFamily: ['Adobe_CaslonPro'].join(',') }
  });
  // eslint-disable-next-line no-console
  console.log('visible', visible, states);

  return (
    <>
      <AuthLayout>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={visible}
          onClose={handleToasterClose}
          message={msg}
          key={vertical + horizontal}
        />
        <DashboardWrrapper className='coommon-dashboardbg admin_body'>
          <ContentBoxWrap className='contentBoxW'>
            <WhiteBox className='padding'>
              <Grid container spacing={3} className='bottomContentBox ipad_wrap'>
                <Grid item xs={12} sm={6} className='paddrgt170 ipadw100'>
                  <ThemeProvider theme={Adobe_CaslonPro}>
                    <H1>Account Owner</H1>
                  </ThemeProvider>
                  <StyleTypography variant='body1' gutterBottom className='paraH'>
                    Only the account owner can change permissions.
                  </StyleTypography>
                </Grid>
                <Grid item xs={12} sm={6} className='paddrgt140 ipadw100'>
                  <FormGroup className='FormBoxWrap'>
                    <InputLabel htmlFor='pay'>Team Member</InputLabel>
                    <FormControl className='' variant='outlined'>
                      <Select
                        labelId='demo-controlled-open-select-label'
                        id='demo-controlled-open-select'
                        value={owner}
                        onChange={handleChange}
                        placeholder='Aa'
                      >
                        <MenuItem value='' selected>
                          Select
                        </MenuItem>
                        {getTeam?.data?.map((item: any) => (
                          <MenuItem
                            key={item?.details__uuid}
                            value={`${item?.first_name} ${item?.last_name}`}
                          >
                            {`${item?.first_name} ${item?.last_name}`}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </FormGroup>
                  <div className='edit_buttonwrep_new'>
                    {owner ? (
                      <Grid item xs={12} sm={12}>
                        <Button variant='outlined' color='primary' className='downloadBtn'>
                          Add as owner
                        </Button>
                        <Button
                          variant='outlined'
                          style={{ marginLeft: '28px' }}
                          color='primary'
                          className='downloadBtn'
                        >
                          Remove as owner
                        </Button>
                      </Grid>
                    ) : (
                      <Button variant='outlined' color='primary' className='downloadBtn'>
                        Edit
                      </Button>
                    )}
                  </div>
                </Grid>
              </Grid>
            </WhiteBox>
          </ContentBoxWrap>
          <ContentBoxWrap className='contentBoxW paddtop0 paddbtm100'>
            <WhiteBox className='padding amountTransaction adminstration_wrap'>
              <ThemeProvider theme={Adobe_CaslonPro}>
                <H1>Team Members</H1>
              </ThemeProvider>
              <StyleTypography variant='body1' gutterBottom className='administration'>
                Only the account holder has access to the administration page and can add to remove
                team members.
              </StyleTypography>
              <Box className='mob_tab_scrl'>
                <Table aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align='left'>Status</TableCell>
                      <TableCell align='left'>Username</TableCell>
                      <TableCell align='center'>Edit</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {getTeam?.data?.map((item: any) => {
                      // eslint-disable-next-line no-console
                      console.log('I am here ------------------', item);
                      return (
                        <TableRow key={item?.details__uuid}>
                          <TableCell align='left'>
                            <Box className='d-flex boxWrap'>
                              <Typography>{`${item?.first_name} ${item?.last_name}`}</Typography>
                            </Box>
                          </TableCell>
                          <TableCell align='left'>
                            <Box className='d-flex boxWrap boxWrap_new'>
                              <Typography>{item?.approved ? 'Activated' : 'Inactive'}</Typography>
                            </Box>
                          </TableCell>
                          <TableCell align='left'>
                            <Box className='d-flex boxWrap'>
                              <Typography>{item?.username}</Typography>
                            </Box>
                          </TableCell>
                          <TableCell align='left'>
                            <Box className='d-flex boxWrap iconsWrap'>
                              {/* <Img
                                src={edit}
                                alt='edit'
                                onClick={() => handleClickOpen(item?.details__uuid)}
                              /> */}
                              <Img
                                src={remove}
                                alt='remove'
                                onClick={() =>
                                  handleClickOpenDelete(
                                    item?.details__uuid,
                                    `${item?.first_name} ${item?.last_name}`
                                  )
                                }
                              />
                            </Box>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Box>
              <Button variant='outlined' className='addBTN' onClick={handleClickRevenue}>
                + Add a new team member
              </Button>
            </WhiteBox>
          </ContentBoxWrap>
        </DashboardWrrapper>
        <StyledDialog
          className='modalDilog'
          open={open}
          onClose={handleClose}
          aria-labelledby='responsive-dialog-title'
        >
          <DialogTitle id='responsive-dialog-title'>Add a new team member</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <FormGroup>
                <InputLabel htmlFor='name'>First name</InputLabel>
                <TextField id='outlined-basic' variant='outlined' />
              </FormGroup>
              <FormGroup>
                <InputLabel htmlFor='name'>Last name</InputLabel>
                <TextField id='outlined-basic' variant='outlined' />
              </FormGroup>
              <FormGroup>
                <InputLabel htmlFor='name'>Email address</InputLabel>
                <TextField id='outlined-basic' variant='outlined' />
              </FormGroup>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <div className='edit_buttonwrep'>
              <Button variant='outlined' color='primary' className='downloadBtn'>
                Add team member
              </Button>
              <Button onClick={handleClose} autoFocus>
                Cancel
              </Button>
            </div>
          </DialogActions>
          <Typography className='mSuccess'>
            Success! David will be sent an email to activate his account. This may take a few
            minutes.
          </Typography>
          <IconButton className='cloSebtn' onClick={handleClose}>
            <svg
              width={22}
              height={22}
              viewBox='0 0 22 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M1 1L21 21' stroke='#706B6B' strokeWidth={2} strokeLinecap='round' />
              <path d='M21 1L1 21' stroke='#706B6B' strokeWidth={2} strokeLinecap='round' />
            </svg>
          </IconButton>
        </StyledDialog>
        <StyledDialog
          className='modalDilog DeleteDilog'
          open={openDelete}
          onClose={handleClose}
          aria-labelledby='responsive-dialog-title'
        >
          <DialogTitle id='responsive-dialog-title'>Delete team member</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <FormGroup className='DeleteDilogText'>
                <Typography>You are about to delete the following team member:</Typography>
              </FormGroup>
              <FormGroup className='DeleteDilogText'>
                <Typography variant='body2'>{member?.name}</Typography>
              </FormGroup>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <div className='edit_buttonwrep'>
              <Button
                variant='outlined'
                color='primary'
                onClick={handleDelete}
                className='downloadBtn'
              >
                Confirm
              </Button>
              <Button onClick={handleClose} autoFocus>
                Cancel
              </Button>
            </div>
          </DialogActions>
          <IconButton className='cloSebtn' onClick={handleClose}>
            <svg
              width={22}
              height={22}
              viewBox='0 0 22 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M1 1L21 21' stroke='#706B6B' strokeWidth={2} strokeLinecap='round' />
              <path d='M21 1L1 21' stroke='#706B6B' strokeWidth={2} strokeLinecap='round' />
            </svg>
          </IconButton>
        </StyledDialog>
      </AuthLayout>
      <StyledDialog
        className='modalDilog'
        open={revenue}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>Add a new team member</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormGroup>
              <InputLabel htmlFor='firstName'>First name</InputLabel>
              <TextField
                id='outlined-basic'
                name='firstName'
                variant='outlined'
                onChange={handleTeamChange}
              />
            </FormGroup>
            <FormGroup>
              <InputLabel htmlFor='lastName'>Last name</InputLabel>
              <TextField
                id='outlined-basic'
                name='lastName'
                variant='outlined'
                onChange={handleTeamChange}
              />
            </FormGroup>
            <FormGroup>
              <InputLabel htmlFor='email'>Email address</InputLabel>
              <TextField
                id='outlined-basic'
                name='email'
                variant='outlined'
                onChange={handleTeamChange}
              />
            </FormGroup>
            <Typography className='d-none'>
              Success! David will be sent an email to activate his account. This may take a few
              minutes.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className='edit_buttonwrep'>
            <Button
              variant='outlined'
              color='primary'
              onClick={handleAddTeam}
              className='downloadBtn'
            >
              Add team member
            </Button>
            <Button onClick={handleClose} autoFocus>
              Cancel
            </Button>
          </div>
        </DialogActions>
        {/* <IconButton className='cloSebtn' onClick={handleClose}>
          <svg
            width={22}
            height={22}
            viewBox='0 0 22 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M1 1L21 21' stroke='#706B6B' strokeWidth={2} strokeLinecap='round' />
            <path d='M21 1L1 21' stroke='#706B6B' strokeWidth={2} strokeLinecap='round' />
          </svg>
        </IconButton> */}
      </StyledDialog>
    </>
  );
};
export default Administration;
