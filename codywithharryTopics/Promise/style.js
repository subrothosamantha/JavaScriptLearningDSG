/*promise:
-resolve
-reject
-pending
*/


function codeIt(){             //resolve and reject are call back
    return new Promise(function(resolve,reject){
          setTimeout(function(){
            const error = true;
            if(!error) //no error in my promise then it considered as resolved
            {
                console.log('Sam: work is done on time');
                resolve();
            }else{
                console.log('not able to resolve sorry');
                reject();
            }
          },2000);
    });
}
console.log("Harry: Assigned a new work!!!")
codeIt().then(function(){
    console.log("Harry: Thanks for resolving")
}).catch(function(){
    console.log("Harry: very bad that you can't even do this much");
})