export default function reducer(
  state = {
    data: null
  },
  action: any
) {
  switch (action.type) {
    case 'UPDATE_BUSINESS_STARTED': {
      return { ...state, changingStatus: 'ongoing' };
    }
    case 'UPDATE_BUSINESS_SUCCESS': {
      return {
        ...state,
        changingStatus: 'success',
        data: action.payload
      };
    }
    case 'UPDATE_BUSINESS_FAILED': {
      return { ...state, changingStatus: 'failed', data: action.payload };
    }
    case 'UPDATE_BUSINESS_NET_FAILED': {
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
