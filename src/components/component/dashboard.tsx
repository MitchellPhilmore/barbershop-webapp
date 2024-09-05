import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Appointments } from "./appointments";
import { Customers } from "./customers";
import { AdminProductList } from "./admin-product-list";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DollarSign, Scissors, Star, Users } from "lucide-react";

interface DashboardProps {
  onSignOut: () => Promise<void>;
}

export function Dashboard({ onSignOut }: DashboardProps) {
  const [currentView, setCurrentView] = useState("dashboard");

  const handleNavigation = (view: string) => {
    setCurrentView(view);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <header className="flex items-center h-16 px-4 border-b border-muted shrink-0 md:px-6">
        <div className="flex items-center gap-4">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/path-to-avatar-image.jpg" alt="User avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            prefetch={false}
          >
            <Scissors className="w-6 h-6" />
            <span className="sr-only">Barber Shop</span>
          </Link>
          <nav className="hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              href="#"
              className={
                currentView === "dashboard"
                  ? "font-bold"
                  : "text-muted-foreground"
              }
              onClick={() => handleNavigation("dashboard")}
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className={
                currentView === "appointments"
                  ? "font-bold"
                  : "text-muted-foreground"
              }
              onClick={() => handleNavigation("appointments")}
            >
              Appointments
            </Link>
            <Link
              href="#"
              className={
                currentView === "customers"
                  ? "font-bold"
                  : "text-muted-foreground"
              }
              onClick={() => handleNavigation("customers")}
            >
              Customers
            </Link>
            <Link
              href="#"
              className={
                currentView === "products"
                  ? "font-bold"
                  : "text-muted-foreground"
              }
              onClick={() => handleNavigation("products")}
            >
              Products
            </Link>
          </nav>
        </div>
        <button
          onClick={onSignOut}
          className="ml-auto text-sm text-muted-foreground hover:text-foreground"
        >
          Sign Out
        </button>
      </header>
      <main className="flex flex-col flex-1 gap-8 p-4 md:gap-10 md:p-10">
        {currentView === "dashboard" && (
          <>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Weekly Sales
                  </CardTitle>
                  <DollarSign className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,345.67</div>
                  <p className="text-xs text-muted-foreground">
                    +5.2% from last week
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Customers Served
                  </CardTitle>
                  <Users className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+456</div>
                  <p className="text-xs text-muted-foreground">
                    +7.1% from last week
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Average Customer Satisfaction
                  </CardTitle>
                  <Star className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.8/5</div>
                  <p className="text-xs text-muted-foreground">
                    +0.2 from last week
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Revenue per Barber
                  </CardTitle>
                  <DollarSign className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$2,345.67</div>
                  <p className="text-xs text-muted-foreground">
                    +3.4% from last week
                  </p>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader className="px-7">
                <CardTitle>Barber Performance</CardTitle>
                <CardDescription>
                  Metrics for each barber in the shop.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Barber</TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Customers
                      </TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Revenue
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Satisfaction
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">John Doe</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        125
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        $3,456.78
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        4.9/5
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Jane Smith</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">98</TableCell>
                      <TableCell className="hidden sm:table-cell">
                        $2,789.12
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        4.7/5
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Bob Johnson</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        112
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        $3,012.34
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        4.8/5
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Sarah Lee</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">90</TableCell>
                      <TableCell className="hidden sm:table-cell">
                        $2,567.89
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        4.6/5
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </>
        )}
        {currentView === "appointments" && <Appointments />}
        {currentView === "customers" && <Customers />}
        {currentView === "products" && <AdminProductList />}
      </main>
    </div>
  );
}
