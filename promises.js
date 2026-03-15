//promise 1
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

//promise 2
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})

//promise 3
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Abhay", email: "abhay@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

//promise 4
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Abhay", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
})