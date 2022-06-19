export const prettifyData = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getDate()} ${date.toLocaleDateString("en-US", {
        month: "short"})} ${date.getFullYear()} ${date.toLocaleString(
            "en-US", {hour: "numeric", minute: "numeric", hour12: false}
        )}`
}