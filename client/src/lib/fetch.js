export const post = async ({data, rout}) => {

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
        const res = await fetch(rout, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
            signal: controller.signal
        })
        clearTimeout(timeoutId);
        const payload = await res.json()
        return {payload}
    } catch (err) {
        return {err}
    }
}