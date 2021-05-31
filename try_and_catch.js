const covertToRs = (dollar) => {
    if (typeof dollar === 'number'){
        return dollar * 76

    } else{
        throw Error('Dollar needs to be in number !!')
    }
}
try {
    const myValue = covertToRs('six')

    console.log(myValue)
    
} catch (error) {
    console.log(error);
    
}

console.log('I will not run if program crashes!!!')
//const myValue = covertToRs(5)

//console.log(myValue)