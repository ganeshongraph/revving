export default function reducer(
  state = {
    data: null
  },
  action: any
) {
  switch (action.type) {
    case 'SEND_SMS_STARTED': {
      return { ...state, changingStatus: 'ongoing' };
    }
    case 'SEND_SMS_SUCCESS': {
      return {
        ...state,
        changingStatus: 'success',
        data: action.payload
      };
    }
    case 'SEND_SMS_FAILED': {
      return { ...state, changingStatus: 'failed', data: action.payload };
    }
    case 'SEND_SMS_NET_FAILED': {
      return {
        ...state,
        changingStatus: 'netFailed',
        data: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
