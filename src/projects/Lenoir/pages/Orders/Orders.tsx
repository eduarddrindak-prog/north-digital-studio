import OrdersHero from "../../components/Orders/Hero/Hero";
import OrderCategories from "../../components/Orders/Categories/Categories";
import OrderProcess from "../../components/Orders/Process/Process";
import OrderForm from "../../components/Orders/Form/Form";
import "./Orders.css";

export default function Orders(){return <div className="lenoir-orders-page"><OrdersHero /><OrderCategories /><OrderProcess /><OrderForm /></div>}
