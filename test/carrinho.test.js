import Carrinho from '../carrinho.js';
import Item from '../item.js';

describe('Testes do carrinho', () => {
  it('Deve inicializar vazio', () => {
    const carrinho = new Carrinho();

    expect(carrinho.frete).toBeNull();
    expect(carrinho.total).toBeNull();
    expect(carrinho.subtotal).toBeNull();
  });

  it('Deve ter a propriedade "total" na inicialização', () => {
    const item = new Item('Banana', 2, 5);
    const item2 = new Item('Maçã', 0.5, 1);

    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);

    expect(carrinho.itens).toContain(item);
    expect(carrinho.itens).toContain(item2);
  });

  it('Deve adicionar o frete', () => {
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(5);

    expect(carrinho.frete).toBe(5);
  });

  it('Deve calcular o total', () => {
    const carrinho = new Carrinho();
    const item = new Item('Morango', 4.2, 2);
    const item2 = new Item('Laranja', 1, 2);

    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(5);
    const total = carrinho.calculaTotal();

    expect(total).toBeCloseTo(15.4);
    expect(carrinho).toHaveProperty('total');
  });

  it('Deve lançar erro ao finalizar compra com carrinho vazio', () => {
    function englobaErrorCarinho() {
      const carrinho = new Carrinho();
      carrinho.finalizaCompra();
    }

    expect(englobaErrorCarinho).toThrowError('Carrinho de compras vazio');
  })
});