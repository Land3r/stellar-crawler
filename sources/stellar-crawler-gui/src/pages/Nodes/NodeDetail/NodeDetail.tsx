import Layout, { type TLayoutPage } from 'Layout';
import { TITLE, TITLE_BAR } from './constants';

export type TNodeDetail = TLayoutPage;

const Home = ({ titleBar = TITLE_BAR, title = TITLE('123') }: TNodeDetail) => (
  <Layout propsTitle={{ title: titleBar }}>
    <h2 className="af-title--content">{title}</h2>
  </Layout>
);

export default Home;
