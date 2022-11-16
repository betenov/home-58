import React from "react";

interface Props extends React.PropsWithChildren{
  type:string;
  onDismiss?:React.MouseEventHandler;
  showAlert?:boolean;
}

const Alert:React.FC<Props> = ({type,onDismiss,showAlert,children}) => {

  return (
    <div>
      <div className={type} role="alert"  style={{display: showAlert? 'block': 'none'} }>
        {children}
      </div>
    </div>
  );
};

export default Alert;