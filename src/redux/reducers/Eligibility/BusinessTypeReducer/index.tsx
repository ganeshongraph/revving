export default function reducer(
  state = {
    data: null
  },
  action: any
) {
  switch (action.type) {
    case 'BUSINESS_STATS_STARTED': {
      return { ...state, changingStatus: 'ongoing' };
    }
    case 'BUSINESS_STATS_SUCCESS': {
      return {
        ...state,
        changingStatus: 'success',
        data: action.payload
      };
    }
    case 'BUSINESS_STATS_FAILED': {
      return { ...state, changingStatus: 'failed', data: action.payload };
    }
    case 'BUSINESS_STATS_NET_FAILED': {
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
