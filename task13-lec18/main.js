function converDollar() {
    let doller = document.getElementById("dollarId").value;
    let result = document.getElementById("result");

    doller = doller * 50;
    result.textContent = doller + " EG";

    return false;
}
