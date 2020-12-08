import RecentMessages from '../components/RecentMessages';

import { useMainPageStyles } from '../styles/muiStyles';

const Main = () => {
  const classes = useMainPageStyles();

  return (
    <div className={classes.root}>
      <div className={classes.recentMsgPanel}>
        <RecentMessages />
      </div>
    </div>
  );
};

export default Main;
