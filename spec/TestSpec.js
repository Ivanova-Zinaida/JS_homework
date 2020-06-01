describe('', function() {
    it('Должен вернуть число 2 в функции  y = 1/x + sqrt(x)', function() {
        expect(calc(1)).toEqual(2);
    });
  });
describe('calc', function() {
    it('проверка на получение квадратного корня из отрицательного числа, вернула  NaN', function() {
        expect(calc(-1)).toBeTruthy();
  });
});