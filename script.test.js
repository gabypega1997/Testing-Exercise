const googleSearch = require("./script");

const dbMock = [
    'dog.com',
    'chesse.com',
    'cat.com',
    'elefant.com',
    'breat.com',
    'dogfree.com',
    'dogsvscats.com',
    'allaboutdogs.com',
    'tomorowwekillldogs.no'
] 


test("is a silly test", ()=>{
    expect('hello').toBe('hello')
    
    // googleSearch('testtest',dbMock)

    // expect(googleSearch('flower')).toStrictEqual(["flowers.com"])
    // expect(googleSearch('cats')).toStrictEqual([
    //     'cats.com',
    //     'myfavoritecats.com',
    //     'myfavoritecats2.com'
    // ])
    // expect(googleSearch("cat").length).toBe(3)

});

describe('googleSearch', () => {
    test('is searching google', () => {
        expect(googleSearch('testtest', dbMock))
        .toEqual([])
        expect(googleSearch('dog', dbMock))
        .toEqual(['dog.com','dogfree.com',
        'dogsvscats.com'])
        
    });
    
    it('work with undefined and null input', () => {
        expect(googleSearch(undefined,dbMock))
        .toEqual([]);
        expect(googleSearch(null,dbMock))
        .toEqual([]);
    })
    
    it('does not return more than 3 matches', () => {
        expect(googleSearch(".com",dbMock).length)
        .toEqual(3);
        expect(googleSearch("dog",dbMock).length)
        .toEqual(3);
    })
})

