// import NotFoundPage from '../not-found';
import { APP_NAME } from '../../lib/constants/index';

const delay = (ms: 2000) => new Promise(resolve => setTimeout(resolve, ms));
const HomePage = async () => {
  await delay(2000);
  return <div>{APP_NAME}</div>;
};

export default HomePage;
