let container = document.getElementById("tasks");

const institution = "step-it-academy";
const lessonName = "react";
const lessonNameNormalized = "React -";
const descriptions = [
    'Custom React Website',
    'Task using React Props'
]

const taskCount = descriptions.length;

var tasks = getTasks(taskCount, lessonNameNormalized, lessonName, institution, descriptions);

addItemsToContainer(container, tasks);

