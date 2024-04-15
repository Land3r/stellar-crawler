import { Table as TableTk, Text } from '@axa-fr/react-toolkit-all';
import { type ComponentPropsWithoutRef } from 'react';
import { type Tcol } from '../types.d';
import Td, { type TTdContainer } from './Td';
import TdNodeAction from './TdActions';
import { Link } from 'react-router-dom';


export type TLine = ComponentPropsWithoutRef<typeof TableTk.Tr> & {
  columns: (TTdContainer & Tcol & { keyCol: string })[];
};

const Line = ({ className, columns = [], classModifier = '', children }: TLine) => (
  <TableTk.Tr classModifier={classModifier} className={className}>
    <>
      <Td key={columns[0].keyCol}  {...columns[0]} />
      <Td key={columns[1].keyCol}  {...columns[1]} />
      <Td key={columns[2].keyCol}  {...columns[2]} />
      <Td key={columns[3].keyCol}  {...columns[3]} />
      <Td key='actions'>
        <Link to={`/nodes/${columns[0].label}`}>
          View
        </Link>
      </Td>
      {children}
    </>
  </TableTk.Tr>
);

export default Line;
