console.log('Fetching');

// var url = "https://api.publicapis.org/entries";
async function apiFetching() {
    var url = "http://127.0.0.1:3000/fetch_api"; // Replace with the actual IP and port
    let apiKey = 'your api key'
    const response = await fetch(url, {
        method: 'GET', // for get the the from a api , you can use POST for post your data into a server
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${url}` // this is how you can authenticate your api 
        },
    });

    if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
    }

    return await response.json();
}

async function main() {
    try {
        const result = await apiFetching();
        console.log(result);
    } catch (error) {
        console.error("error");
    }
}

main();
