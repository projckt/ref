import { newE2EPage } from '@stencil/core/testing';

describe('p-settings', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<p-settings></p-settings>');
    const element = await page.find('p-settings');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
