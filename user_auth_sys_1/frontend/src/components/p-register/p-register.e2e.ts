import { newE2EPage } from '@stencil/core/testing';

describe('p-register', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<p-register></p-register>');
    const element = await page.find('p-register');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
