import { Cancel } from 'Assets/Svg';
import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
 error: string | undefined;
 placeholder: string;
 register: UseFormRegisterReturn;
}

const Input: FC<InputProps> = ({
 error,
 placeholder,
 register,
}: InputProps) => {
 return (
  <div className="input-container">
   <div
    className={`input-container__wrapper  ${
     error?.length ? 'input-container__wrapper--danger' : ''
    }`}
   >
    <input
     data-testid="reuseable-input"
     className="input-container__wrapper__input"
     placeholder={placeholder}
     {...register}
    />
    {error?.length && <Cancel className="input-container__wrapper__icon" />}
   </div>
   <p className="error--text" data-testid="error">
    {error}
   </p>
  </div>
 );
};

export default Input;
