import { newE2EPage } from '@stencil/core/testing';

describe('c-logout-btn', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<c-logout-btn></c-logout-btn>');
    const element = await page.find('c-logout-btn');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
