var container = document.getElementById("subjects");

const webProgramming = new PageLinkItem(1, "Web Programming", "Explore my Web Programming tasks",
    "https://media.aykhan.net/thumbnails/step-it-academy/web-programming/thumbnail.png", "https://aykhan.net/tasks/step-it-academy/web-programming");
const javaScript = new PageLinkItem(2, "Java Script", "Explore my Java Script tasks",
    "https://media.aykhan.net/thumbnails/step-it-academy/java-script/thumbnail.png", "https://aykhan.net/tasks/step-it-academy/java-script");
const aspnet = new PageLinkItem(3, "ASP.NET", "Explore my ASP.NET tasks",
    "https://media.aykhan.net/thumbnails/step-it-academy/asp-net/thumbnail.png", "https://aykhan.net/tasks/step-it-academy/asp-net");


const subjects = [webProgramming, javaScript, aspnet];

addItemsToContainer(container, subjects);   