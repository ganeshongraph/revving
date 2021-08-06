export default function reducer(
  state = {
    data: null
  },
  action: any
) {
  switch (action.type) {
    case 'GET_RELATED_CURRENCY_STARTED': {
      return { ...state, changingStatus: 'ongoing' };
    }
    case 'GET_RELATED_CURRENCY_SUCCESS': {
      return {
        ...state,
        changingStatus: 'success',
        data: action.payload
      };
    }
    case 'GET_RELATED_CURRENCY_FAILED': {
      return { ...state, changingStatus: 'failed', data: action.payload };
    }
    case 'GET_RELATED_CURRENCY_NET_FAILED': {
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
