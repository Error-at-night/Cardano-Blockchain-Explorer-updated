// Local Storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

// Delete Current User  
export const deleteItem = ({key}) => {
    return localStorage.removeItem(key)
}