// import Image from "next/image";

// https://www.calligraphr.com/en/
//
export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <h1>First load</h1>

      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="50" y="50" width="100" height="120" rx="15" fill="#4D6850" />
        <path
          d="M60 50C60 35 70 30 85 30H115C130 30 140 35 140 50"
          stroke="#4D6850"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M70 100L130 100"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M70 120L130 120"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
