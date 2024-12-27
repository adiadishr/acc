import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const data = [
    {
        particulars: "AP",
        rate: 20000,
        quantity: 4,
        days: 3,
        total: 50000,
        remarks: "3 from rent @ 6,666.67 each for a day and one from college"
    },
    {
        particulars: "Call expenses",
        rate: null,
        quantity: null,
        days: null,
        total: 5000,
        remarks: ""
    },
    {
        particulars: "Digital Board",
        rate: 400,
        quantity: 8,
        days: 3,
        total: 60000,
        remarks: ""
    },
    {
        particulars: "Stalls",
        rate: 2000,
        quantity: 5,
        days: 3,
        total: 30000,
        remarks: "Stall rent for all 3 days (10/10)"
    },
    {
        particulars: "Prizepool",
        rate: null,
        quantity: null,
        days: null,
        total: 111000,
        remarks: ""
    },
    {
        particulars: "Flex printing",
        rate: null,
        quantity: null,
        days: null,
        total: 42850,
        remarks: ""
    },
    {
        particulars: "General Printing",
        rate: null,
        quantity: null,
        days: null,
        total: 29850,
        remarks: ""
    },
    {
        particulars: "Fuel & Transportation",
        rate: null,
        quantity: null,
        days: null,
        total: 15000,
        remarks: "Fuel for commuting, transportation for mattresses and TV"
    },
    {
        particulars: "Trophy",
        rate: null,
        quantity: null,
        days: null,
        total: 42600,
        remarks: "For the winners of the total event"
    },
    {
        particulars: "Token of Love for College and Sponsors",
        rate: 550,
        quantity: 60,
        days: null,
        total: 33500,
        remarks: "-"
    },
    {
        particulars: "Speakers & mic",
        rate: 3000,
        quantity: 1,
        days: 2,
        total: 6000,
        remarks: "Rent"
    },
    {
        particulars: "TV",
        rate: 5000,
        quantity: 2,
        days: 3,
        total: 30000,
        remarks: "Aiming for sponsorship"
    },
    {
        particulars: "Decorations and stationery",
        rate: 30000,
        quantity: null,
        days: null,
        total: 30000,
        remarks: ""
    },
    {
        particulars: "Food",
        rate: 150,
        quantity: 35,
        days: 3,
        total: 15750,
        remarks: "Food for volunteers from other clubs in stall"
    },
    {
        particulars: "Technical Funds Reserve",
        rate: null,
        quantity: null,
        days: null,
        total: 10000,
        remarks: "Reserve for wires and cables"
    },
    {
        particulars: "Canteen",
        rate: null,
        quantity: null,
        days: 3,
        total: 65400,
        remarks: "Food for Ideathon participants and club members for 3 days"
    },
    {
        particulars: "Mattress, Blanket, Bedsheet",
        rate: null,
        quantity: null,
        days: null,
        total: 55000,
        remarks: "-"
    },
    {
        particulars: "Games for ideathon participants",
        rate: null,
        quantity: null,
        days: null,
        total: 5000,
        remarks: "For recreation room"
    },
    {
        particulars: "Stall for Stumble Guys",
        rate: 10000,
        quantity: 1,
        days: 3,
        total: 30000,
        remarks: "Big stall for Stumble Guys"
    },
    {
        particulars: "Round Table",
        rate: null,
        quantity: 8,
        days: 3,
        total: 9000,
        remarks: "-"
    },
    {
        particulars: "Game Purchases",
        rate: null,
        quantity: null,
        days: null,
        total: 15000,
        remarks: "Aiming for sponsorship"
    },
    {
        particulars: "Miscellaneous",
        rate: null,
        quantity: null,
        days: null,
        total: 10000,
        remarks: "Emergency fund"
    },
    {
        particulars: "Plastic Chairs",
        rate: 3000,
        quantity: null,
        days: null,
        total: 3000,
        remarks: "For 32 players"
    },
    {
        particulars: "Merchandise",
        rate: null,
        quantity: null,
        days: null,
        total: 16200,
        remarks: "-"
    },
    {
        particulars: "Mat for Mattress",
        rate: null,
        quantity: null,
        days: null,
        total: 15000,
        remarks: ""
    },
    {
        particulars: "Refreshment and Snacks",
        rate: 250,
        quantity: 60,
        days: 3,
        total: 45000,
        remarks: "Aiming for sponsorship"
    },
    {
        particulars: "Judges",
        rate: 4000,
        quantity: 3,
        days: 4,
        total: 48000,
        remarks: "-"
    },
    {
        particulars: "Cellular Data for Stumble Guys",
        rate: 50,
        quantity: 150,
        days: 2,
        total: 15000,
        remarks: ""
    },
    {
        particulars: "Heater",
        rate: 500,
        quantity: 6,
        days: 3,
        total: 9000,
        remarks: ""
    },
    {
        particulars: "Mentor",
        rate: 2000,
        quantity: 3,
        days: 8,
        total: 36000,
        remarks: "-"
    }
]

export default function Budget() {
    return (
        <div className="flex flex-col items-center justify-center max-w-screen-xl min-h-screen px-4 mx-auto">
            <h1 className="text-4xl mb-24 tracking-[-0.06em] font-semibold">Budget</h1>
            <Table className="mb-24">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[350px] font-bold text-black">Particulars</TableHead>
                        <TableHead className="font-bold text-center text-black">Rate</TableHead>
                        <TableHead className="font-bold text-center text-black">Quantity</TableHead>
                        <TableHead className="font-bold text-center text-black">Days</TableHead>
                        <TableHead className="font-bold text-black">Remarks</TableHead>
                        <TableHead className="font-bold text-center text-black">Total</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((data) => (
                        <TableRow key={data.particulars}>
                            <TableCell className="font-medium">{data.particulars}</TableCell>
                            <TableCell className="text-center">{data.rate ? "Rs." : "-"}{data.rate}</TableCell>
                            <TableCell className="text-center">{data.quantity}</TableCell>
                            <TableCell className="text-center">{data.days}</TableCell>
                            <TableCell>{data.remarks}</TableCell>
                            <TableCell className="text-center">Rs.{data.total}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell className="font-bold text-black" colSpan={5}>Total</TableCell>
                        <TableCell className="font-bold text-center text-black">Rs.839,150</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}