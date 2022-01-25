import { ToMorsePipe } from './to-morse.pipe';

describe('ToMorsePipe', () => {
  it('create an instance', () => {
    const pipe = new ToMorsePipe();
    expect(pipe).toBeTruthy();
  });
});
