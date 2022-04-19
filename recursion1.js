let countByTwo = (num) => {
    if(num >= 10) {
        console.log(num)
        return
    }
    console.log(num)
    return countByTwo(num +2)
}

countByTwo(3);