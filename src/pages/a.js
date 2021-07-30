import React from "react";
// import _get from "lodash/get";

import { connect, useSelector, ACTION_INCREMENT, useDispatch } from "../redux";

const A = () => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: ACTION_INCREMENT });
  };

  const counter = useSelector((state) => state.counter);

  let x = {};
  //   const res = _get(x, "a.v.b");
  return (
    <div
      onClick={() => {
        increment();
      }}
    >
      A {counter}
    </div>
  );
};

export default A;

// const mapStateToProps = (state) => {
//     return { counter: state.counter };
//   };

//   const mapDispatchToProps = (dispatch) => {
//     return {
//       increment: () => {
//         dispatch({type: ACTION_INCREMENT});
//       }
//     };
//   };
// export default connect(mapStateToProps, mapDispatchToProps)(A);
