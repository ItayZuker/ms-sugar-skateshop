import { useContext } from "react"
import { GlobalContext } from "../../../context/global"
import "./cover-layer.scss"

const CoverLayer = ({ active }) => {

    /* Global Variables */
    const {
        resetDialog
    } = useContext(GlobalContext)

    /* JSX */
    return (
        <div 
            onClick={resetDialog}
            className={"cover-layer " + active}/>
    )
}

export default CoverLayer