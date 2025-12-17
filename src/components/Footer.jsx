import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 mt-5">
      <Container>
        <div className="text-center">
          <h5 className="text-danger mb-2">SushiFast</h5>
          <p className="mb-1">Restaurant de sushis frais et délicieux</p>

          <div className="border-secondary my-3" />

          <small className="text-white">
            © {new Date().getFullYear()} SushiFast — IUT Meaux MMI3 — R5.04<br></br><br></br>
          </small>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;
