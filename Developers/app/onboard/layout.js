import "../globals.css";
import { lexend } from "../localFont";

export const metadata = {
  title: "Talentyard: Achieving Innovation through Collaboration",
  description: "Building for the next generation",
};

export default function RootLayout({ children }) {
  return (
    <main className={`${lexend.variable}`}>{children}</main>
  );
}
