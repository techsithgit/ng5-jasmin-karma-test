

describe('hellotest', ()=>{

  let expected = '';
  let notExpected = '';
  let expectMatch = null;

  // runs before each test
  beforeEach(()=> {
    expected = 'hellotest';
    notExpected = 'hellotest123';
    expectMatch = new RegExp(/^hello/);
  });

  // runs after each test
  afterEach(()=>{
    expected = '';
    notExpected = '';
  });

  it('checks if hellotest is hellotest',
    ()=> expect('hellotest').toBe(expected)
  );
  it('checks if hellotest is not hellotest',
    ()=> expect('hellotest').not.toBe(notExpected)
  );
  it('checks if hellotest starts with hello',
    ()=> expect('hellotest').toMatch(expectMatch)
  );
});
