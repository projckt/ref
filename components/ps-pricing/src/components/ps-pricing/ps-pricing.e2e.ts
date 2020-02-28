import { newE2EPage } from '@stencil/core/testing';

describe('ps-pricing', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ps-pricing></ps-pricing>');
    const element = await page.find('ps-pricing');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
