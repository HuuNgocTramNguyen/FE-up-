import React, { Component } from 'react';

export const DataContext = React.createContext();


export class DataProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            cart: [],
            total: 0

        }
    }

    getProduct = () => {
        fetch(`https://5fad338a2ec98b0016047fc3.mockapi.io/list`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    products: json
                })
            })
    }
    addCart = (id) => {
        console.log(66666666, id)

        const { products, cart } = this.state;
        const check = cart.every(item => {
            return item.id !== id
        })
        if (check) {
            const data = products.filter(product => {
                return product.id === id
            })
            this.setState({ cart: [...cart, ...data] })
            alert("add successfull")
            //    this.getTotal();
            //    this.getProduct();
        } else {
            alert("The product has been added to cart! ")
        }

    };

    reduction = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item._id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1
            }
        })
        this.setState({ cart: cart })
        this.getTotal();
    };

    increase = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item._id === id) {
                item.count += 1
            }
        })
        this.setState({ cart: cart })
        this.getTotal();
    };

    removeProduct = id => {
        const { cart } = this.state;
        // const id1=id;
        // eslint-disable-next-line
        if (confirm("You want remove cart...?")) {
            let count = 0;
            cart.forEach((item, index) => {

                if (item._id === id && count === 0) {
                    count += 1;
                    cart.splice(index, 1)

                }
            })

            this.setState({ cart: cart })
            this.getTotal();
        }
    };

    getTotal = () => {
        const { cart } = this.state;
        const res = cart.reduce((prev, item) => {

            return prev + (item.price * item.count);
        }, 33)
        this.setState({ total: res })

    }

    componentDidUpdate() {
        // this.getProduct()
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount() {

        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if (dataCart !== null) {
            this.setState({ cart: dataCart })
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if (dataTotal !== null) {
            this.setState({ total: dataTotal })
        }
        this.getProduct();
    }


    render() {
        const { products, cart, total } = this.state;
        const { addCart, reduction, increase, removeProduct, getTotal } = this;

        return (
            <DataContext.Provider value={{ products, addCart, cart, reduction, increase, removeProduct, getTotal, total }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

