document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();

    // const db = firebase.firestore();

    // const productsRef = db.collection('products')

    // const query = productsRef.orderBy('price', 'desc').limit(1)

    // query.get()
    //     .then(products => {
    //         products.forEach(doc => {
    //             data = doc.data()
    //             document.write(`${data.name} at $${data.price} <br>`)
    //         })
    //     })




    // const myPost = db.collection('posts').doc('firstpost');

    // myPost.onSnapshot(doc => {
    //     const data = doc.data();
    //     document.querySelector('#title').innerHTML = data.title
    // })
   
});


function uploadFile(files){
    const storageRef = firebase.storage().ref();
    const horseRef = storageRef.child('hot.jpg');

    const file = files.item(0);

    const task = horseRef.put(file)

    task.then(snapshot => {
        console.log(snapshot)
       
        document.querySelector('#imgUpload').setAttribute('src', "https://firebasestorage.googleapis.com/v0/b/firebasics-ce20f.appspot.com/o/hot.jpg?alt=media&token=1a2b48d1-ace4-48a5-aa84-62e3aaff123e")
    })
}









// function updatePost(e){
//     const db = firebase.firestore();
//     const myPost = db.collection('posts').doc('firstpost');
//     myPost.update({ title: e.target.value})
// }

// function googleLogin(){
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider)
//         .then(result => {
//             const user = result.user;
//             document.write(`Hello ${user.displayName}`);
//             console.log(user)
//         })
//         .catch(console.log)
// }