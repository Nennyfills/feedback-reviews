import { FC, useState, MouseEvent } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface RatingProps {
 error: string | undefined;
 register?: UseFormRegisterReturn;
}

const Rating: FC<RatingProps> = ({ error, register }: RatingProps) => {
 const [selection, setSelection] = useState<number>(0);
 const [rating, setRating] = useState<number>(0);

 const hoverOver = (event: MouseEvent | null) => {
  const target = event?.target as HTMLInputElement;
  let starId: number = 0;

  if (target && target.getAttribute('star-id')) {
   starId = Number(target.getAttribute('star-id'));
  }
  setSelection(starId);
 };

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
       <span
      //   role="button"
        star-id={index + 1}
        data-testid={`rating-icon-${index + 1}`}
       >
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
   <p className="error--text" data-testid="error">{error}</p>
  </div>
 );
};
export default Rating;
