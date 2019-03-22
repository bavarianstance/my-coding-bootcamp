var Student = function (name, subject, gpa){
	this.name = name;
	this.subject = subject;
	this.gpa = gpa;
}

var Classroom = function(students, classSize, professorName, roomNum){
	this.students = [];
	this.classSize = this.students.length;
	this.professorName = professorName;
	this.roomNum = roomNum;

}