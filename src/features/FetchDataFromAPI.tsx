import { useEffect, useState } from "react"

export default function FetchDataFromAPI() {
    const [data, setData] = useState([]);

    const url = "https://reqres.in/api/users?page=1";

    interface User {
        id: number,
        email: string,
        first_name: string,
        last_name: string,
        avatar: string
    }

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <ul>
                {data &&
                    data.map((item: User) =>
                        <li
                            key={item.id}
                        >
                            {item.first_name}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

