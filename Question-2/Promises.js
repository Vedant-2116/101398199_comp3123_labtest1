const resolvedPromise =() =>{
    return new Promise((resolve)=>{
        setTimeout(() =>{
            let success = {message : 'delayed success!'};
            resolve(success);
        },500);
    });
};

const rejectedPromise = () =>{
    return new Promise((reject) => {
        setTimeout(()=>{
            try{
                throw new Error('delayed exception!');
            }catch(e){
                reject(e);
            }
    },500);
    });
};

resolvedPromise().then((result) =>{
    console.log(`Result In Resolved Promise  : `, result);
}).catch((error) => {
    console.log(`Error In Resolved Promise:`, error);
});

rejectedPromise().then((result) =>{
    console.log(`Result In Rejected Promise  :`, result);
}).catch((error) => {
    console.error(`Error In Rejected Promise:`, error);
});


// const delayedSuccess = () => {
//     setTimeout(() => {
//       let success = { 'message': 'delayed success!' };
//       console.log(success);
//     }, 500);
//   };
  
//   const delayedException = () => {
//     setTimeout(() => {
//       try {
//         throw new Error('error: delayed exception!');
//       } catch (e) {
//         console.error(e);
//       }
//     }, 500);
//   };
  
//   delayedSuccess();
//   delayedException();