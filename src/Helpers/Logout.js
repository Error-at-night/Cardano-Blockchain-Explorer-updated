//  Fetchdata Function
import { deleteItem } from "./FetchData";

// Library imports (Toast)
import { toast } from "react-toastify";

// React Router Dom Imports
import { redirect } from "react-router-dom";

export async function LogoutAction() {
    // Delete The User
    deleteItem({
        key: "userName",
    })

    toast.success("You've successfully logout")

    return redirect("/")
}