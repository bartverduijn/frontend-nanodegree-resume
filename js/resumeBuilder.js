var bio = {
  "name": "John Doe",
  "role": "Web Developer",
  "contacts": {
    "mobile": "650-555-5555",
    "email": "john.doe@gmail.com",
    "github": "johndoe",
    "twitter": "@johndoe",
    "location": "San Fransisco"
  },
  "welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "skills": [
    "being awesome", "eating", "sleeping", "raving", "repeating"
  ],
  "bioPic": "images/fry.jpg"
}

var education = {
  "schools" : [
    {
      "name": "Nova Southeastern University",
      "city": "San Fransisco",
      "degree": "Masters",
      "majors": ["CS"],
      "dates": 2013,
      "url": "http://example.com"
    },
    {
      "name": "Eckerd College",
      "city": "Saint Petersburg",
      "degree": "BA",
      "majors": ["CS"],
      "dates": 2007,
      "url": "http://example.com"
    }
  ],
  "onlineCourses": [
    {
      "title": "Javascript Crash Course",
      "school": "Udacity",
      "dates": 2017,
      "url": "http://example.com"
    },
    {
      "title": "HTML and CSS Basics",
      "school": "Udacity",
      "dates": 2016,
      "url": "http://example.com"
    }
  ]
}

var work = {
  "jobs": [
    {
      "employer": "Planet Express",
      "title": "Delivery Boy",
      "dates": "2010 - 2020",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "employer": "Pizzaturn",
      "title": "Delivery Boy",
      "dates": "1998 - 2003",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "Proj 1",
      "dates": 2014,
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "images": [
        "images/197x148.gif", "images/197x148.gif"
      ]
    },
    {
      "title": "Proj 2",
      "dates": 2019,
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "images": [
        "images/197x148.gif"
      ]
    }
  ]
}

// Injecting the data into the template
// BIO
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);

// SKILLS
if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  for(skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkill);
  }

}

// WORK
for(job in work.jobs){
  $("#workExperience").append(HTMLworkStart);

  var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  $(".work-entry:last").append(formattedWorkEmployer+formattedWorkTitle);

  var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedWorkDates);

  var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedWorkDescription);
}
