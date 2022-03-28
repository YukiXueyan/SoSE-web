// import { withRouter } from 'umi';
import { withRouter } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import QueueAnim from 'rc-queue-anim';

export default withRouter(({ location, children }) => (
  <QueueAnim
    animConfig={[
      { opacity: [1, 0], translateY: [0, 50] },
      { opacity: [1, 0], translateY: [0, -50] },
    ]}
    duration={1000}
  >
    <CSSTransition key={location.pathname} className="fade" timeout={300}>
      {children}
    </CSSTransition>
  </QueueAnim>
));
