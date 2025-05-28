describe('Login Test', () => {

  // Kiểm thử: Đăng nhập thành công với thông tin hợp lệ
  it('Should login successfully with valid credentials', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
  });

});