import { render } from '@testing-library/react';
import IndexPage from './page';

// eslint-disable-next-line react/display-name
jest.mock('next/image', () => () => <div />);

describe('IndexPage', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(await IndexPage());
    expect(baseElement).toBeTruthy();
  });
});
