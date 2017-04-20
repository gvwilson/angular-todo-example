import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {

  let pipe;

  beforeEach(() => {
    pipe = new CapitalizePipe();
  });

  it('should capitalize a word', () => {
    expect(pipe.transform('foo')).toEqual('Foo');
  });
});
