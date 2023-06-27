var container = document.getElementById("institutions");

const stepIt = new PageLinkItem(1, "Step IT Academy", "Discover my programming journey at this educational platform", 
               "https://media.aykhan.net/thumbnails/step-it-academy/thumbnail.png", "https://aykhan.net/tasks/step-it-academy");
const metu = new PageLinkItem(2, "METU University", "Explore my tasks at this prestigious Turkish institution", 
               "https://media.aykhan.net/thumbnails/metu/thumbnail.png", "https://aykhan.net/tasks/metu");

const institutions = [stepIt, metu];

addItemsToContainer(container, institutions);