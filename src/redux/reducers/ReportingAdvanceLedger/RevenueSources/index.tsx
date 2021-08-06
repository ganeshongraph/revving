export default function reducer(
  state = {
    data: null
  },
  action: any
) {
  switch (action.type) {
    case 'GET_ALL_REVENUE_SOURCES_STARTED': {
      return { ...state, changingStatus: 'ongoing' };
    }
    case 'GET_ALL_REVENUE_SOURCES_SUCCESS': {
      return {
        ...state,
        changingStatus: 'success',
        data: action.payload
      };
    }
    case 'GET_ALL_REVENUE_SOURCES_FAILED': {
      return { ...state, changingStatus: 'failed', data: action.payload };
    }
    case 'GET_ALL_REVENUE_SOURCES_NET_FAILED': {
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
