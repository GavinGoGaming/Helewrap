import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main>
        <div className="logo-split">
          <img src="/brand/Square.png" height={150} />
          <img src="/brand/Wide Text.png" height={120} />
        </div>
        <div style={{ height: '40px' }}></div>
        <span className="thinter">The smart way to heal.</span>
      </main>
      <div className="products">
        <div className="product-card">
          <img src="/image.png" height={200} />
          <span className="product-name">Helewrap</span>
          <span className="product-description">
            The all in one muscle relaxing and pain relief wrap.
          </span>
          <button className="purchase">$49.99</button>
        </div>
        <div className="product-card disabled">
          <span className="product-tag">FUTURE</span>
          <img src="https://gearbags.com/wp-content/uploads/2018/09/LX-BAND100_RAW_FRONT-scaled.jpg" height={200} />
          <span className="product-name">Heleband</span>
          <span className="product-description">
            Muscle relief whenever, wherever, in one immediate bandage.
          </span>
          <button className="purchase">$49.99</button>
        </div>
      </div>
    </>
  );
}
