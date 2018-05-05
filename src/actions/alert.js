export const showAlert = ({ message, status }) => ({
  type: 'SHOW_ALERT',
  message,
  status,
});

export const hideAlert = () => ({
  type: 'HIDE_ALERT',
});
