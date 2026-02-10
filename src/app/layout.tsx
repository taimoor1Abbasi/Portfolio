import "@/styles/global.css";
import { AppShell } from "./shell";

export default function RootLayout({ children }: { children: React.ReactNode }) {


    return (
        <html lang="en">
            <body className="text-white">
                <AppShell children={children} />
            </body>
        </html>
    );
}
