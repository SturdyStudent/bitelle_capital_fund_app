
function CreateData( dataLength, minimum, maximum ) {
    let testData = [];
    for ( let i = 0; i < dataLength; i++ ) {
        testData.push( Math.round( Math.random() * ( maximum - minimum ) + minimum ) )
    }
    return testData;
}

module.exports = {
    CreateData
}