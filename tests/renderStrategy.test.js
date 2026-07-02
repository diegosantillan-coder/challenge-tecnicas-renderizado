import { renderStrategy } from '../src/utils/renderStrategy';

describe('renderStrategy', () => {
  test('debe retornar una lista de productos', () => {
    const products = renderStrategy();
    expect(products.length).toBeGreaterThan(0);
  });
});