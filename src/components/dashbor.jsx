
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function dashbor() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-slate-100/40 lg:block dark:bg-slate-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
              <ShirtIcon className="h-6 w-6" />
              <span className="">Tee Store</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-slate-100 px-3 py-2 text-slate-900  transition-all hover:text-slate-900 dark:bg-slate-800 dark:text-slate-50 dark:hover:text-slate-50"
                prefetch={false}
              >
                <HomeIcon className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 transition-all hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50"
                prefetch={false}
              >
                <PackageIcon className="h-4 w-4" />
                Products
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 transition-all hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50"
                prefetch={false}
              >
                <UsersIcon className="h-4 w-4" />
                Customers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 transition-all hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50"
                prefetch={false}
              >
                <LineChartIcon className="h-4 w-4" />
                Analytics
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-500 transition-all hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50"
                prefetch={false}
              >
                <SettingsIcon className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-slate-100/40 px-6 dark:bg-slate-800/40">
          <div className="w-full flex-1">
            <h1 className="font-semibold text-lg md:text-2xl">Dashboard</h1>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full border border-slate-200 w-8 h-8 dark:border-slate-800">
                <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Total Sales</CardTitle>
                <CardDescription>The total revenue generated from all product sales.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">$125,345</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Active Customers</CardTitle>
                <CardDescription>The number of customers who have made a purchase in the last 30 days.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">2,345</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Inventory Level</CardTitle>
                <CardDescription>The total number of products currently in stock.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">4,567</div>
              </CardContent>
            </Card>
          </div>
          <div className="border shadow-sm rounded-lg">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Add New Product</CardTitle>
                <CardDescription>Fill out the form to add a new product to your store.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Product Name</Label>
                    <Input id="name" placeholder="Enter product name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Enter product description" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="price">Price</Label>
                    <Input id="price" type="number" placeholder="Enter product price" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="image">Product Image</Label>
                    <Input id="image" type="file" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="size">Available Sizes</Label>
                    <RadioGroup id="size" defaultValue="m" className="flex items-center gap-2">
                      <Label
                        htmlFor="size-xs"
                        className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-slate-100 dark:[&:has(:checked)]:bg-slate-800"
                      >
                        <RadioGroupItem id="size-xs" value="xs" />
                        XS
                      </Label>
                      <Label
                        htmlFor="size-s"
                        className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-slate-100 dark:[&:has(:checked)]:bg-slate-800"
                      >
                        <RadioGroupItem id="size-s" value="s" />
                        S
                      </Label>
                      <Label
                        htmlFor="size-m"
                        className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-slate-100 dark:[&:has(:checked)]:bg-slate-800"
                      >
                        <RadioGroupItem id="size-m" value="m" />
                        M
                      </Label>
                      <Label
                        htmlFor="size-l"
                        className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-slate-100 dark:[&:has(:checked)]:bg-slate-800"
                      >
                        <RadioGroupItem id="size-l" value="l" />
                        L
                      </Label>
                      <Label
                        htmlFor="size-xl"
                        className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-slate-100 dark:[&:has(:checked)]:bg-slate-800"
                      >
                        <RadioGroupItem id="size-xl" value="xl" />
                        XL
                      </Label>
                    </RadioGroup>
                  </div>
                  <Button type="submit" className="justify-self-end">
                    Add Product
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LineChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}


function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function ShirtIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
