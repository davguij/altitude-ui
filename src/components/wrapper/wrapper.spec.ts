import { newSpecPage } from '@stencil/core/testing';
import { Wrapper } from './wrapper';

describe('aui-wrapper', () => {
  it('should render', async () => {
    const { root } = await newSpecPage({
      components: [Wrapper],
      html: `<alti-wrapper></alti-wrapper>`,
    });

    expect(root).toEqualHtml(`
      <alti-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </alti-wrapper>
    `);
  });
});
