/* eslint-disable react/button-has-type */
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@material-ui/core';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { useTheme } from '@material-ui/core/styles';
import { Div } from './Styled';

const ExitIntentModal = ({ show, handleClosePopup }: { show: any; handleClosePopup: Function }) => {
  // use show to determine if you should display the modal or not
  // const [isVisible, setShow] = useState(show);
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  // useEffect(() => {
  //   setShow(show);
  // }, [show]);

  // you can create a function to close the modal after the user clicks the "x" button or subscribes
  const handleClose = () => {
    handleClosePopup();
  };

  return (
    <Div>
      <Dialog
        className='revert_modal'
        // fullScreen={fullScreen}
        open={show}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>Revving Alert</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You’re nearly there keep going! If you have any questions please contact us at
            info@revving.io
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Div>
  );
};

export default ExitIntentModal;
