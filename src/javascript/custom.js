export const $ = par => {
    const temp = document.querySelectorAll(par);
    return temp.length === 1 ? temp[0] : temp;
};
