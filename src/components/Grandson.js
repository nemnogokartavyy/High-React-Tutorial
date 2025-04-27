import { MyContext } from "./MyContext";
import { useContext } from "react";

function Grandson() {

    const age = useContext(MyContext);

    return (
        <>
            <div>
                <p>
                    Age {age}
                </p>
                <p>
                    Age {age / 2}
                </p>
            </div>
        </>
    )

}

export default Grandson;