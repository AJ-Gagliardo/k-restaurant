
export function removeChildren() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
        content.style.backgroundImage = null;
    }
}

// export default removeChildren;
