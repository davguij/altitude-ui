import { Component, h } from '@stencil/core';

@Component({
  tag: 'alti-wrapper',
  styleUrl: 'wrapper.css',
  shadow: true,
})
export class Wrapper {
  render() {
    return <slot />;
  }
}
