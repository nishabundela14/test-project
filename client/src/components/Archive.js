import React from 'react';
import './Archive.scss';

const Archive = ({fetchArchiveAPI, label, classname}) => {
    // let reducer = (state, action) => {
    //     switch (action.type){
    //         case 'ARCHIVED':
    //             if (state.show === true) {
    //                 fetchArchiveAPI(false)
    //                 return {
    //                     classname: 'btn-hide-ar',
    //                     show: false,
    //                     label:'Hide Archived'
    //                 }
    //             } else {
    //                 fetchArchiveAPI(true)
    //                 return {
    //                     classname: 'btn-show-ar',
    //                     show: true,
    //                     label:'Show Archived'
    //                 }
    //             }
    //         default:
    //             return state;
    //     }

    // }
    

    // const [state, dispatch] = useReducer(reducer, {
    //     classname: 'btn-show-ar',
    //     show: true,
    //     label:'Show Archived'
    // })

   
    return (
        <div className="archive">
            <button className={classname} onClick={fetchArchiveAPI}>
                <span></span>{label}
            </button>
        </div>
    )
}

export default Archive
