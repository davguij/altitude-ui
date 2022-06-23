import { Component, h } from '@stencil/core';

@Component({
  tag: 'aui-wrapper',
  styleUrl: 'wrapper.css',
  shadow: true,
})
export class Wrapper {
  render() {
    return <slot />;
  }
}
