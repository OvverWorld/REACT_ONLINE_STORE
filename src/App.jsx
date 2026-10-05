import TechShop  from "./AnimalCard.jsx";
import {useState} from "react";
function App() {
    const phones = [
        { model: "iPhone", price: 1200 },
        { model: "Samsung", price: 900 },
        { model: "Xiaomi", price: 500 },
        { model: "Nokia", price: 200 }
    ];
    const [search, setSearch] = useState("");
    const filteredPhones = phones.filter(phone  => {
        return phone.model.toLowerCase().includes(search.toLowerCase());
    })
    return(
        <div>
            <input type="text" value= { search} onChange ={(e)=>
            setSearch(e.target.value)}/>
            {filteredPhones.map(phone => (
                <TechShop
                    key={phone.model}
                    name ={phone.model}
                    price = {phone.price}
                />
            ))}
        </div>
    )
}
export default App;