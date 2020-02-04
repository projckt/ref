import { newE2EPage } from '@stencil/core/testing';

describe('p-login', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<p-login></p-login>');
    const element = await page.find('p-login');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
