//call back function

function taskone() {
    console.log("task 1");

    }
function tasktwo() {
    console.log("task2");
    
}
setTimeout(taskone,1000)
tasktwo();

const message = () => {
    console.log('This messaege is shown after 2 min')
}

setTimeout(message,20000)