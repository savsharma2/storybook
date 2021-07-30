import React from "react";

import _get from "lodash/get";
import moment from "moment";

const B = () => {
    let x= {};
    const res1 = _get(x, 'a.v.b');
    const res = moment().format('MMMM Do YYYY, h:mm:ss a');
    return <div>{res}</div>;
};

export default B;