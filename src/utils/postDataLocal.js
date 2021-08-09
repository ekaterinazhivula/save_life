//const TASKS_LOCAL = 'http://localhost:3000/tasks';
const TASKS_LOCAL = "http://work.social-server.online/tasks";
const USER_LOCAL = "http://work.social-server.online/auth";

import { closeIssueForm } from "../components/createIssue";

const postTask = async (event) => {
  event.preventDefault();
  const data = {};

  const formItems = document.querySelector(".info-task").elements;

  for (let i = 0; i < formItems.length - 2; i++) {
    data[formItems[i].name] = formItems[i].value;
  }

  const settings = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  };

  try {
    const response = await fetch(TASKS_LOCAL, settings);
    const data = await response.json();
    console.log(data);
    closeIssueForm();
    return data;
  } catch (e) {
    return e;
  }
};



export { postTask };
