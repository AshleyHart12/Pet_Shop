import React from 'react'; 
// const GlobalState = React.createContext(); 


// export default  GlobalState;

 const GlobalState = ({children}) => {
    return (
        <GlobalState.Provider value= 'test'>
            {children}
        </GlobalState.Provider>
    )
}

export default GlobalState;
