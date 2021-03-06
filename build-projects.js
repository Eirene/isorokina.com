const pug = require('pug');
const pugJSON = require('./src/pug.json');
const fs = require('fs');

const projectTemplate = pug.compileFile('./src/partials/project-item.pug', { pretty: true });

function buildProjectPage(project) {
  if (!project.slug) {
    return;
  }
  project.url = '/projects/' + project.slug;
  const html = projectTemplate(project);
  fs.writeFileSync(`dist/projects/${project.slug}.html`, html);
}

for (let myProject of pugJSON.data.projects) {
  buildProjectPage(myProject);
}
