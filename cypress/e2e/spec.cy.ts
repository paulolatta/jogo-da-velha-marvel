describe('Teste completo', () => {
  it('Visitar página inicial do projeto', () => {
    cy.visit('/')
    cy.get('#test-iniciar').click()
    cy.wait(1000)
  });

  it('Visitar página de selecionar os jogadores, VITÓRIA DO X', () => {
    cy.visit('/gameplay')
    cy.get('#test-jogador1').type("3-D Man{Enter}")
    cy.wait(1000)
    cy.get('#test-jogador2').type("A-Bomb (HAS){enter}")
    cy.wait(2000);
    cy.get('#test-jogar').click()
    cy.wait(1000)

    cy.get('#column1').click()
    cy.wait(1000)
    cy.get('#column2').click()
    cy.wait(1000)
    cy.get('#column4').click()
    cy.wait(1000)
    cy.get('#column5').click()
    cy.wait(1000)
    cy.get('#column7').click()
    cy.wait(1000)
  });

  it('Visitar página de selecionar os jogadores, VITÓRIA DO O', () => {
    cy.visit('/gameplay')
    cy.get('#test-jogador1').type("3-D Man{Enter}")
    cy.wait(1000)
    cy.get('#test-jogador2').type("A-Bomb (HAS){enter}")
    cy.wait(2000);
    cy.get('#test-jogar').click()
    cy.wait(1000)

    cy.get('#column1').click()
    cy.wait(1000)
    cy.get('#column2').click()
    cy.wait(1000)
    cy.get('#column3').click()
    cy.wait(1000)
    cy.get('#column5').click()
    cy.wait(1000)
    cy.get('#column6').click()
    cy.wait(1000)
    cy.get('#column8').click()
    cy.wait(1000)
  });

  it('Visitar página de selecionar os jogadores, VELHA', () => {
    cy.visit('/gameplay')
    cy.get('#test-jogador1').type("3-D Man{Enter}")
    cy.wait(1000)
    cy.get('#test-jogador2').type("A-Bomb (HAS){enter}")
    cy.wait(2000);
    cy.get('#test-jogar').click()
    cy.wait(1000)

    cy.get('#column1').click()
    cy.wait(1000)
    cy.get('#column2').click()
    cy.wait(1000)
    cy.get('#column5').click()
    cy.wait(1000)
    cy.get('#column3').click()
    cy.wait(1000)
    cy.get('#column7').click()
    cy.wait(1000)
    cy.get('#column4').click()
    cy.wait(1000)
    cy.get('#column8').click()
    cy.wait(1000)
    cy.get('#column9').click()
    cy.wait(1000)
    cy.get('#column6').click()
  });

  it('Visitar página de selecionar os jogadores, reiniciar até melhor de 3 pontos', () => {
    cy.visit('/gameplay')
    cy.get('#test-jogador1').type("3-D Man{Enter}")
    cy.wait(1000)
    cy.get('#test-jogador2').type("A-Bomb (HAS){enter}")
    cy.wait(2000);
    cy.get('#test-jogar').click()
    cy.wait(1000)

    cy.get('#column1').click()
    cy.wait(1000)
    cy.get('#column5').click()
    cy.wait(1000)
    cy.get('#column9').click()
    cy.wait(1000)
    cy.get('#column3').click()
    cy.wait(1000)
    cy.get('#column7').click()
    cy.wait(1000)
    cy.get('#column4').click()
    cy.wait(1000)
    cy.get('#column8').click()
    cy.wait(1000)
    cy.get('#test-reiniciar').click()

    cy.get('#column1').click()
    cy.wait(1000)
    cy.get('#column9').click()
    cy.wait(1000)
    cy.get('#column5').click()
    cy.wait(1000)
    cy.get('#column3').click()
    cy.wait(1000)
    cy.get('#column7').click()
    cy.wait(1000)
    cy.get('#column6').click()
    cy.wait(1000)
    cy.get('#test-reiniciar').click()

    cy.get('#column1').click()
    cy.wait(1000)
    cy.get('#column2').click()
    cy.wait(1000)
    cy.get('#column3').click()
    cy.wait(1000)
    cy.get('#column8').click()
    cy.wait(1000)
    cy.get('#column5').click()
    cy.wait(1000)
    cy.get('#column9').click()
    cy.wait(1000)
    cy.get('#column7').click()
    cy.wait(1000)
  });
})


