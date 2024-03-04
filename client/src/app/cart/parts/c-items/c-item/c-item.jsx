import React, { useContext } from "react"
import { useMedia } from "../../../../../hooks/useMedia"
import CItemLoading from "../../c-item-loading/c-item-loading"
import CItemDelete from "../../c-item-delete/c-item-delete"
import MCItem from "./m-c-item/m-c-item"
import DCItem from "./d-c-item/d-c-item"
import "./c-item.scss"

const CItem = ({ item, trigerDelete, setTrigerDelete, index, loading, setLoading }) => {

    /* Global */
    const { media } = useMedia()

    /* JSX */
    return (
        <div className="c-item-container">
            <CItemLoading
                index={index}
                loading={loading}
                setLoading={setLoading}/>
            <CItemDelete
                setLoading={setLoading}
                index={index}
                trigerDelete={trigerDelete}
                setTrigerDelete={setTrigerDelete}
                item={item}/>
                { media.type === "mobile"
                    ? <MCItem
                        item={item}
                        setTrigerDelete={setTrigerDelete}
                        index={index}/>
                    : <DCItem
                        item={item}
                        setTrigerDelete={setTrigerDelete}
                        index={index}/>
                }
        </div>
    )
}

export default CItem