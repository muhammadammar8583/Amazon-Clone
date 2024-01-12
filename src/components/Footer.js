import "../App.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-panel1">
        <a href="javascript:void(0)">
          <span
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            Back to top
          </span>
        </a>
      </div>
      <div class="footer-panel3">
        <div class="footer-logo"></div>
      </div>

      <div class="footer-panel4">
        <div class="footer-pages">
          <a>Conditions of Use</a>
          <a>Privacy Notice</a>
          <a> Yours Ads Privacy Choices</a>
        </div>

        <div class="copyright">
          &copy 1996-2023, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </footer>
  );
};

export default Footer;
