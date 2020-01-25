import createToken from './create-token'

describe('Create token', () => {
    it('should create a token', () => {
        expect(() => createToken(0)).toThrow('Length must be an integer between 1 and 512')
        expect(() => createToken(1.5)).toThrow('Length must be an integer between 1 and 512')
        expect(createToken()).toHaveLength(64)
        expect(createToken(2)).toHaveLength(2)
        expect(createToken(5)).toHaveLength(5)
        expect(createToken(16)).toHaveLength(16)
        expect(createToken(32)).toHaveLength(32)
        expect(createToken(64)).toHaveLength(64)
    })
})
