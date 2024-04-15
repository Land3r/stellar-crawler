import { createContext, useMemo } from 'react';
import { setLoaderMode } from 'shared/components/Loader';
import { emptyFunction } from 'shared/helpers';
import Nodes, { type TNodes } from './Nodes';
import { useNodes, type TReturnUseNodes } from './Nodes.hook';
import { INITIAL_STATE_SORTING } from './constants';

export type TNodesContext = {
  onChangeSorting: TReturnUseNodes['onChangeSorting'];
  sorting: TReturnUseNodes['sorting'];
};

const NodesContext = createContext<TNodesContext>({
  onChangeSorting: emptyFunction,
  sorting: INITIAL_STATE_SORTING,
});

type TNodesEnhanced = Pick<TNodes, 'headers'> & {
  useNodesFn?: typeof useNodes;
  setLoaderModeFn?: typeof setLoaderMode;
  NodesCmpt?: typeof Nodes;
};

const NodesEnhanced = ({ useNodesFn = useNodes, setLoaderModeFn = setLoaderMode, NodesCmpt = Nodes, ...rest }: TNodesEnhanced) => {
  const { anomaly, isLoading, nodes, pagination, onChangeSorting, sorting, onChangePaging, refetch } = useNodesFn({});
  const value = useMemo(() => ({ onChangeSorting, sorting }), [onChangeSorting, sorting]);
  return (
    <NodesContext.Provider value={value}>
      <NodesCmpt
        {...rest}
        nodes={nodes}
        loaderMode={setLoaderModeFn({ isLoading })}
        anomaly={anomaly}
        pagination={pagination}
        onChangePaging={onChangePaging}
        onChangeSorting={onChangeSorting}
        sorting={sorting}
        refetch={refetch}
      />
    </NodesContext.Provider>
  );
};

export default NodesEnhanced;
