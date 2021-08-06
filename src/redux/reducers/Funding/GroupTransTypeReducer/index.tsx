export default function reducer(
  state = {
    data: null
  },
  action: any
) {
  switch (action.type) {
    case 'GROUPED_TRANSACTION_TYPE_STARTED': {
      return { ...state, changingStatus: 'ongoing' };
    }
    case 'GROUPED_TRANSACTION_TYPE_SUCCESS': {
      return {
        ...state,
        changingStatus: 'success',
        data: action.payload
      };
    }
    case 'GROUPED_TRANSACTION_TYPE_FAILED': {
      return { ...state, changingStatus: 'failed', data: action.payload };
    }
    case 'GROUPED_TRANSACTION_TYPE_NET_FAILED': {
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
