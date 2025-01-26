const defInput = document.getElementById("name-input");
const defOutput = document.getElementById("name-output");
defInput.addEventListener("input", (event) => {
    if (event === "" || event === " "){
    defOutput.textContent = "Anonymus";
    }
    defOutput.textContent = event.currentTarget.value.trim();
});
console.log(defInput);