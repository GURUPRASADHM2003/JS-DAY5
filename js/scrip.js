// task 1
/*{
    "name": "John Doe",
    "title": "Software Engineer",
    "contact": {
      "email": "guru@gmail.com",
      "phone": "+123456789",
      "address": "kalki street"
    },
    "education": [
      {
        "degree": "Bachelor of Science",
        "major": "Computer Science",
        "university": "University",
        "graduation_year": 2015
      },
      {
        "degree": "Master of Science",
        "major": "Software Engineering",
        "university": "Graduate School of Example",
        "graduation_year": 2017
      }
    ],
    "experience": [
      {
        "position": "Software Engineer",
        "company": "Tech Solutions Inc.",
        "start_date": "2017-06-01",
        "end_date": "2022-05-31",
        "responsibilities": [
          "Developed scalable web applications using Node.js and React.js",
          "Implemented RESTful APIs for integration with external systems",
          "Collaborated with cross-functional teams for project delivery"
        ]
      },
      {
        "position": "Junior Developer",
        "company": "Startup X",
        "start_date": "2015-09-01",
        "end_date": "2017-05-31",
        "responsibilities": [
          "Assisted in building and maintaining web applications",
          "Debugged and fixed issues in existing codebase",
          "Participated in team code reviews and discussions"
        ]
      }
    ],
    "skills": [
      "JavaScript",
      "Node.js",
      "React.js",
      "HTML/CSS",
      "SQL",
      "Git",
      "Agile Development"
    ] */
  

  // task 2

  //Using for loop:
  const resume = {
    // JSON data here
  };
  
  // Iterating over skills array
  console.log("Using for loop:");
  for (let i = 0; i < resume.skills.length; i++) {
    console.log(resume.skills[i]);
  }

  //Using for...in loop
  console.log("Using for...in loop:");
for (let key in resume) {
  if (Array.isArray(resume[key])) {
    console.log(`Array: ${key}`);
    resume[key].forEach(item => console.log(item));
  } else if (typeof resume[key] === 'object') {
    console.log(`Object: ${key}`);
    for (let prop in resume[key]) {
      console.log(`${prop}: ${resume[key][prop]}`);
    }
  } else {
    console.log(`${key}: ${resume[key]}`);
  }
}


//Using for...of loop
console.log("Using for...of loop:");
for (let skill of resume.skills) {
  console.log(skill);
}

//Using forEach method
console.log("Using forEach method:");
resume.skills.forEach(skill => {
  console.log(skill);
});