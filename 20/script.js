let button = document.getElementById("bbbb");
        let textField = document.getElementById("tttt");
        let color = "red";
        let isColorSwitched = false;

        button.addEventListener("click", function(event) {
            if (!isColorSwitched) {
                textField.value = "текстовое поле";
                isColorSwitched = true;
            } else {
                color = (color === "red") ? "blue" : "red";
                textField.style.color = color;
            }
        });



        let resetButton = document.querySelector("input[type='reset']");
        let textarea = document.getElementById("textarea");
        let searchInput = document.getElementById("searchInput");

        resetButton.addEventListener("click", function(event) {
            let text = textarea.value;
            let searchValue = searchInput.value;

            if (text.includes(searchValue)) {
                alert("Текст содержит искомую строку");
            } else {
                alert("Текст не содержит искомую строку");
            }

            event.preventDefault();
        });
        