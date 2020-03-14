import React from 'react'
import classnames from 'classnames'
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';

interface IProps {
    children: string
    isOrderByThis?: boolean
    desc?: boolean
    classname?: string
    style?: any
    onSort?: () => void
    onFilter?: () => void
}

export const HeaderCell = ({ children, isOrderByThis, desc, classname, style, onSort }: IProps) => (
    <div className={classnames('grid-cell header-grid-cell', classname)} style={style} onClick={onSort}>
        <span className="inner-grid-cell">{children}</span>
        { isOrderByThis && (
            <ArrowRightAlt className={classnames('sort-arrow-icon', { desc })} fontSize="small" />
        )}
    </div>
)
