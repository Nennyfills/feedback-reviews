import { FC } from 'react';

 /** Declaring Layout component props type */
interface LayoutProps {
 /** children accepts everything React can render */
 children: React.ReactNode;
}

/**
 * The layout component.
 * @Layout reuseable layout
 * @param {*} children - children will accept parameter as JSX.Element.
 * @returns JSX.Element
 */
const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
 return (
  <section className="layout" data-testid="layout">
   <div className="layout__section">
    <div className="layout__section__content">{children}</div>
   </div>
  </section>
 );
};
export default Layout;
