/* eslint-disable no-undef */



import { Popover } from "../Popover";

test('popover should render', () => {
    document.body.innerHTML = `<div class="container"></div>`;

    const container = document.querySelector('.container');
    const popoverBtn = new Popover(container);

    popoverBtn.bindToDom();

    expect(container.innerHTML).toBe(Popover.markup);
})

test('popover should toogle class visible', () => {
    document.body.innerHTML = '<div class="container"></div>';

    const container = document.querySelector('.container');
    const popoverBtn = new Popover(container);

    popoverBtn.bindToDom();

    popoverBtn.btn.click()
    const popover = document.querySelector('.popover')

    expect(popover.classList.toggle('visible')).toBe(false);
}) 