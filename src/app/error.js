"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex justify-center bg-slate-200 text-center flex-col items-center">
      <div>
        <p>Oh no an error occurred!</p>
        <button onClick={function () {reset();}}>Click here to refresh the page</button>
      </div>
    </div>
  );
}
