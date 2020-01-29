import { newE2EPage } from '@stencil/core/testing';

describe('p-catchall', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<p-catchall></p-catchall>');
    const element = await page.find('p-catchall');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
