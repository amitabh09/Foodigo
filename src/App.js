import Carausel from "./Components/Carausel";
import Navbar from "./Components/Navbar";

const App = () => {
    const x = [
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/13/f3f47efa-ba21-4a97-896c-e4ec35ff2c55_PCTileCakesDesserts.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/13/f3f47efa-ba21-4a97-896c-e4ec35ff2c55_PCTileCakesDesserts.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/13/f3f47efa-ba21-4a97-896c-e4ec35ff2c55_PCTileCakesDesserts.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/13/f3f47efa-ba21-4a97-896c-e4ec35ff2c55_PCTileCakesDesserts.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/13/f3f47efa-ba21-4a97-896c-e4ec35ff2c55_PCTileCakesDesserts.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png"
      ];
      const carouselArray = [
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/13/f3f47efa-ba21-4a97-896c-e4ec35ff2c55_PCTileCakesDesserts.png",
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
        "https://picsum.photos/seed/picsum/200/300",
        "https://picsum.photos/id/237/200/300",
        "https://picsum.photos/200/300?grayscale",
        "https://picsum.photos/200/300/?blur",
        "https://picsum.photos/id/870/200/300?grayscale&blur=2",
        "https://picsum.photos/200/300",
        "https://picsum.photos/201/300",
        "https://picsum.photos/202/300"
      ];
    return(<>
        <Navbar />
        <Carausel carouselArray={carouselArray}/>
    </>);
}

export default App;