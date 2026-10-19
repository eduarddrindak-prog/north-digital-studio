import ProductsHero from "../../components/Products/Hero/Hero";
import Bread from "../../components/Products/Bread/Bread";
import Viennoiseries from "../../components/Products/Viennoiseries/Viennoiseries";
import Pastries from "../../components/Products/Pastries/Pastries";
import ProductsLunch from "../../components/Products/Lunch/Lunch";
import SpecialOrdersCta from "../../components/Products/SpecialOrdersCta/SpecialOrdersCta";
import "./Products.css";

export default function Products() {
  return <div className="lenoir-products-page"><ProductsHero /><Bread /><Viennoiseries /><Pastries /><ProductsLunch /><SpecialOrdersCta /></div>;
}
