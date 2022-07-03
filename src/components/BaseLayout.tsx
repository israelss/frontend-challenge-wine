import { PropsWithChildren } from 'react';
import Header from './Header';

const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default BaseLayout
