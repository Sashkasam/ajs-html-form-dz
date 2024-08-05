export class Popover {
    constructor (parentEl) {
        this.parentEl = parentEl

        this.onSubmit = this.onSubmit.bind(this);
    }
    static get selector() {
        return '.popover-widget';
    }


    static get btnPopoverSelector() {
        return '.btn-popover';
    }

    static get popoverSelector() {
        return '.popover'
    }

    static get markup() {
        return `
            <form class="popover-widget">
                <div class="popover">
                    <h3 class="popover-header">Popover title</h3>
                    <div class="popover-body">And here's some amazing content. It's very engaging. Right?</div>
                    <div class="arrow"></div>
                 </div>
                
                <button class="btn-popover" type="submit">Click to toggle popover</button>
                

            </form>
           
        
        `
    }


    bindToDom () {
        this.parentEl.innerHTML = Popover.markup
        this.element = this.parentEl.querySelector(Popover.selector)
        this.btn = this.element.querySelector(Popover.btnPopoverSelector)
        this.popover = this.element.querySelector(Popover.popoverSelector)
        
        this.btn.addEventListener('click', this.onSubmit);
        
    }
    
    onSubmit(e) {
        e.preventDefault();
        this.popover.classList.toggle('visible')
    
    }

}