import Layout, { type TLayoutPage } from 'Layout';
import { TITLE, TITLE_BAR } from './constants';

export type TSettings = TLayoutPage;

const Settings = ({ titleBar = TITLE_BAR, title = TITLE }: TSettings) => (
  <Layout propsTitle={{ title: titleBar }}>
    <h2 className="af-title--content">{title}</h2>
  </Layout>
);

export default Settings;
