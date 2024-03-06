import { Controller, Get, NotFoundException, Query } from "@nestjs/common";

export interface Product {
    id: string;
    name: string;
    price: number | string;
    description: string;
}

@Controller()
export class AppController {
    products: Product[] = [
        { id: "1", name: "Apple", price: 2.5, description: "Fresh and crisp red apples, per pound." },
        { id: "2", name: "Milk", price: 1.99, description: "1 gallon of whole milk." },
        { id: "3", name: "Eggs", price: 2.49, description: "Dozen large brown eggs." },
        { id: "4", name: "Bread", price: 2.29, description: "Loaf of whole wheat bread." },
        { id: "5", name: "Chicken Breast", price: 5.99, description: "Boneless, skinless chicken breast, per pound." },
        { id: "6", name: "Spinach", price: 1.79, description: "Fresh bunch of organic spinach." },
        { id: "7", name: "Pasta", price: 1.29, description: "Pack of spaghetti pasta." },
        { id: "8", name: "Tomatoes", price: 3.99, description: "Vine-ripened tomatoes, per pound." },
        { id: "9", name: "Cheese", price: 4.49, description: "Block of sharp cheddar cheese." },
        { id: "10", name: "Ground Coffee", price: 7.99, description: "Premium ground coffee for your morning brew." },
    ];
    constructor() {}

    @Get()
    getHello(): string {
        return "Hello, welcome to the Bot API!";
    }

    @Get("product")
    async searchProduct(@Query("name") name: string): Promise<Product> {
        console.log("Called with: ", name);
        const product = this.products.find((product) => product.name.toLowerCase().includes(name.toLowerCase()));
        if (product) {
            console.log("Returning: ", product);
            return { ...product, price: Number(product.price).toFixed(2) };
        }
        console.log("Throwing NotFoundException");
        throw new NotFoundException(`Product with name ${name} not found`);
    }
}
