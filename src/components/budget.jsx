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
        particulars: "Revenue",
        quantity: 139500,
    },
    {
        particulars: "Sponsorship (In-Kinds)",
        quantity: 106200,
    },
    {
        particulars: "Sponsorship (Cash)",
        quantity: 100000,
    },
]

function formatCurrency(value) {
    return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'NPR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).replace('NPR', 'Rs.');
}


export default function Budget() {
    return (
        <div className="flex flex-col items-center justify-center max-w-screen-xl min-h-screen px-4 mx-auto">
            <h1 className="text-4xl mb-24 tracking-[-0.06em] font-semibold">Required Budget from College</h1>
            <div className="w-max">
                <Table className="mb-16 w-max">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[350px] font-bold bg-neutral-700 text-white">Particulars</TableHead>
                            <TableHead className="font-bold text-center text-white bg-neutral-700">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Total Budget</TableCell>
                            <TableCell className="font-medium text-center">Rs. 887,400</TableCell>
                        </TableRow>
                        {data.map((data) => (
                            <TableRow key={data.particulars}>
                                <TableCell className="font-medium">{data.particulars}</TableCell>
                                <TableCell className="text-center">({formatCurrency(data.quantity)})</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell className="font-bold text-black w-[350px]">Total</TableCell>
                            <TableCell className="font-bold text-center text-black">Rs. 541,700</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    )
}