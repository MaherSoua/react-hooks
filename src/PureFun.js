import React, { useEffect, useState } from "react";

export default function PureFun() {

  let [message, setMessage] = useState("Init message")
  useEffect(() => {
    setMessage("Updated new value")
  });

  return (
    <div id="pureFunContainer">{message}</div>
  )

}
