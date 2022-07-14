import { showMessage } from "react-native-flash-message";

const showError = (message) => {
  showMessage({
    type: "danger",
    icon: "danger",
    message,
  });
};
const showSuccess = (message) => {
  showMessage({
    type: "Success",
    icon: "Success",
    message,
  });
};

export { showError, showSuccess };
