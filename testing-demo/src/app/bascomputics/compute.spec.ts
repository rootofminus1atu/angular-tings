import { compute } from "./compute"

describe('compute s00240122', () => {
    it('should return 0 if the input is negative', () => {
        const result = compute(-1)
        expect(result).toBe(0)
    })

    it('should return input+1 if the input is positive', () => {
        const result = compute(1)
        expect(result).toBe(2)
    })
})