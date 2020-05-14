// const p = document.querySelector('#box-paragraph');

export const fn = {
    visibility: false,
    box: document.querySelector(".rightClickBox"),

    toggleMenu: function (command) {
        if (command === "show") {
            this.box.style.display = "block";
            this.visibility = true;

        } else {
            this.box.style.display = "none";
            this.visibility = false;
        }
    },

    position: function (left, top) {
        this.box.style.left = `${left}px`;
        this.box.style.top = `${top}px`;
        this.toggleMenu("show");
    }
}
