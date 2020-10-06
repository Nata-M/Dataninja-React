import React, { Fragment } from "react";

function Logo() {
  return (
    <Fragment>
      <div className="bg"><img src={require('../../../photos/cola.png')} alt="" /></div>
      <div className="account">
        <div className="select-account">Select Account</div>
        <div className="account-name">
          Coca Cola <select name="" className="select-logo"></select>
        </div>
      </div>
    </Fragment>
  )
}
export default Logo