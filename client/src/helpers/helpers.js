export async function fetchData() {
    const response = await fetch("/simpleGet");
    const data = await response.json();
    return data;
}

export function autoResize(e) {
    const textarea = e.target;

    const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight);

    const maxNumLines = 10; // Maximum number of visible lines
    
    const minHeight = lineHeight * 1; // Minimum height is one line
    const maxHeight = lineHeight * maxNumLines; // Maximum height is maxNumLines lines
    textarea.style.height = `${minHeight}px`;
    textarea.style.height = `${Math.min(textarea.scrollHeight - lineHeight, maxHeight)}px`;

    // this should handle scroll to bottom as well
    textarea.scrollTop = textarea.scrollHeight - textarea.clientHeight;
}