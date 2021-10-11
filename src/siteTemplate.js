const buildSite = (teamInfo) => {
  const manager = teamInfo.manager.map(function (job) {
    let managerHtml = `<div class = "card" style="width: 12rem;">
        <h2>${job.name}</h2>
        <h3>Manager</h3>
        <p>ID: ${job.id}</p>
        <p>EMAIL: <a href="mailto:${job.email}">${job.email}</a></p>
        <p>Office Number: ${job.officeNumber}</p>
        </div>`;

    return managerHtml;
  });

  const engineer = teamInfo.engineer.map(function (job) {
    let engineerHtml = `<div class = "card" style="width: 12rem;">
        <h2>${job.name}</h2>
        <h3>Engineer</h3>
        <p>ID: ${job.id}</p>
        <p>EMAIL: <a href="mailto:${job.email}">${job.email}</a></p>
        <p>Github: <a href="https://github.com/${job.github}">${job.github}</a></p>
        </div>`;

    return engineerHtml;
  });

  const intern = teamInfo.intern.map(function (job) {
    let internHtml = `<div class = "card" style="width: 12rem; border= 20px; border-color="pink">
        <h2>${job.name}</h2>
        <h3>Intern</h3>
        <p>ID: ${job.id}</p>
        <p>EMAIL: <a href="mailto:${job.email}">${job.email}</a></p>
        <p>School:${job.school}</p>
        </div>`;
    return internHtml;
  });
  return [manager, engineer, intern];
};

module.exports = (template) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> My Team </title>
  </head>
  <body>
  <header>
  <h1 class="text-center">My Team</h1>
  </header>
  ${buildSite(template)}
  </body>
  </html>`;
};
