import { FC } from 'react';

interface LayoutProps {
 children: React.ReactNode;
}

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
