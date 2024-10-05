export const throttle = (fn: Function, delay: number) => {
    let timer: number | undefined = undefined;
    return (...args: any[]) => {
        if (timer) {
            return;
        }
        timer = setTimeout(() => {
            fn();
            timer = undefined;
        }, delay);
    }
}