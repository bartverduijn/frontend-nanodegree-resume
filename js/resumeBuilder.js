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
bio.display = function() {
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

  // CONTACTS
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  $("#footerContacts").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  $("#footerContacts").append(formattedEmail);

  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGithub);
  $("#footerContacts").append(formattedGithub);

  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts").append(formattedTwitter);
  $("#footerContacts").append(formattedTwitter);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);
  $("#footerContacts").append(formattedLocation);
}

bio.display();

// WORK
work.display = function() {
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
}

work.display();


// PROJECTS
projects.display = function () {

  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDates);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDescription);

    if (projects.projects[project].images.length > 0) {
      for(img in projects.projects[project].images) {
        var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
        $(".project-entry:last").append(formattedProjectImages);
      }
    }
  }
}

projects.display();

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);

    formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);

    formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
    $(".education-entry:last").append(formattedSchoolLocation);

    formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    $(".education-entry:last").append(formattedSchoolMajor);
  }

  // ONLINE CLASSES
  $("#education").append(HTMLonlineClasses);

  for (course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);

    formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    $(".education-entry:last").append(formattedOnlineTitle+formattedOnlineSchool);

    formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    $(".education-entry:last").append(formattedOnlineDates);

    formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedOnlineURL);

  }

}

education.display();



// INTERNATIONALIZE BUTTON
$("#main").append(internationalizeButton);
var inName = function (name){
  var names = name.trim().split(" ");
  var firstName = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
  var lastName = names[1].toUpperCase();

  newName = firstName + " " + lastName;
  return newName;
}

// MAP
// $("#mapDiv").append(googleMap);
