import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {

    const {id} = useParams();

    return (
        <div>
            Detailページやで({id})
        </div>
    )
}

export default Detail
