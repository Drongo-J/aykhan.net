var container = document.getElementById("projects");

const khanChess = new PageLinkItem(1, "KhanChess", "Chess game agains chess bot",
    "https://media.aykhan.net/thumbnails/projects/khanchess.png", "https://aykhan.net/projects/khanchess");

const projects = [khanChess];

addItemsToContainer(container, projects);