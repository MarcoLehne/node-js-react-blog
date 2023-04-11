export async function fetchData() {
    const response = await fetch("/simpleGet");
    const data = await response.json();
    return data;
}