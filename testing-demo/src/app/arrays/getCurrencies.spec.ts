import { getCurrencies } from "./getCurrencies";

describe('getCurrencies s00240122', () => {
    it('should contain USD', () => {
    expect(getCurrencies()).toContain('USD')
    })
    
    it('should contain GBP', () => {
    expect(getCurrencies()).toContain('GBP')
    })
    
    it('should contain EUR', () => {
    expect(getCurrencies()).toContain('EUR')
    })
    
    it('should not contain CAD', () => {
    expect(getCurrencies()).not.toContain('CAD')
    })
})