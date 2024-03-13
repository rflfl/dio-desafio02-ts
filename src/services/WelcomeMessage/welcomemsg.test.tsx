import { welcomeMsg } from "./welcomemsg"

describe('welcomeMsg', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert
    it('Exibir msg de boas vindas ao clicar no botaõ de login', () =>{
        welcomeMsg()
        expect(mockAlert).toHaveBeenCalledWith('Seja muito bem vindo usuário!')
    })
})