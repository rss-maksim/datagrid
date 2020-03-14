import React, {MouseEvent, ChangeEvent, useState, FormEvent} from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt'
import SearchIcon from '@material-ui/icons/Search'
import {path} from "ramda";

interface IProps {
    children: string
    isOrderByThis?: boolean
    filterable: boolean
    desc?: boolean
    classname?: string
    style?: any
    onSort?: () => void
    onFilter?: (value: string) => void
}

export const HeaderCell = ({ children, filterable, isOrderByThis, desc, classname, style, onSort, onFilter }: IProps) => {
    const [filterIsActive, setFilterActive] = useState(false)
    const [inputText, setInputText] = useState('')
    const [[blockLeft, blockTop], setCoords] = useState([0 , 0])
    const onHandleToggle = (event: MouseEvent<SVGSVGElement>) => {
        // @ts-ignore
        const parentNode: HTMLElement = path(['currentTarget', 'parentNode'], event)
        const { top, left } = parentNode.getBoundingClientRect()
        setCoords([left, top + 30])
        event.preventDefault()
        event.stopPropagation()
        setFilterActive(true)
    }
    const onHandleFilterChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setInputText(value)

    const onHandleReset = () => {
        onFilter && onFilter('')
        setInputText('')
        setFilterActive(false)
    }

    const onHandleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (onFilter) {
            onFilter(inputText)
        }
    }

    return  (
        <>
            <div className={classnames('grid-cell header-grid-cell', classname)} style={style} onClick={onSort}>
                <span className="inner-grid-cell">{children}</span>
                { isOrderByThis && (
                    <ArrowRightAlt className={classnames('sort-arrow-icon', { desc })} fontSize="small" />
                )}
                {filterable && (
                    <SearchIcon className="search-icon" fontSize="small" onClick={onHandleToggle} />
                )}
            </div>
            {filterable && filterIsActive && (ReactDOM.createPortal(
                    (
                        <div className="search-filter">
                            <div className="search-filter-close-container" onClick={() => setFilterActive(false)} />
                            <div className="filter-block" style={{ left: blockLeft, top: blockTop }}>
                                <form onSubmit={onHandleSubmitForm} noValidate>
                                    <input value={inputText} name="column-filter" placeholder="Search" onChange={onHandleFilterChange} autoFocus />
                                    <div className="search-filter-buttons">
                                        <button type="submit">Search</button>
                                        <button type="button" onClick={onHandleReset}>Reset</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    ),
                    document.getElementById('portal-root') as Element)
            )}
        </>
    )
}
