"use client";

export default function Message(props: { message: string }) {
  return (
    <div className="rounded px-4 py-2 ring-1 ring-red-FF6B6B padding-2 mb-4">
      <p className="text-sm font-normal text-red-FF6B6B">{props.message}</p>
    </div>
  );
}
