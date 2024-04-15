import { render } from '@testing-library/react';
import Icon from '..';

const props = {
  icon: 'date',
} as const;

describe('<Icon/>', () => {
  it('Should render Icon', () => {
    const { asFragment } = render(<Icon {...props} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <svg
          aria-labelledby="title"
          class="af-icon-svg"
          role="img"
          viewBox="0 0 100 100"
        >
          <title>
            date
          </title>
          <path
            d="M88.109 100.061h-75.542c-3.793 0-6.867-3.321-6.867-7.113v-75.543c0-3.793 3.075-6.868 6.867-6.868h6.868v3.434c0 5.689 4.612 10.3 10.301 10.3s10.301-4.611 10.301-10.3v-3.434h20.602v3.434c0 5.689 4.612 10.3 10.301 10.3s10.301-4.611 10.301-10.3v-3.434h6.868c3.793 0 6.867 3.075 6.867 6.868v75.542c0 3.792-3.075 7.114-6.867 7.114zM88.109 34.819h-75.542v58.128h75.542v-58.128zM29.736 51.988h-10.302v-10.548h10.301l0.001 10.548zM29.736 69.156h-10.302v-10.547h10.301l0.001 10.547zM29.736 86.324h-10.302v-10.546h10.301l0.001 10.546zM46.904 51.988h-10.301v-10.548h10.301v10.548zM46.904 69.156h-10.301v-10.547h10.301v10.547zM46.904 86.079h-10.301v-10.3h10.301v10.3zM64.073 51.988h-10.301v-10.548h10.301v10.548zM64.073 69.156h-10.301v-10.547h10.301v10.547zM64.073 86.324h-10.301v-10.546h10.301v10.546zM81.241 51.988h-10.301v-10.548h10.301v10.548zM81.241 69.156h-10.301v-10.547h10.301v10.547zM81.241 86.324h-10.301v-10.546h10.301v10.546zM70.833 20.838c-3.733 0-6.76-3.026-6.76-6.76v-7.081c0-3.733 3.027-6.761 6.76-6.761 3.733 0 6.76 3.028 6.76 6.761v7.081c0 3.734-3.027 6.76-6.76 6.76zM29.628 20.838c-3.734 0-6.76-3.026-6.76-6.76v-7.081c0-3.733 3.026-6.761 6.76-6.761 3.733 0 6.76 3.028 6.76 6.761v7.081c0 3.734-3.026 6.76-6.76 6.76z"
          />
        </svg>
      </DocumentFragment>
    `);
  });
});
