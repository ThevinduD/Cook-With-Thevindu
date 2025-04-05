import React from "react";

export default function Inbox() {
    
    const [unread, setUnread] = React.useState([1]);

    return (
        <>
          {unread.length ? <h1>You have {unread.length} unread msg</h1> : <p>You have No unread msg</p>}
        </>        
    )
}