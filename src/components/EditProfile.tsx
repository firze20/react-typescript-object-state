import React, { useState } from "react";

import { IProfile } from "./IProfile";

export default function EditProfile() {
  const [profile, setProfile] = useState<IProfile>({});

  const handleChange = ({ target }: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = target as HTMLInputElement;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(JSON.stringify(profile, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={profile.firstName || ""}
        name="firstName"
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        value={profile.lastName || ""}
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
      />
      <input
        value={profile.bday || ""}
        type="date"
        name="bday"
        onChange={handleChange}
      />
      <input
        value={profile.password || ""}
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
