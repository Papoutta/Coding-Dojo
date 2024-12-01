import React, { useContext } from "react";
import { UserContext } from "../App";


const Form = () => {
    const { name, setName } = useContext(UserContext);

    return (
        <div className="col-3 p-3">
            <label className="form-label">Name:</label>{" "}
            <input
                className=" form-control"
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </div>
    );
};

export default Form;