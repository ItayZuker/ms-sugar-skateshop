import { useContext } from "react"
import { GlobalContext } from "../../../context/global"
import "./cover-layer.scss"

const CoverLayer = () => {

    /* Global Variables */
    const {
        resetDialog
    } = useContext(GlobalContext)

    /* JSX */
    return (
        <div 
            onPointerDown={resetDialog}
            className="cover-layer"/>
    )
}

export default CoverLayer