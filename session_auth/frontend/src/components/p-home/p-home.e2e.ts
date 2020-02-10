import { newE2EPage } from '@stencil/core/testing';

describe('p-home', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<p-home></p-home>');
    const element = await page.find('p-home');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
