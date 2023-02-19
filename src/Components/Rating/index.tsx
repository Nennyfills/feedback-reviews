import { FC, useState, MouseEvent } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

/** Declaring Rating component props type */
export interface RatingProps {
 /** error string or undefined type syntax that takes error message */
 error: string | undefined;
 /** register function type syntax that takes useForm register */
 register?: UseFormRegisterReturn;
}

/**
 * The rating component.
 * @Rating reuseable rating
 * @param {*} error - error will accept parameter as string | undefined
 * @param {*} register - register will accept parameter as object.
 * @returns JSX.Element
 */
const Rating: FC<RatingProps> = ({ error, register }: RatingProps) => {
 const [selection, setSelection] = useState<number>(0);
 const [rating, setRating] = useState<number>(0);

 /**
  * The hoverOver function.
  * @param {*} event - event will accept parameter as mouse event or null.
  * @hoverOver update state on mouseOver
  */
 const hoverOver = (event: MouseEvent | null) => {
  const target = event?.target as HTMLInputElement;
  let starId: number = 0;

  if (target && target.getAttribute('star-id')) {
   starId = Number(target.getAttribute('star-id'));
  }
  setSelection(starId);
 };

 /**
  * The handleOnClick function.
  * @param {*} event - event will accept parameter as mouse event or null.
  * @handleOnClick update state on click
  */
 const handleOnClick = (event: MouseEvent<HTMLInputElement>) => {
  const target = event.target as HTMLInputElement;
  if (target.getAttribute('star-id')) {
   setRating(Number(target.getAttribute('star-id')));
  }
 };

 return (
  <div className="rating" data-testid="reusable-rating">
   <div
    role="button"
    data-testid="rating-click"
    onMouseOver={hoverOver}
    onMouseOut={() => hoverOver(null)}
    onClick={handleOnClick}
    className={`rating__wrapper  ${
     error?.length ? 'rating__wrapper--danger' : ''
    }`}
   >
    {Array.from({ length: 5 }, (_, index) => {
     const marked: boolean = selection ? selection > index : rating > index;

     return (
      <label
       key={`rate${index}`}
       className="rating__wrapper__label"
       htmlFor={`rate${index}`}
      >
       <span star-id={index + 1} data-testid={`rating-icon-${index + 1}`}>
        {marked ? '\u2605' : '\u2606'}
       </span>
       <input
        data-testid={`rating-input-${index + 1}`}
        type="radio"
        {...register}
        value={index + 1}
        id={`rate${index}`}
        className="rating__wrapper__input"
       />
      </label>
     );
    })}
   </div>
   <p className="error--text" data-testid="error">
    {error}
   </p>
  </div>
 );
};
export default Rating;
