import { Link } from "react-router-dom";
import "../Styles/PricePlan.css"

function PricePlane({mood}) {
  return (
    <div className="price-plane-container" style={mood?{backgroundColor:'#18181b'}:{backgroundColor:'white'}}>
      <div className="price-planes">
        {/* Column 1 */}
        <div className="price-column" style={{ boxShadow: '10px 9px 0px 0px #86efac' }}>
        <h2 id="hh">3 Month ₹399</h2>
          <p>Get access to hassle-free parking for three months with our premium plan. Enjoy unlimited parking slots, priority booking, and special discounts!</p>
          <Link to={'/Dashboard'} className="price-btn">Buy Now</Link>
        </div>

        {/* Column 2 */}
        <div className="price-column" style={{ boxShadow: '10px 9px 0px 0px #ffbf00' }}>
          <h2 id="hh">6 Month ₹599</h2>
          <p>Unlock exclusive parking spaces across the city with our 3-month plan. No more stress finding a spot in crowded areas!</p>
          <Link to={'/Dashboard'} className="price-btn">Buy Now</Link>
        </div>

        {/* Column 3 */}
        <div className="price-column" style={{ boxShadow: '10px 9px 0px 0px #3296fa' }}>
          <h2 id="hh">12 Month ₹999</h2>
          <p>Enjoy our 12-month parking plan for frequent users. Access multiple locations and save money with our affordable pricing!</p>
          <Link to={'/Dashboard'} className="price-btn">Buy Now</Link>
        </div>
      </div>
    </div>
  );
}

export default PricePlane;
