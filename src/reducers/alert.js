const initialState = {
  message: '',
  status: 'ok',
  visible: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SHOW_ALERT':
      return {
        ...state,
        message: action.message,
        status: action.status ? action.status : 'critical',
        visible: true,
      };
    case 'HIDE_ALERT':
      return {
        ...state,
        message: '',
        status: 'ok',
        visible: false,
      };
    default:
      return state;
  }
}
