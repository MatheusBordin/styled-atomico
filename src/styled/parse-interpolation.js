export const parseInterpolation = (interpolations, idx, props) => {
    const item = (interpolations || [])[idx];

    if (item == null) {
        return '';
    }

    if (typeof item === 'function') {
        return item(props);
    }

    return item;
}