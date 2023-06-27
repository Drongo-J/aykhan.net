let container = document.getElementById("tasks");

let taskCount = 10;
let institution = "step-it-academy";
let lessonName = "asp-net";
let lessonNameNormalized = "ASP.NET -";

var tasks = getTasks(taskCount, lessonNameNormalized, lessonName, institution);

addItemsToContainer(container, tasks);

