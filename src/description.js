const colors = require(`colors/safe`);
const packageDescription = require(`../package.json`).description;

module.exports = {
  name: `description`,
  description: `печатает описание приложения`,
  execute() {
    console.log(colors.yellow(packageDescription));
  }
};
