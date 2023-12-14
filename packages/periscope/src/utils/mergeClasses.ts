export const mergeClasses = (...classes: (string | undefined)[]): string => {
    return [...classes.map(cls => Boolean(cls) ? cls : '')].join(' ').trim();
}