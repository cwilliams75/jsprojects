const { TestScheduler } = require('jest');
const Loops = require('./Loops');
test("test for one to ten",()=>{
    //Given
    let loops = new Loops();
    let expected = "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n";
    //When
    let actual = loops.oneToTen();
    //Then
    expect(actual).toEqual(expected)
})
test("test for squared numbers", ()=>{
        // Given
        let loops = new Loops();
        let expected =  "1\n4\n9\n16\n25\n36\n49\n64\n81\n100\n";
        // When
        let actual = loops.loopsSquared();
        // Then
        expect(actual).toEqual(expected);
    }
)
test("test for even under", () => {
        // Given
        let loops = new Loops();
        let expected = "2\n4\n6\n8\n10\n12\n14\n16\n18\n";
        // When
        let actual = loops.evenUnder(20);
        // Then
        expect(actual).toEqual(expected);
})