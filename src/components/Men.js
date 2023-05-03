import React, { useState, useEffect } from "react";
import banner from "./reso/men-header.png";
import Loader from "./loader";
import axios from "axios";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import data from "../data.js"
import "./Men.css";
const Men = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState("men's clothing");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProd = async () => {
    try {
      console.log(value);
      setLoading(true);
      // const url = `https://fakestoreapi.com/products`;
      // const response = await axios.get(url);
      // const Data = await response.data;
      setProducts(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProd();
  }, [value]);
  const dispatch=useDispatch();
  const handle=(item)=>{
    dispatch(add(item))
  }
  return (
    <>
      <div className="men">
        <div
          className="men-header"
          style={{
            minWidth: "32rem",
            minHeight: "40rem",
            // backgroundImage: "url(" + S1 + ")",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundImage: "url(" + banner + ")",
          }}
        >
          {/* <img src={banner} alt="banner" /> */}
        </div>

        <div className="section">
          <div className={isVisible ? "up filt" : "side filt"}>
            <FormatAlignLeftIcon
              onClick={() => setIsVisible(!isVisible)}
              className="filter-icon"
            />
            {/* <p>FILTER</p> */}

            {isVisible && (
              <div className="filter-menu">
                <button
                  value="OUTERWEAR"
                  onClick={(e) => setValue(e.target.value)}
                >
                  OUTERWEAR
                </button>
                <button
                  value="JACKET & SUITS"
                  onClick={(e) => setValue(e.target.value)}
                >
                  JACKET & SUITS
                </button>
                <button
                  value="BLAZERS"
                  onClick={(e) => setValue(e.target.value)}
                >
                  BLAZERS
                </button>
                <button value="BELT" onClick={(e) => setValue(e.target.value)}>
                  BELT
                </button>
                <button value="PANTS" onClick={(e) => setValue(e.target.value)}>
                  PANTS
                </button>
                <button
                  value="T-SHIRTS"
                  onClick={(e) => setValue(e.target.value)}
                >
                  T-SHIRTS
                </button>
                <button
                  value="TROUSER"
                  onClick={(e) => setValue(e.target.value)}
                >
                  TROUSER
                </button>
                <button value="CAPS" onClick={(e) => setValue(e.target.value)}>
                  CAPS
                </button>
                <button
                  value="SWEATERS"
                  onClick={(e) => setValue(e.target.value)}
                >
                  SWEATERS
                </button>
              </div>
            )}

            <MoreHorizIcon className="more" />
          </div>
          <ul className="no-of-prod">
            <li>{products.length + 3} </li>
            <li>20 </li>
          </ul>
          <div className="filer-head">
            <div
              className="heading"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "96%",
                // paddingBottom:"-5px"
              }}
            >
              <h3 style={{ marginLeft: "25px" }}>{value}</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "13%",
                }}
              >
                <h5 style={{ fontSize: "2vh", cursor: "pointer" }}>SEARCH</h5>
                <h5 style={{ fontSize: "2vh", cursor: "pointer" }}>SORT</h5>
              </div>
            </div>
            <div id="top-prod">
              <div className="prod_item_top">
                <img src="https://static.zara.net/photos///2023/V/0/2/p/6987/430/620/2/w/457/6987430620_2_1_1.jpg?ts=1674219007800" />
                <div className="prod-detail_men">
                  <p className="title">Milky midi Dress</p>
                  <p className="price">&#8364;41</p>
                </div>
              </div>
              {/* <div className="prod_item_top">
                <img src="https://cdn.shopify.com/s/files/1/0371/0504/1547/products/2515188.jpg?v=1675763592" />
                <div className="cart-icon">
                  <ShoppingCartOutlinedIcon className="cart" />
                  <FavoriteBorderOutlinedIcon className="fav" />
                </div>
              </div> */}
              <div className="prod_item_top">
                <img src="https://static.zara.net/photos///2023/V/0/2/p/4143/575/800/2/w/457/4143575800_2_1_1.jpg?ts=1674650290701" />
                <div className="prod-detail_men">
                  <p className="title">Light blue fit jeans</p>
                  <p className="price">&#8364;23</p>
                </div>
              </div>
            </div>
            <div id="prodi">
              {products.map((item, index) => (
                <div key={item.id} className="prod_item_wom">
                  <img src="https://cdn.shopify.com/s/files/1/0371/0504/1547/products/2mood-13-06-202179460_1.jpg?v=1675763599" />
                  <div className="cart-icon">
                    <ShoppingCartOutlinedIcon className="cart" onClick={()=>handle(item)} />
                    <FavoriteBorderOutlinedIcon className="fav" />
                  </div>
                  <div className="item-data-women">
                    <h3>{item.title.slice(0, 24)}</h3>
                    <h5>
                      <span>&#8364;</span>
                      {item.price}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Men;
