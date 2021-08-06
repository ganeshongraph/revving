export default function reducer(
  state = {
    data: null
  },
  action: any
) {
  switch (action.type) {
    case 'GET_USER_PROFILE_DATA_STARTED': {
      return { ...state, changingStatus: 'ongoing' };
    }
    case 'GET_USER_PROFILE_DATA_SUCCESS': {
      localStorage.setItem('owner', action?.payload?.data?.is_owner);
      localStorage.setItem('default_currency', action?.payload?.data?.default_currency);
      return {
        ...state,
        changingStatus: 'success',
        data: action.payload
      };
    }
    case 'GET_USER_PROFILE_DATA_FAILED': {
      return { ...state, changingStatus: 'failed', data: action.payload };
    }
    case 'GET_USER_PROFILE_DATA_NET_FAILED': {
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
