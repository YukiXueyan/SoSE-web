// import { withRouter } from 'umi';
import { withRouter } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default withRouter(({ location, children }) => (
  <TransitionGroup>
    <CSSTransition key={location.pathname} className="fade" timeout={300}>
      {children}
    </CSSTransition>
  </TransitionGroup>
));
