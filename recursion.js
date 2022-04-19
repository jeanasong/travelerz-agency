let countDown = (num) => {
    if(num === 1) {
        console.log(num, "Happy new year!!!!")
        return
    }
    console.log(num);
    return countDown(num -1);
}

countDown(10);