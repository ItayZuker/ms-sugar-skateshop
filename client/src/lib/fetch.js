export const post = async ({data, rout}) => {

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    try {
        const res = await fetch(rout, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
            signal: controller.signal
        })
        
        clearTimeout(timeoutId);
        
        const payload = await res.json()

        return payload.error ? {err: payload.error} : {payload}

    } catch (err) {
        return {err}
    }
}

export const get = async ({rout}) => {

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    try {
        const res = await fetch(rout, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            signal: controller.signal
        })
        
        clearTimeout(timeoutId);

        const payload = await res.json()

        return payload.error ? {err: payload.error} : {payload}

    } catch (err) {
        return {err}
    }
}