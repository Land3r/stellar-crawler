import { createContext, useMemo } from 'react';
import { setLoaderMode } from 'shared/components/Loader';
import { emptyFunction } from 'shared/helpers';
import NodeDetail, { type TNodeDetail } from './NodeDetail';
import { useNode, type TReturnUseNode } from './NodeDetail.hook';

export type TNodeDetailContext = {};

const NodeDetailContext = createContext<TNodeDetailContext>({});

type TNodeDetailEnhanced = {
  useNodeFn?: typeof useNode;
  setLoaderModeFn?: typeof setLoaderMode;
  NodeDetailCmpt?: typeof NodeDetail;
};

const NodeEnhanced = ({ useNodeFn = useNode, setLoaderModeFn = setLoaderMode, NodeDetailCmpt = NodeDetail, ...rest }: TNodeDetailEnhanced) => {
  const { anomaly, isLoading, node, refetch } = useNodeFn({});
  return (
    <NodeDetailContext.Provider>
      <NodeDetailCmpt
        {...rest}
        node={node}
        loaderMode={setLoaderModeFn({ isLoading })}
        anomaly={anomaly}
        refetch={refetch}
      />
    </NodeDetailContext.Provider>
  );
};

export default NodeEnhanced;
