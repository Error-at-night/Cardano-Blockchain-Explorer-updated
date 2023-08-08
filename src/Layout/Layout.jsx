// Components
import NavBar from "../Components/Navbar";

// React Router Dom Imports
import { Outlet, useLoaderData } from "react-router-dom";

// FetchData Function
import { fetchData } from "../Helpers/FetchData";

// Sass
import "../Sass/Layout.scss";

// React Imports
import { createContext, useEffect, useState } from "react";

// Library Imports (Toast)
import { toast } from "react-toastify";

// ThemeContext
export const ThemeContext = createContext("dark");

// fetchData
export const FetchData = createContext();

// LayoutLoader Function
export function LayoutLoader() {
    const userName = fetchData("userName")
    return { userName }
}

// Component
const Layout = () => {
     // loaderData
     const { userName } = useLoaderData();

    // theme
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? JSON.parse(storedTheme) : 'dark';
    });
    
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme))
    }, [theme])

    // useState to store and update the recieved json data, address and catch error
    const [address, setAddress] = useState("");
    const [data, setData] = useState([])
    const [error, setError] = useState(null);

    // Project_id
    const project_id = "mainnetQHK7RB25Tw0Q2swWPBlr0ToDfX24jW6i"

    // first endpoint (address)
    const addressURL = `https://cardano-mainnet.blockfrost.io/api/v0/addresses/${address}`

    // second endpoint (transactions)
    const transactionURL = `https://cardano-mainnet.blockfrost.io/api/v0/addresses/${address}/transactions`

    // third endpoint (utxos)
    const utxosURL = `https://cardano-mainnet.blockfrost.io/api/v0/addresses/${address}/utxos`

    // handleSubmit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(address) {
            try {
                // Fetch data from the first endpoint (address)
                const addressResponse = await fetch(addressURL, {
                    headers: {
                        'Content-Type': 'application/json',
                        'project_id': project_id,
                    },
                });
        
                // Fetch data from the second endpoint (transaction)
                const transactionResponse = await fetch(transactionURL, {
                    headers: {
                        'Content-Type': 'application/json',
                        'project_id': project_id,
                    },
                });
        
                // Fetch data from the third endpoint (utxos)
                const utxosResponse = await fetch(utxosURL, {
                    headers: {
                        'Content-Type': 'application/json',
                        'project_id': project_id,
                    },
                }) 
                
                // check if the response from the endpoint is ok
                if(!addressResponse.ok) {
                    throw Error("Could not fetch data from that address")
                }

                if(!transactionResponse.ok) {
                    throw Error("Could not fetch the transaction details from that address")
                }

                if(!utxosResponse.ok) {
                    throw Error("Could not fetch the utxos details from that address")
                }
                
                const jsonAddressData = await addressResponse.json();
                const jsonTransactionData = await transactionResponse.json();
                const jsonUtxosData = await utxosResponse.json();

                // create an object to store the recieved data
                const data = {
                    // address
                    address: jsonAddressData.address.slice(0, 12),
                    stakeAddress: jsonAddressData.stake_address.slice(0, 12),
                    type: jsonAddressData.type,
                    amountUnit: jsonAddressData.amount[0].unit,
                    amountQuantity: jsonAddressData.amount[0].quantity,
                    script: jsonAddressData.script,
                    balance: jsonAddressData.balance,
                    // transaction
                    txHash: jsonTransactionData[0].tx_hash.slice(0, 25),
                    blockTime: jsonTransactionData[0].block_time,
                    blockHeight: jsonTransactionData[0].block_height,
                    txIndex: jsonTransactionData[0].tx_index,
                    // utxos
                    utxos: jsonUtxosData,
                }
                // set the data by passing the object inside the setData function
                setData(data)
                // set the input field to be empty after a user submits 
                setAddress(" ")
                setError(null)
                // toastify message if the data fetched is successfull
                return toast.success("Data fetched successfully");

            } catch (error) {
                // Handle errors
                setError(error)
                setAddress("")
                setData([null])
                // toastify message if there is an error
                return toast.error(error.message)
            }
        };
    }

    const className = "main-" + theme;

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
           <FetchData.Provider value={{address, setAddress, data, error, handleSubmit}}>
            <div>
                { userName && <NavBar/>}
                <main className={`${className}`}>
                    <Outlet/>
                </main>
            </div>
           </FetchData.Provider>
       </ThemeContext.Provider>
    );
}

export default Layout;