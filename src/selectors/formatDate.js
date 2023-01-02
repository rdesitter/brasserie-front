export const formatDate = (timestampTZ) => {
    const myDate = timestampTZ.slice(0, 10);
    const chunks = myDate.split('-');
    return `${chunks[2]}/${chunks[1]}/${chunks[0]}`;
}