import { FC } from 'react';

interface ButtonProps {
 onClick?: React.MouseEventHandler;
 children: React.ReactNode;
 className?: string;
}

const Button: FC<ButtonProps> = ({
 children,
 className,
 onClick,
}: ButtonProps) => {
 return (
  <div className={`button-container ${className}`} data-testid="button">
   <button
    className="button-container__button"
    data-testid="reuseable-button"
    onClick={onClick}
   >
    {children}
   </button>
  </div>
 );
};

export default Button;
