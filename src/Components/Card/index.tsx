import { FC } from 'react';

 /** Declaring Card component props type */
interface CardProps {
 /** children accepts everything React can render */
 children: React.ReactNode;
 /** className type of string,
  * use this to pass in your custom styles to the button component */
 className?: string;
}

/**
 * The card component.
 * @Card reuseable card
 * @param {*} className - className will accept parameter as string.
 * @param {*} children - children will accept parameter as JSX.Element.
 * @returns JSX.Element
 */
const Card: FC<CardProps> = ({ children, className }: CardProps) => {
 return (
  <div className={`card ${className}`} data-testid="reuseable-card">
   {children}
  </div>
 );
};

export default Card;
