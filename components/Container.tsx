import { ReactNode } from "react";
export default function Container({ children }: { children: ReactNode }) {
  return <div className="container-p max-w-6xl mx-auto">{children}</div>;
}
