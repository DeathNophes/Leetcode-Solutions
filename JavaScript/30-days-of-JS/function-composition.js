// const functions = [x => x + 1, x => x * x, x => 2 * x];

function compose (functions) {
    let value = 0;

    return function comp (x) {
        if (functions.length === 0) return x

        const fn = functions.pop()
        value = fn(x);

        return comp(value)
    }
}

/**
const fn = compose(functions);
fn(4); // 65
*/