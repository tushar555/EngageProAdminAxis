import { ProductsManagementModule } from './products-management.module';

describe('ProductsManagementModule', () => {
  let productsManagementModule: ProductsManagementModule;

  beforeEach(() => {
    productsManagementModule = new ProductsManagementModule();
  });

  it('should create an instance', () => {
    expect(productsManagementModule).toBeTruthy();
  });
});
