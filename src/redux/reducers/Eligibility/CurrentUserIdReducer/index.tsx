export default function reducer(
  state = {
    data: {
      id: null
    }
  },
  action: any
) {
  switch (action.type) {
    case 'CURRENT_USER_ID_STARTED': {
      return { ...state, changingStatus: 'ongoing' };
    }
    case 'CURRENT_USER_ID_SUCCESS': {
      const { id } = action.payload.data;

      return {
        ...state,
        changingStatus: 'success',
        data: { id }
      };
    }
    case 'CURRENT_USER_ID_FAILED': {
      return { ...state, changingStatus: 'failed', data: action.payload };
    }
    case 'CURRENT_USER_ID_NET_FAILED': {
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
