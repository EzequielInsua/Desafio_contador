import React, {useState} from "react";
import "./ItemCount.css";

const product = {
    name: "Product 1",
    price: "$100",
    quantity: 1,
    stock: 9
} 

const ItemCount = () => {
    const [count, setCount] = useState(product.quantity);
    const [stock, setStock] = useState(product.stock-1);
    console.log(count);
    console.log(stock);

        const onDecrement = () => {
            if (count > 1){
                setCount(count - 1);
                setStock(stock + 1);
            }
            else{
                setCount(1);
                setStock(product.stock-1);
            }
        }

        const onIncrement = () => {
            if (count < product.stock){
                setCount(count + 1);
                setStock(stock - 1);
            }
            else{
                setCount(product.stock);
                setStock(0);
            }            
        }

        const reset = () => {
            setCount(product.quantity);
            setStock(product.stock-1);
        }
        
    return (
        <div class="item-count">
            <div class="btn-group" role="group" aria-label="Basic outlined example">
                <button type="buttom" class="btn btn-outline-dark" onClick={onDecrement}>-</button>
                <span class="count">{count}</span>
                <button type="buttom" class="btn btn-outline-dark" onClick={onIncrement}>+</button>
                <button type="buttom" class="btn btn-outline-dark" onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default ItemCount;