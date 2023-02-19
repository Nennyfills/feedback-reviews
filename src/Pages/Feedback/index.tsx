import { useForm } from 'react-hook-form';
import { Button, Card, Input, Rating, TextArea } from 'Components';
import feedBackOptions from 'utils/yupFormValidation';

import { useState } from 'react';
import { postChartRates, postFeedback } from 'Redux/feedback';
import { useAppDispatch, useAppSelector } from 'Redux/hooks';
import { useNavigate } from 'react-router-dom';

import { updateChartRates } from 'Helpers';
import { toast } from 'react-toastify';
import { CommentType } from 'Components/Comments';


/**
 * The Feedback component.
 * @Feedback view
 * @returns JSX.Element
 */
const Feedback = () => {
 const dispatch = useAppDispatch();
 const navigate = useNavigate();

 const { totalChartRates } = useAppSelector(({ Feedback }) => ({
  Feedback,
  totalChartRates: Feedback?.totalChartRates || {},
 }));
 const [allRates] = useState<any>(totalChartRates);

 const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
 } = useForm<CommentType>(feedBackOptions);

 const submitForm = (data: CommentType) => {
  dispatch(postFeedback(data));
  dispatch(postChartRates(updateChartRates(allRates, data.rate)));
  toast.success('Feedback saved successfully');
  reset();
  navigate('feedback-reviews');
 };

 return (
  <form
   onSubmit={handleSubmit(submitForm)}
   className="feedback"
   data-testid="feedback"
  >
   <Card className="feedback__card">
    <h5>Feedback Form</h5>
    <div className="feedback__card__wrapper">
     <div className="feedback__card__wrapper__left">
      <Input
       register={register('name')}
       placeholder="Name"
       error={errors.name?.message}
      />
      <Input
       register={{ ...register('email') }}
       placeholder="Email"
       error={errors.email?.message}
      />
      <Rating register={register('rate')} error={errors.rate?.message} />
     </div>
     <div className="feedback__card__wrapper__right">
      <TextArea
       register={{ ...register('comment') }}
       placeholder="Comment"
       error={errors.comment?.message}
       rows={8}
      />
     </div>
    </div>
    <Button className="feedback__card__button">Submit</Button>
   </Card>
  </form>
 );
};

export default Feedback;
