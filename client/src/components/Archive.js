import React from 'react';
import './Archive.scss';

const Archive = ({fetchArchiveAPI, label, classname}) => {
    return (
        <div className="archive">
            <button className={classname} onClick={fetchArchiveAPI}>
                <span></span>{label}
            </button>
        </div>
    )
}

export default Archive
