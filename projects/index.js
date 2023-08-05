var container = document.getElementById("projects");

const khanChess = new PageLinkItem(1, "KhanChess", "Chess game agains chess bot",
    "https://media.aykhan.net/thumbnails/projects/khanchess.png", "https://aykhan.net/projects/khanchess");

const zust = new PageLinkItem(2, "Zust", "Social Media Website",
    "https://media.aykhan.net/thumbnails/projects/zust.png", "https://aykhan.net/projects/zust");

const projects = [khanChess];

addItemsToContainer(container, projects);