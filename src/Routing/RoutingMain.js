import { Route, Routes, Link, NavLink } from 'react-router-dom';
import { useParams, withRouter } from "react-router";

export default function RoutingMain()
{
    return <div>
        <Routes>
            <Route path="/" element={ <Home/> }></Route>
            <Route path="/about1" element={ <About/> }></Route>
            <Route path="/contact" element={ <Contact/> }></Route>
            
            <Route path="/products" element={ <ProductList/> }></Route>

            <Route path="/product/:productId" element={ <ProductDetail/> }></Route>
            {/* <Route exact path="/product/:productId" component={ProductDetail} /> */}
        
            <Route path ="*" element= {<PageNotFound />}/>
        </Routes>
    </div>
}

export function Home()
{
    return <h1>This is Home Page</h1>
}

export function About()
{
    return <h1>This is About Page</h1>
}

export function Contact()
{
    return <h1>This is Contact Page</h1>
}

export function PageNotFound()
{
    return <h1>Page Not Found</h1>
}


const products = [

    {id:1, name:'Samsung', model: 'S10', price:12000},
    {id:2, name:'Vivo', model: 'V10', price:9000},
    {id:3, name:'Iphone', model: 'I10', price:40000}

];

export function ProductList()
{
    return <>
    
        <h3>Products List</h3>
        {
            products.map((item) => (
                <h5 key={item.id}>
                    Name: <NavLink to={"/product/" + item.id}> {item.name} </NavLink> Price: {item.price}
                </h5>
            )
            )
        }
    
    </>
}

const ProductDetail = ({ match, location }) => {
    //const { params: { productId } } = match;
    
    const params = useParams();
    console.log(params);
    return <h1>This is ProductDetail Page {params.name}</h1>
    // return 
    //   <>
    //     <p>
    //       <strong>Product ID: </strong>
    //       {params}
    //     </p>
    //     <p>
    //       <strong>Product Name: </strong>
    //       {products[params.id].name}
    //     </p>
    //   </>
    
  };