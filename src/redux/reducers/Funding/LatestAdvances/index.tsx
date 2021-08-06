export default function reducer(
  state = {
    data: null
  },
  action: any
) {
  switch (action.type) {
    case 'GET_LATEST_ADVANCED_STARTED': {
      return { ...state, changingStatus: 'ongoing' };
    }
    case 'GET_LATEST_ADVANCED_SUCCESS': {
      return {
        ...state,
        changingStatus: 'success',
        data: action.payload
      };
    }
    case 'GET_LATEST_ADVANCED_FAILED': {
      return { ...state, changingStatus: 'failed', data: action.payload };
    }
    case 'GET_LATEST_ADVANCED_NET_FAILED': {
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
