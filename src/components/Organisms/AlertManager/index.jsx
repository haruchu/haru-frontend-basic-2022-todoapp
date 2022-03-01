import React, { useEffect, useState } from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert";

const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();
  const [error, setError] = useState(true);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        console.log(AlertHandlerContext.errorText);
        AlertHandlerContext.closeAlert();
        setError(false);
      }, 5000);
    }
    setError(true);
  }, [AlertHandlerContext]);

  return (
    <Alert
      visible={AlertHandlerContext.visible}
      errorText={AlertHandlerContext.errorText}
    />
  );
};
export default AlertManager;