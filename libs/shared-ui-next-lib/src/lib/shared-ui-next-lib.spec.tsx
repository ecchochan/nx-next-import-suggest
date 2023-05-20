import { render } from '@testing-library/react';

import SharedUiNextLib from './shared-ui-next-lib';

describe('SharedUiNextLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiNextLib />);
    expect(baseElement).toBeTruthy();
  });
});
