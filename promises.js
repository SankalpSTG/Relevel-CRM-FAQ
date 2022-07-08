/**
 * Callback Hell example
 */
firstAsynchronousCall(function(error, result){
    secondAsynchronousCall(function(error, result){
        thirdAsynchronousCall(function(error, result){
            fourthAsynchronousCall(function(error, result){
    
            })
        })
    })    
})

/**
 * Promises example
 */

firstAsynchronousCall().then(function(result){
    return secondAsynchronousCall()
}).then(function(result){
    return thirdAsynchronousCall()
}).then(function(result){
    return fourthAsynchronousCall()
}).catch(error => {
    console.log(error)
})