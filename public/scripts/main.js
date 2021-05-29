function main() {
    const map = document.querySelector('.map');
    const entryForm = document.querySelector('.entry-forms');
    
    for (let i = 1; i <= 80; i++) {
        let node = document.createElement("div");
        node.classList.add("node");
        node.classList.add("unclicked");
        node.id = `node${i}`;
        node.addEventListener('mouseover', function(event) {
            this.classList.add("hover");
        });
        node.addEventListener('mouseout', function(event) {
            this.classList.remove("hover");
        });

        node.addEventListener("click", function(event) {
            if (this.classList.contains("unclicked")) {
                const nodeForm = document.createElement("form");
                nodeForm.id = `form${i}`;

                const label = document.createElement("label");
                label.for = `distance${i}`;
                label.appendChild( document.createTextNode(`Distance from node ${i}: `));
                nodeForm.appendChild(label);

                const input = document.createElement("input");
                input.type = "number";
                input.id = `distance${i}`;
                input.name = `distance${i}`;
                input.max = 3;
                input.min = 0;
                nodeForm.appendChild(input);

                entryForm.appendChild(nodeForm);
            }
            else {
                const nodeForm = document.getElementById(`form${i}`);
                entryForm.removeChild(nodeForm);
            }

            this.classList.toggle("unclicked");
            this.classList.toggle("clicked");
        });

        map.appendChild(node);
    }
}

document.addEventListener('DOMContentLoaded', main);