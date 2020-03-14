import React from 'react'
import classnames from 'classnames'

import { IKeyValue } from '../../../common'

interface IProps {
  children: string
  classname?: string
  style?: IKeyValue<string | number> | undefined
}

export const Cell = ({ children, classname, style }: IProps) => (
  <div className={classnames('grid-cell', classname)} style={style}>
    <span className="inner-grid-cell">{children}</span>
  </div>
)
