describe('Cart Test', () => {

  // Trước mỗi test, truy cập trang login và đăng nhập với tài khoản hợp lệ
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

   // Kiểm tra chức năng thêm sản phẩm vào giỏ hàng
  it('Should add a product to the cart', () => {
    cy.get('.inventory_item').first().find('button').contains('Add to cart').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
  });

  // Kiểm tra chức năng sắp xếp sản phẩm theo giá từ thấp đến cao
  it('Should sort products by price low to high', () => {
    cy.get('.product_sort_container').select('lohi');
    cy.get('.inventory_item_price').first().should('have.text', '$7.99');
  });

   // Kiểm tra chức năng xóa sản phẩm khỏi giỏ hàng
  it('Should remove a product from the cart', () => {
    cy.get('.inventory_item').first().find('button').contains('Add to cart').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    cy.get('.inventory_item').first().find('button').contains('Remove').click();
    cy.get('.shopping_cart_badge').should('not.exist');
  });

  // Kiểm tra quy trình thanh toán 
  it('Should complete checkout step one', () => {
    cy.get('.inventory_item').first().find('button').contains('Add to cart').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('John');
    cy.get('[data-test="lastName"]').type('Doe');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();
    cy.url().should('include', '/checkout-step-two.html');
  });
});