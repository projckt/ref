import { newE2EPage } from '@stencil/core/testing';

describe('p-dashboard', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<p-dashboard></p-dashboard>');
    const element = await page.find('p-dashboard');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
