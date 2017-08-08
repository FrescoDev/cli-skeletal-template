import dummyFunction from '../src/dummy.function'
import chai from 'chai'

chai.should()

describe('Dummy Function Tests', () => {
    describe('Addition', () => {
        let actualResult

        beforeEach(() => {
            actualResult = dummyFunction(2, 2)
        })

        it('returns the value 4', () => {
            actualResult = 4
        })
    })
})