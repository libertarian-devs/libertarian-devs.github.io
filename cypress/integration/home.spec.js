describe('Home Page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000')
	})

	it('should contains organization main properties', () => {
		cy.contains('Libertarian Devs')
		cy.contains('liberty')
		cy.contains('Projects')
	})
})