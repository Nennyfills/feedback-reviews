import { FC } from 'react';

export type CommentType = {
 email: string;
 name: string;
 comment: string;
 rate: number;
};
interface CommentsProps {
 comments: CommentType[];
}
const Comments: FC<CommentsProps> = ({ comments }: CommentsProps) => {
 return (
  <div className="comments" data-testid="reuseable-comments">
   <h5 className="comments__latest">Lates Comment</h5>
   <div className="comments__container">
    {comments.length ? (
     comments.map((value, index) => (
      <div className="comments__wrapper" key={`${value.email}-${index}`}>
       <p className="comments__wrapper__email">{value.email}</p>
       {/* <p className="comments__wrapper__name">{value.name}</p> */}
       <div className="comments__wrapper__comment">
        <p>{value.comment}</p>
       </div>
       <div className="comments__wrapper__border" />
      </div>
     ))
    ) : (
     <p className="comments__wrapper__no-comment">No Comment Available</p>
    )}
   </div>
  </div>
 );
};

export default Comments;
