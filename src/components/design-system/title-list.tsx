import type React from "react";

interface TitleListProps<T> {
  title: string;
  render: (item: T) => React.ReactNode;
  items: T[];
}

function TitleList<T>({ title, render, items }: TitleListProps<T> = { title: "", render: () => null, items: [] }) {
  return (
    <div className="flex flex-col gap-2 py-4">
      <span className="text-lg font-semibold">{title}</span>
      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <span key={index}>{render(item)}</span>
        ))}
      </div>
    </div>
  )
}

export default TitleList 