
"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Search, Upload } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Customer = {
  id: number;
  name: string;
  phone: string;
  lastVisit: string;
  totalSpent: number;
  imageUrl: string;
}

export function Customers() {
  const [search, setSearch] = useState("")
  const [sortColumn, setSortColumn] = useState("name")
  const [sortDirection, setSortDirection] = useState("asc")
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: 1,
      name: "John Doe",
      phone: "555-1234",
      lastVisit: "2023-04-15",
      totalSpent: 125.5,
      imageUrl: "https://api.dicebear.com/6.x/initials/svg?seed=JD",
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "555-5678",
      lastVisit: "2023-05-01",
      totalSpent: 89.75,
      imageUrl: "https://api.dicebear.com/6.x/initials/svg?seed=JS",
    },
    {
      id: 3,
      name: "Bob Johnson",
      phone: "555-9012",
      lastVisit: "2023-03-20",
      totalSpent: 67.25,
      imageUrl: "https://api.dicebear.com/6.x/initials/svg?seed=BJ",
    },
    {
      id: 4,
      name: "Sarah Lee",
      phone: "555-3456",
      lastVisit: "2023-06-10",
      totalSpent: 112.0,
      imageUrl: "https://api.dicebear.com/6.x/initials/svg?seed=SL",
    },
    {
      id: 5,
      name: "Tom Wilson",
      phone: "555-7890",
      lastVisit: "2023-02-28",
      totalSpent: 95.5,
      imageUrl: "https://api.dicebear.com/6.x/initials/svg?seed=TW",
    },
    {
      id: 6,
      name: "Emily Davis",
      phone: "555-2345",
      lastVisit: "2023-04-05",
      totalSpent: 80.25,
      imageUrl: "https://api.dicebear.com/6.x/initials/svg?seed=ED",
    },
    {
      id: 7,
      name: "Michael Brown",
      phone: "555-6789",
      lastVisit: "2023-05-25",
      totalSpent: 135.75,
      imageUrl: "https://api.dicebear.com/6.x/initials/svg?seed=MB",
    },
    {
      id: 8,
      name: "Jessica Taylor",
      phone: "555-0123",
      lastVisit: "2023-03-12",
      totalSpent: 72.5,
      imageUrl: "https://api.dicebear.com/6.x/initials/svg?seed=JT",
    },
  ])

  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => customer.name.toLowerCase().includes(search.toLowerCase()))
  }, [customers, search])

  const sortedCustomers = useMemo(() => {
    return filteredCustomers.sort((a: any, b: any) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
      if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
      return 0
    })
  }, [filteredCustomers, sortColumn, sortDirection])

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const handleImageUpload = (customerId: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setCustomers(customers.map(customer => 
          customer.id === customerId 
            ? { ...customer, imageUrl: reader.result as string }
            : customer
        ))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Customer Dashboard</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search customers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 rounded-md bg-background"
          />
        </div>
      </div>
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
                  Name {sortColumn === "name" && <span className="ml-1">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("phone")}>
                  Phone {sortColumn === "phone" && <span className="ml-1">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("lastVisit")}>
                  Last Visit {sortColumn === "lastVisit" && <span className="ml-1">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>}
                </TableHead>
                <TableHead className="cursor-pointer text-right" onClick={() => handleSort("totalSpent")}>
                  Total Spent {sortColumn === "totalSpent" && <span className="ml-1">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={customer.imageUrl} alt={customer.name} />
                        <AvatarFallback>{customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <label htmlFor={`image-upload-${customer.id}`} className="absolute bottom-0 right-0 cursor-pointer">
                        <Upload className="w-4 h-4" />
                        <input
                          id={`image-upload-${customer.id}`}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(customer.id, e)}
                        />
                      </label>
                    </div>
                  </TableCell>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.lastVisit}</TableCell>
                  <TableCell className="text-right">${customer.totalSpent.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
