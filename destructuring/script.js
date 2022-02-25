const person = {
    name: 'subrotho samantha',
    Address : {
        state: 'Telangana',
        country : 'India'
    },
    Education : {
        School : {
            schoolName : 'Vidya Bharathi',
            fees : '30000'
        },
        college : {
            collageName : 'Agarwal '
        }
    },
    jobs : ['HGS','Dunn Solutions']
    
}

let {Education:{School}, jobs:[,name]} = person;

console.log(name);
