const inquirer = require("inquirer");

const terminalSelection = async (choices) => {
  const prompt = inquirer.createPromptModule();

  const questions = [
    {
      type: "select",
      name: "option",
      message: "Select the desktop wallpaper:",
      choices,
    },
  ];

  try {
    const answer = await prompt(questions);
    return answer.option;
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

module.exports = terminalSelection;
