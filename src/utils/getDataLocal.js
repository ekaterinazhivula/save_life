//const TASKS_LOCAL = 'http://localhost:3000/tasks';
const TASKS_LOCAL = 'http://work.social-server.online/tasks';


const getResource = async (url) => {
  const res = await fetch(url);

  return res.json();
}

const getAllTasks = async () => {
  const res = await getResource(TASKS_LOCAL);
  return res;
}

const getTask = async (id) => {
  const res = await getResource(`${TASKS_LOCAL}/${id}`);
  return res;
}


export { getAllTasks, getTask };