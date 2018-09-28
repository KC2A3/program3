const main = require('../main/main');

describe('main()', () => {

    it('should calculate the sum', () => {
      expect(main.newway([1,2,3])).toBe(6);
      expect(main.newway([1,0,2])).toBe(3);
    });

});
