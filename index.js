const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");

const inquirer = require("inquirer");
const fs = require("fs");
const writeFile = require("./src/writeFile");
const createPage = require("./src/siteTemplate");

let manager = [];
let engineer = [];
let intern = [];
let teamArr = { manager, engineer, intern };

function teamBuilder() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the employees role",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        name: "employee",
        message: "What is the Employee's name",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Employee's ID",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Employee's Email?",
      },
    ])
    .then(({ employee, id, email, role }) => {
      if (role === "Manager") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "officeNumber",
              message: "What is the Manager's office number?",
            },
            {
              type: "confirm",
              name: "entry",
              message: "Would you like to add another employee?",
            },
          ])
          .then(({ officeNumber, entry }) => {
            manager.push(new Manager(employee, id, email, officeNumber));
            if (entry) {
              return teamBuilder();
            }
          });
      } else if (role === "Engineer") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "github",
              message: "What is the Engineer's Github Username?",
            },
            {
              type: "confirm",
              name: "entry",
              message: "Would you like to add another employee?",
            },
          ])
          .then(({ github, entry }) => {
            engineer.push(new Engineer(employee, id, email, github));
            if (entry) {
              return teamBuilder();
            }
          });
      } else if (role === "Intern") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "school",
              message: "What is the Intern's School?",
            },
            {
              type: "confirm",
              name: "entry",
              message: "Would you like to add another employee?",
              default: false,
            },
          ])
          .then(({ school, entry }) => {
            intern.push(new Intern(employee, id, email, school));
            if (entry) {
              return teamBuilder();
            }
          });
      }
    });
}

teamBuilder()
  .then((teamInfo) => {
    return createPage(teamArr);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  });
