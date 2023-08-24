import { Link } from "react-router-dom";

function Item({data,addToCart}){

    const {id,title,price,image} = data;
    
    return (
        <div className="card">
            <div className="grid">
                <div className="image">
                    <img src={image} alt=""></img>
                </div>
                <div className="title">
                    <Link to={`/detailproduct/${id}`} className="link titleLink">{title}
                    </Link>
                </div>
                <div className="flex">
                    <span className="price" style={{marginRight:15}}>${price}
                    </span>
                    <div className="cart" onClick={addToCart}>
                        <img className="cartImg" src="/cart.svg" alt=""></img>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Item;