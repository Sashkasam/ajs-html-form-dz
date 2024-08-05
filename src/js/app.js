import { Popover } from "./Popover";

const container = document.querySelector('.container');
const popoverBtn= new Popover(container);

popoverBtn.bindToDom()
