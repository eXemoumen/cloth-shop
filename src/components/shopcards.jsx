
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

export default function Shopping() {
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({
    size: [],
    color: [],
    priceRange: [0, 100],
  });
  const products = [
    {
      id: 1,
      name: "Classic Tee",
      description: "A timeless and versatile t-shirt",
      price: 24.99,
      image:  "/vercel.svg",
      size: ["S", "M", "L", "XL"],
      color: ["black", "white", "gray"],
    },
    {
      id: 2,
      name: "Graphic Tee",
      description: "A stylish t-shirt with a bold graphic design",
      price: 29.99,
      image:  "/vercel.svg",
      size: ["S", "M", "L", "XL", "XXL"],
      color: ["navy", "olive", "burgundy"],
    },
    {
      id: 3,
      name: "Vintage Tee",
      description: "A retro-inspired t-shirt with a worn-in look",
      price: 22.99,
      image:  "/vercel.svg",
      size: ["M", "L", "XL"],
      color: ["heather", "mustard", "charcoal"],
    },
    {
      id: 4,
      name: "Organic Tee",
      description: "A sustainable and eco-friendly t-shirt",
      price: 27.99,
      image:  "/vercel.svg",
      size: ["S", "M", "L", "XL", "XXL"],
      color: ["natural", "sage", "indigo"],
    },
    {
      id: 5,
      name: "Striped Tee",
      description: "A classic striped t-shirt with a modern twist",
      price: 25.99,
      image:  "/vercel.svg",
      size: ["S", "M", "L", "XL"],
      color: ["navy", "red", "black"],
    },
    {
      id: 6,
      name: "Pocket Tee",
      description: "A simple t-shirt with a functional pocket",
      price: 19.99,
      image:  "/vercel.svg",
      size: ["S", "M", "L", "XL"],
      color: ["heather", "olive", "white"],
    },
  ];
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const inSizeRange =
        filters.size.length === 0 || filters.size.includes(product.size);
      const inColorRange =
        filters.color.length === 0 || filters.color.includes(product.color);
      const inPriceRange =
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1];
      return inSizeRange && inColorRange && inPriceRange;
    });
  }, [filters]);
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };
  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };
  const handleFilterChange = (type, value) => {
    setFilters({
      ...filters,
      [type]: value,
    });
  };
  return (
    <div className="flex flex-col min-h-screen">
      <header className=" py-6 shadow">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="relative">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white"
                onClick={() => setCart([])}
              >
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="sr-only">Cart</span>
                {cart.length > 0 && (
                  <Badge variant="filled" className="absolute -top-2 -right-2 ">
                    {cart.length}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className=" py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="flex flex-col items-start justify-center"></div>
              <div className="relative"></div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">
                Browse Our T-Shirt Collection
              </h2>
              <div className="flex items-center gap-4">
                <Label htmlFor="size">Size:</Label>
                <Select
                  id="size"
                  defaultValue=""
                  onValueChange={(e) =>
                    handleFilterChange("size", e.target.value.split(","))
                  }
                >
                  <SelectTrigger className="w-32 bg-white">
                    <SelectValue className="bg-white" placeholder="All Sizes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="chose">All Sizes</SelectItem>
                    <SelectItem value="S,M,L,XL,XXL">All Sizes</SelectItem>
                    <SelectItem value="S">Small</SelectItem>
                    <SelectItem value="M">Medium</SelectItem>
                    <SelectItem value="L">Large</SelectItem>
                    <SelectItem value="XL">X-Large</SelectItem>
                    <SelectItem value="XXL">XX-Large</SelectItem>
                  </SelectContent>
                </Select>
                <Label htmlFor="color">Color:</Label>
                <Select
                  id="color"
                  defaultValue=""
                  onValueChange={(e) =>
                    handleFilterChange("color", e.target.value.split(","))
                  }
                >
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="All Colors" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="chose">All Colors</SelectItem>
                    <SelectItem value="black,white,gray">All Colors</SelectItem>
                    <SelectItem value="black">Black</SelectItem>
                    <SelectItem value="white">White</SelectItem>
                    <SelectItem value="gray">Gray</SelectItem>
                    <SelectItem value="navy,olive,burgundy">
                      Navy, Olive, Burgundy
                    </SelectItem>
                    <SelectItem value="heather,mustard,charcoal">
                      Heather, Mustard, Charcoal
                    </SelectItem>
                    <SelectItem value="natural,sage,indigo">
                      Natural, Sage, Indigo
                    </SelectItem>
                    <SelectItem value="navy,red,black">
                      Navy, Red, Black
                    </SelectItem>
                    <SelectItem value="heather,olive,white">
                      Heather, Olive, White
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Label htmlFor="price">Price:</Label>
                <div>
                  <div>
                    <div />
                  </div>
                  <div />
                  <div />
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src="/vercel.svg"
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-2xl font-bold">
                        ${product.price}
                      </span>
                      <Button
                        size="sm"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className=" py-6 shadow">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <p className="text-gray-500 dark:text-gray-400">
            &copy; 2024 T-Shirt Store. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
              prefetch={false}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
              prefetch={false}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed bottom-4 right-4 z-50 shadow-lg"
          >
            {cart.length > 0 && (
              <Badge variant="filled" className="absolute -top-2 left-2 ">
                {cart.length}
              </Badge>
            )}
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="sr-only">Cart</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Your Cart</h3>

            
            </div>
            {cart.length === 0 ? (
              <div className="text-center text-gray-500 dark:text-gray-400">
                Your cart is empty.
              </div>
            ) : (
              <div className="grid gap-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src="/vercel.svg"
                        alt={item.name}
                        width={64}
                        height={64}
                        className="rounded-md"
                      />
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      <XIcon className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
            <div className="flex items-center justify-between border-t pt-4">
              <span className="text-lg font-bold">
                Total: ${cart.reduce((total, item) => total + item.price, 0)}
              </span>
              <Button size="lg">Checkout</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ShoppingCartIcon(props) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
