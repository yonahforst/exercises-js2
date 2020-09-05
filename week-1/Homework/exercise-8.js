/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to add skills from it

4. Create a function to add a skill to all members in a list of mentors

function addSkill(mentors,newSkill){
  //your code here
}

5. Create a function to remove a skill to all members in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills

7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  //your code here
}
*/ 

function addSkill(skillName) {
  this.skills.push(skillName)
}

function removeSkill(skillName) {
  this.skills = this.skills.filter(function (name) {
    return name !== skillName
  })
}


function addSkillFromMentors(mentors,newSkill){
  for (const mentor of mentors) {
    mentor.addSkill(newSkill)
  }
}

function removeSkillFromMentors(mentors,newSkill){
  for (const mentor of mentors) {
    mentor.removeSkill(newSkill)
  }
}

function mentorWithMostSkills(mentors) {
  let topMentor

  for (const mentor of mentors) {
    if (!topMentor || topMentor.skills.length < mentor.skills.length)
      topMentor = mentor
  }

  return topMentor
}

function addStudentLikes() {
  this.studentLikes = this.studentLikes + 1
} 

function likeAllMentors(mentors) {
  for (const mentor of mentors) {
    mentor.addStudentLikes()
  }
}

var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS","React","Node"],
    class: "Mar1",
    studentLikes: 0,
    job:
      {
        company: "Google",
        position: "Senior developer",
        city: "Barcelona"
      },
    addSkill: addSkill,
    removeSkill: removeSkill,
    addStudentLikes: addStudentLikes,
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job:
      {
        company: "FC Barcelona",
        position: "Player",
        city: "Barcelona"
      },
    addSkill: addSkill,
    removeSkill: removeSkill,
    addStudentLikes: addStudentLikes,
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React","Angular","Python","Node"],
    class: "Mar4",
    studentLikes: 0,
    job:
      {
        company: "Facebook",
        position: "Software Manager",
        city: "Chicago"
      },
    addSkill: addSkill,
    removeSkill: removeSkill,
    addStudentLikes: addStudentLikes,
  },  
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML","JS","React"],
    class: "Mar2",
    studentLikes: 0,
    job:
      {
        company: "Amazon",
        position: "Senior developer",
        city: "Barcelona"
      },
    addSkill: addSkill,
    removeSkill: removeSkill,
    addStudentLikes: addStudentLikes,
  },

];

//YOUR CODE HERE
for (const mentor of mentors) {
  const knowsReact = mentor.skills.includes('React')
  const livesInBarcelona = mentor.job.city === 'Barcelona'
  if (knowsReact && livesInBarcelona)
    console.log(`Hi, my name is ${mentor.firstName} ${mentor.lastName}. I work in Barcelona and i know React.`)
}


for (const mentor of mentors) {
  const livesInBarcelona = mentor.job.city === 'Barcelona'
  if (livesInBarcelona) {
    mentor.class = 'Jun1'
    mentor.skills.push('SQL')
  }
}
