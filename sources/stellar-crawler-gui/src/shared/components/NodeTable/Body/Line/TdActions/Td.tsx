import { HelpInfo, Table as TableTk } from '@axa-fr/react-toolkit-all';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import withClassNameModifier, { type TwithClassNameModifier } from 'shared/hoc/WithClassNameModifier';

export type TTdNodeActionsContainer = Omit<ComponentPropsWithoutRef<typeof HelpInfo>, 'children' | 'content'> & {
  children?: ReactNode;
  label?: ReactNode;
  hover?: ReactNode;
  TdCmpt?: typeof TableTk.Td;
  HelpHoverCmpt?: typeof HelpInfo;
} & TwithClassNameModifier;

const TdNodeActionsContainer = withClassNameModifier(
  ({ children, label, hover, className, HelpHoverCmpt = HelpInfo, ...rest }: TTdNodeActionsContainer) => (
    <td {...rest} className={className}>
      <p>Some content</p>
      {/* <HelpHoverCmpt content={hover} classModifier="content">
        {label}
      </HelpHoverCmpt> */}
        {children}
    </td>
  ),
  { defaultClassName: 'af-table__cell' },
);

export default TdNodeActionsContainer;
