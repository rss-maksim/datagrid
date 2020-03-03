import React from 'react';

import './index.scss'

interface IProps {
    changeLanguage: (lang: string) => () => void
}

export const Header = ({ changeLanguage }: IProps) => (
    <header className="header-container">
        <div className="header-left">Datagrid</div>
        <div className="header-right" onClick={changeLanguage('ru')}>Github</div>
    </header>
);
