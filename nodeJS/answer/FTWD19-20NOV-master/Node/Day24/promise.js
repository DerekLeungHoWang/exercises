





    // /* Callback into promise */

    // // const userLeft = true;
    // // const userWatchingCatMeme = false;

    // // // function watchTutorialCallback(callback, errorCallback) {
    // // //     if (userLeft) {
    // // //         errorCallback({
    // // //             name: 'User Left',
    // // //             message: ":'("
    // // //         })
    // // //     } else if (userWatchingCatMeme) {
    // // //         errorCallback({
    // // //             name: 'User Watching Cat Meme',
    // // //             message: 'WebDevCallback < Cat'
    // // //         })
    // // //     } else {
    // // //         callback('Thumbs up for a great tutorial.');
    // // //     };
    // // // };

    // // // watchTutorialCallback((message) => {
    // // //     console.log('Success: ' + message);
    // // // }, (error) => {
    // // //     console.log(error.name + ' ' + error.message);
    // // // });

    function watchTutorialPromise() {
        return new Promise((resolve, reject) => {
            if (userLeft) {
                reject({
                    name: 'User Left',
                    message: ":'("
                })
            } else if (userWatchingCatMeme) {
                reject({
                    name: 'User Watching Cat Meme',
                    message: 'WebDevCallback < Cat'
                })
            } else {
                resolve('Thumbs up for a great tutorial.');
            };
        })
    }


    watchTutorialPromise().then((message) => {
        throw new Error('This is an error')
    }).catch((error) => {
        console.log(error.name + ' ' + error.message);
    });




const fs = require('fs');


function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        });
    })
}

readFile('./index.html').then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});