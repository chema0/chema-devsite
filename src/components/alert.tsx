import { ReactElement } from "react";

type AlertProps = {
  children: ReactElement;
};

const Alert = (props: AlertProps) => {
  return (
    <div className="w-full h-20 max-h-35 bg-gray-800 border border-gray-500 rounded">
      {props.children}
    </div>
  );
};

export { Alert };
