import React from 'react';
import { useParams } from 'react-router';

const DetailPage = () => {

    const params = useParams();
    const sneakId = params.id;

    return (
        <div>
            Detail page of {sneakId} sneak
        </div>
    );
};

export default DetailPage;