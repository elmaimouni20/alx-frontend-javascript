export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
    let count = endpointMap.get(endpoint) || 0;
    count++;
    endpointMap.set(endpoint, count);

    if (count >= 5) {
        throw new Error('Endpoint load is high');
    }
}
