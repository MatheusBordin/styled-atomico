let counter = 0;
export const generateComponentID = () => {
    counter++;
    return btoa(`atomico-${counter}`).replace(/\W/g, '');
}