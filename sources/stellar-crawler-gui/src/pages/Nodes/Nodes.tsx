import { Paging } from '@axa-fr/react-toolkit-all';
import Layout, { type TLayoutPage } from 'Layout';
import Loader, { type TLoader } from 'shared/components/Loader';
import Resilience from 'shared/components/Resilience';
import type { Tanomaly } from 'shared/types.d';
import type { TReturnUseNodes } from './Nodes.hook';
import { TABLE_HEADERS_NODES, TABLE_ITEMS_TYPE, TITLE, TITLE_BAR } from './constants';
import NodeTable from 'shared/components/NodeTable';

export type TNodes = TLayoutPage & {
  loaderMode: TLoader['mode'];
  refetch: TReturnUseNodes['refetch'];
  pagination: TReturnUseNodes['pagination'];
  onChangePaging: TReturnUseNodes['onChangePaging'];
  onChangeSorting: TReturnUseNodes['onChangeSorting'];
  sorting: TReturnUseNodes['sorting'];
  nodes: TReturnUseNodes['nodes'];
  anomaly: Tanomaly | null;
  title?: string;
  headers?: typeof TABLE_HEADERS_NODES;
};

const Nodes = ({
  loaderMode,
  refetch,
  anomaly,
  pagination,
  onChangePaging,
  nodes,
  onChangeSorting,
  sorting,
  titleBar = TITLE_BAR,
  title = TITLE,
  headers = TABLE_HEADERS_NODES,
}: TNodes) => (
  <Layout propsTitle={{ title: titleBar, backHome: true }}>
    <h2 className="af-title--content">{title}</h2>
    <Loader mode={loaderMode}>
      <Resilience anomaly={anomaly} refetch={refetch as React.MouseEventHandler<HTMLButtonElement>}>
        <NodeTable title={title} items={nodes} itemsType={TABLE_ITEMS_TYPE} headers={headers} onSort={onChangeSorting} sorting={sorting}>
        </NodeTable>
        <Paging {...pagination} onChange={onChangePaging} id="paging" />
      </Resilience>
    </Loader>
  </Layout>
);

export default Nodes;
