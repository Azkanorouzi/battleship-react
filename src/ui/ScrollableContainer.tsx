import React from "react";

interface ScrollableContainerProps {
    customStyle?: string,
    axis?: 'x' | 'y' | 'xy',
    children: string | React.ReactNode,
}
export default function ScrollableContainer({customStyle, axis = 'y', children}: ScrollableContainerProps) {
  return (
    <section className={`h-96 relative flex ${axis === 'y' ? 'flex-col overflow-y-scroll' : axis === 'x' ? 'flex-row overflow-x-scroll' : 'flex-row overflow-scroll'} gap-5 ${customStyle}`}>
        {children}
    </section>
  )
}
