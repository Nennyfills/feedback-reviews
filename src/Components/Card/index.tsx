import { FC } from 'react';

interface CardProps {
 children: React.ReactNode;
 className?: string;
}

const Card: FC<CardProps> = ({ children, className }: CardProps) => {
 return (
  <div className={`card ${className}`} data-testid="reuseable-card">
   {children}
  </div>
 );
};

export default Card;
