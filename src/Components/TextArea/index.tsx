import { Cancel } from 'Assets/Svg';
import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextAreaProps {
 error: string | undefined;
 rows: number;
 placeholder: string;
 register: UseFormRegisterReturn;
}

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
    {error?.length && <Cancel className="textarea-container__wrapper__icon" />}
   </div>
   <p className="error--text" data-testid="error">
    {error}
   </p>
  </div>
 );
};

export default TextArea;
