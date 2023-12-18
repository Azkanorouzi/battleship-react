import React from "react";

export default function TitleContainer({children}: {children: string | React.ReactNode}) {
  return (
    <div className="fixed bg-primary p-2 left-0 right-0 text-center bg-opacity-40 backdrop-blur-lg">
        {children}
    </div>
  )
}
