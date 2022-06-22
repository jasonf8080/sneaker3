const url = 'sneakers.json';

export const fetchProducts = async() => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
    
