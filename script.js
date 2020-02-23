
updateBorderRadius()
function updateBoxText() {
    if (mode.innerHTML == '<small>COMPACT</small>') {
        boxText.innerHTML = `{\n   border-radius: ${box.style.borderRadius};\n}`
    } else {
        boxText.innerHTML =
            `{\n   border-top-left-radius: ${box.style.borderTopLeftRadius};
   border-top-right-radius: ${box.style.borderTopRightRadius};
   border-bottom-right-radius: ${box.style.borderBottomRightRadius};
   border-bottom-left-radius: ${box.style.borderBottomLeftRadius};
}`
    }
}
function updateBorderRadius() {
    if (simple.classList.contains("active")) {
        box.style.borderRadius = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}%`
    } else {
        box.style.borderRadius = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}%/${topLeft2.value}% ${topRight2.value}% ${bottomRight2.value}% ${bottomLeft2.value}% `
    }
    updateBoxText()
}

function changeActive(element) {
    if (element.classList.contains("active")) { return }
    simple.classList.toggle("active")
    complex.classList.toggle("active")

    topLeft2.hidden = !topLeft2.hidden
    topRight2.hidden = !topRight2.hidden
    bottomRight2.hidden = !bottomRight2.hidden
    bottomLeft2.hidden = !bottomLeft2.hidden

    updateBorderRadius()
}

function copyToClipboard() {
    var copyText = document.getElementById("boxText");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function changeMode(){
    if (mode.innerHTML == '<small>DETAILED</small>'){
        mode.innerHTML = '<small>COMPACT</small>'
    } else {
        mode.innerHTML = '<small>DETAILED</small>'
    }
    updateBoxText()
}