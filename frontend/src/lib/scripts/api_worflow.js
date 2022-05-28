// Get total
export const total = await fetch(`https://min-api.cryptocompare.com/data/all/coinlist?api_key=` + key)

// Get total by page
// Page - int
export async function load_by_page(page) {
    return await fetch(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=RUB&page=${page}?api_key` + key)
}


// Get the graph of costage
//export async function get_graph(name) {
//    TODO Shaktulins api
//    return 200 
//} 

