import { newE2EPage } from '@stencil/core/testing';

describe('alti-wrapper', () => {
  it('should render', async () => {
    const page = await newE2EPage();
    await page.setContent(`<alti-wrapper></alti-wrapper>`);
    const el = await page.find('alti-wrapper');
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  it('should render its children', async () => {
    const page = await newE2EPage();
    await page.setContent(`<alti-wrapper><p class="text">Isn't this great?</p></alti-wrapper>`);
    const el = await page.find('.text');
    expect(el).not.toBeNull();
    expect(el.textContent).toBe("Isn't this great?");
  });
});
