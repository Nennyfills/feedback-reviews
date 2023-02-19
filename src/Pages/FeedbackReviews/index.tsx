import { Button, Card, Comments, ReviewChart } from 'Components';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'Redux/hooks';

/**
 * The FeedbackReviews component.
 * @FeedbackReviews view
 * @returns JSX.Element
 */
const FeedbackReviews = () => {
 const { totalChartRates, reviews } = useAppSelector(({ Feedback }) => ({
  Feedback,
  totalChartRates: Feedback?.totalChartRates || {},
  reviews: Feedback?.reviews || [],
 }));

 const navigate = useNavigate();

 return (
  <div className="feedback-reviews" data-testid="feedback-reviews">
   <Card className="feedback-reviews__card">
    <div className="feedback-reviews__card__header">
     <h5 data-testid="feedback-reviews-title">Feedback Results</h5>
     <Button
      className="feedback-reviews__card__button"
      onClick={() => navigate('/')}
     >
      Go Back
     </Button>
    </div>
    <div
     className="feedback-reviews__card__wrapper"
     data-testid="feedback-reviews-comment"
    >
     <ReviewChart chartData={Object.values(totalChartRates)} />
     <Comments comments={reviews} />
    </div>
   </Card>
  </div>
 );
};

export default FeedbackReviews;
