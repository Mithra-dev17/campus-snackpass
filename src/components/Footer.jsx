import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>Campus SnackPass</h2>
          <p>
            Skip the queue and enjoy fresh food from your campus canteen.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/cart">Cart</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📧 support@campussnackpass.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Campus Canteen</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Campus SnackPass. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;