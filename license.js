// make a fetch call to the server to get the license data
module.exports = async function (key) {
    try {
        // const license = await fetch(`/license?${key}`).then(res => res.json())
        const license = key === '123456789' ? { status: 'valid' } : { status: 'invalid' };
        if (license.status === 'valid') {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log('Error fetching license data: ${error}')
        return false;
    }

}