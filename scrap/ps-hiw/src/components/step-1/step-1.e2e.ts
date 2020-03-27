import { newE2EPage } from '@stencil/core/testing';

describe('step-1', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<step-1></step-1>');
    const element = await page.find('step-1');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
