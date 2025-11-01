// import { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// const Protected = ({ children, authenitication = true }) => {

//     const navigate = useNavigate();
//     const [loader, setLoader] = useState(true)
//     const authStatus = useSelector(state => state.auth.status)

//     useEffect(() => {

//         if (authenitication && authStatus !== authenitication) {
//             navigate("/login")
//         } else if (!authenitication && authStatus !== authenitication) {
//             navigate("/")

//         }
//         setLoader(false)
//     }, [authStatus, Naviagtor, authenitication])
//     return loader ? <p> loading</p> : <div>
//         {children}
//     </div>


// }

// export default Protected


import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = ({ children, authentication = true }) => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        if (authentication && !authStatus) {
            navigate("/login");
        } else if (!authentication && authStatus) {
            navigate("/");
        }
        setLoader(false);
    }, [authStatus, navigate, authentication]);

    if (loader) return <p>Loading...</p>;
    return <>{children}</>;
};

export default Protected;
