import { createContext, useContext,useState } from "react";

const modalContext = createContext()

const useModal = () => useContext(modalContext)

const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false)
    return (
        <modalContext.Provider value={{ showModal, setShowModal }} >
            {children}
        </modalContext.Provider>
    )
}

export { useModal, ModalProvider }