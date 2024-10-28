import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Designo | Contact",
    description: "Dirk Brandon Lapitan. Canada — Designo Central Office — 3886 Wellington Street Toronto, Ontario M9C 3J5. Contact — P : +1 253-863-8967, M : contact@designo.co. Australia — Designo AU Office — 19 Balonne Street New South Wales 2443. Contact — P : (02) 6720 9092, M : contact@designo.au. United Kingdom — Designo UK Office 13  Colorado Way Rhyd-y-fro SA8 9GA. Contact — P : (02) 6720 9092, M : contact@designo.au"
  };

export default function LocationsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <>
            {children}
        </>
    );
}