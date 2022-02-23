console.log('hi');
const student = [{
    name:"larry",
    id:22
}, {
    name: "suresh",
    id:23
}];

function enrollStudent(fetchAll){
    setTimeout(function(){
        student.push({name:'katrina',id:54});
        fetchAll();
    },4000);
    
}

function getStudents(){
    student.forEach(function(stu){
        console.log(stu.name+ " " +stu.id);
    });
}

enrollStudent(getStudents);