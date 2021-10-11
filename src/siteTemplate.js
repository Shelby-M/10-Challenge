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
    let internHtml = `<div class = "card" style="width: 12rem;">
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href = "./dist/style.css">
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
