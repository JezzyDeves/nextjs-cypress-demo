"use client";

import React from "react";

type Props = { name?: string; id?: string };

export default function TextInput({ name, id }: Props) {
  return (
    <>
      <input
        className="p-2 rounded border shadow-inner shadow-gray-500"
        type="text"
        name={name}
        id={id}
      />
    </>
  );
}
