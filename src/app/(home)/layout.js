import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "Web Hacking",
    "Reversing",
    "Develoment",
    "IOT Hacking",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
