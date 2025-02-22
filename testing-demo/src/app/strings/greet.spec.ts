import { greet } from "./greet"

describe('greet s00240122', () => {
    it('should include the name in the message', () => {
        expect(greet('Frank')).toContain('Frank')
    })

    it ('should not include the name in the message', () => {
        expect(greet('Walter')).not.toContain('White');
    })
})