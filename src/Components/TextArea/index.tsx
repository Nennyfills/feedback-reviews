import { Cancel } from 'Assets/Svg';
import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

 /** Declaring TextArea component props type */
 export interface TextAreaProps {
 /** error string or undefined type syntax that takes error message */
 error: string | undefined;
 /** rows number type syntax that takes textarea row */
 rows: number;
 /** placeholder string type syntax that takes textarea placeholder */
 placeholder: string;
 /** register function type syntax that takes useForm register */
 register: UseFormRegisterReturn;
}

/**
 * The textarea component.
 * @TextArea reuseable textarea
 * @param {*} error - error will accept parameter as string | undefined.
 * @param {*} rows - rows will accept parameter as number.
 * @param {*} placeholder - placeholder will accept parameter as string.
 * @param {*} register - register will accept parameter as object.
 * @returns JSX.Element
 */
const TextArea: FC<TextAreaProps> = ({
 error,
 rows,
 placeholder,
 register,
}: TextAreaProps) => {
 return (
  <div className="textarea-container" data-testid="textarea-content">
   <div
    className={`textarea-container__wrapper  ${
     error?.length ? 'textarea-container__wrapper--danger' : ''
    }`}
   >
    <textarea
     data-testid="reuseable-textarea"
     className="textarea-container__wrapper__textarea colums"
     rows={rows}
     placeholder={placeholder}
     {...register}
    />
    {error?.length? <Cancel className="textarea-container__wrapper__icon" />: ''}
   </div>
   <p className="error--text" data-testid="error">
    {error}
   </p>
  </div>
 );
};

export default TextArea;
