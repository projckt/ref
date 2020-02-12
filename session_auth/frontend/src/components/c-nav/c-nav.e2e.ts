import { newE2EPage } from '@stencil/core/testing';

describe('c-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<c-nav></c-nav>');
    const element = await page.find('c-nav');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
