export default async function getCars () {
    const request = await fetch ("https://run.mocky.io/v3/c4fd1252-5fec-40ef-9d15-f357dbda5d9a")
    const response = await request.json ()

    return response.data
}