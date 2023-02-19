import { Cancel } from 'Assets/Svg';
import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

/** Declaring Input component props type */
export interface InputProps {
 /** error string or undefined type syntax that takes error message */
 error: string | undefined;
 /** placeholder string type syntax that takes input placeholder */
 placeholder: string;
 /** register function type syntax that takes useForm register */
 register: UseFormRegisterReturn;
}

/**
 * The Input component.
 * @Input reuseable input
 * @param {*} error - error will accept parameter as string | undefined
 * @param {*} placeholder - placeholder will accept parameter as string.
 * @param {*} register - register will accept parameter as object.
 * @returns JSX.Element
 */
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
    {error?.length ? <Cancel className="input-container__wrapper__icon" /> : ''}
   </div>
   <p className="error--text" data-testid="error">
    {error}
   </p>
  </div>
 );
};

export default Input;
