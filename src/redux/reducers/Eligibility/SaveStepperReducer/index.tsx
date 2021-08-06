export default function reducer(
  state = {
    data: {
      businessValue: null,
      fundingValue: null,
      contactValue: null,
      backgroundValue: null,
      revenueValue: null
    }
  },
  action: any
) {
  switch (action.type) {
    case 'SAVE_STEPPER_STARTED': {
      return { ...state, changingStatus: 'ongoing' };
    }
    case 'SAVE_STEPPER_SUCCESS': {
      const { businessValue, fundingValue, contactValue, backgroundValue, revenueValue } =
        action.payload.data;

      return {
        ...state,
        changingStatus: 'success',
        data: { businessValue, fundingValue, contactValue, backgroundValue, revenueValue }
      };
    }
    case 'SAVE_STEPPER_FAILED': {
      return { ...state, changingStatus: 'failed', data: action.payload };
    }
    case 'SAVE_STEPPER_NET_FAILED': {
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
