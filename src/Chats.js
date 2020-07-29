import React from "react";
import Chat from "./Chat";
import "./Chats.css";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="yo whats up!"
        timestamp="40 seconds ago"
        profilePic="https://images.performgroup.com/di/library/omnisport/6d/d2/lionelmessi-cropped_926ayd3kah10122bz2frjwfvv.jpg?t=1107407133&quality=100"
      />
      <Chat
        name="Elen"
        message="Hello"
        timestamp="1 hour ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"
      />
      <Chat
        name="pari"
        message="Nice!"
        timestamp="46 seconds ago"
        profilePic="https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2019/06/11/parineeti.jpg?itok=-Ei62BmZ"
      />
      <Chat
        name="dq"
        message="yo where are you"
        timestamp="3 days ago"
        profilePic="https://th.bing.com/th/id/OIP.ANJ-QOEOMjpNuJm8OnTvsQHaIG?pid=Api&rs=1"
      />

    </div>
  );
};

export default Chats;
