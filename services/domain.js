
"use server"

/**
 * Get TLD prices based on a domain name
 * @param {string} domain_name - The domain name
 * @param {string[]} extensions - The tld extensions for the given domain name
 * @returns {}
 */
export const getTLDPrices = async (domain_name, extensions = ['com', 'nl', 'net', 'shop', 'de', 'org', 'uk', 'xyz', 'be']) => {

    //! checking of de data wel de correcte API format gebruikt,
    // console.log(extensions.map((extension) => ({name: domain_name, extension})))
    const data = await fetch('https://dev.api.mintycloud.nl/api/v2/domains/op/search', {
        method: 'post',
        headers: {
            'Authorization': `Basic ${process.env.API_SECRET}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(extensions.map((extension) => ({name: domain_name, extension})))
    });

    const body = await data.json();
    if(body) {
        return body;
    } else {
        return false;
    }
}
