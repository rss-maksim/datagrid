import React from 'react'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import './index.scss'

export interface IProps {
  virtualizeOn: boolean
  toggleVirtualize: () => void
}

export const Header = ({ toggleVirtualize, virtualizeOn }: IProps) => (
  <header className="header-container">
    <div className="header-left">Datagrid</div>
    <div className="header-right">
      <FormControlLabel
        control={<Switch checked={virtualizeOn} onChange={toggleVirtualize} color="primary" />}
        label={`Virtualization ${virtualizeOn ? 'On' : 'Off'}`}
      />
    </div>
  </header>
)
