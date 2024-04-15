import { useQuery } from '@tanstack/react-query';
import { useCallback, useState, type Dispatch, type SetStateAction } from 'react';
import { setDisplay, type Torder } from 'shared/components/Table';
import { setAnomalyEmptyItem, setDate } from 'shared/helpers';
import type { Tanomaly } from 'shared/types.d';
import { DEFAULT_STATE_VALUE, SERVICE_NAME } from './constants';

export type TNodeDetailData = Record<string, string>;

export type TresponseBody = {
  data?: TNodeDetailData;
};

export const computeInfos = (data: TNodeDetailData, setDateFn = setDate, setDisplayFn = setDisplay) => ({
    ...data
})

type TcomputeSuccess = {
  setAnomalyEmptyItemFn?: typeof setAnomalyEmptyItem;
  computeInfosFn?: typeof computeInfos;
  responseBody: TresponseBody;
};

export const computeSuccess = ({
  responseBody,
  setAnomalyEmptyItemFn = setAnomalyEmptyItem,
  computeInfosFn = computeInfos,
}: TcomputeSuccess) => ({
  anomaly: setAnomalyEmptyItemFn(responseBody?.data),
  [SERVICE_NAME]: {
    data: computeInfosFn(responseBody?.data ?? {}),
  },
});

type TsetState<Tstate> = Dispatch<SetStateAction<Tstate>>;

export const computeDataQuery = (data: { responseBody: TcomputeSuccess['responseBody'] } = { responseBody: {} }, computeSuccessFn = computeSuccess) =>
  computeSuccessFn({ ...data });

type TuseNode = {
  computeDataQueryFn?: typeof computeDataQuery;
  useQueryFn?: typeof useQuery;
};

export const useNode = ({
  computeDataQueryFn = computeDataQuery,
  useQueryFn = useQuery,
}: TuseNode) => {

  const { data, isFetching, error, refetch } = useQueryFn({
    queryKey: [`node?id=${data.id})}`],
    select: computeDataQueryFn,
  });

  return {
    node: data?.node?.data ?? DEFAULT_STATE_VALUE.data,
    anomaly: (error || data?.anomaly) as Tanomaly | null,
    isLoading: isFetching,
    refetch,
  };
};

export type TReturnUseNode = ReturnType<typeof useNode>;
