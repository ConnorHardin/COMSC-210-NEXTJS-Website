import React from 'react';
/* import './index.css'; */
import '../app/globals.css';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="container">
            <header>
              <div className="container">
                <div id="branding">
                  <h1><span class="highlight">Car</span> Dealership</h1>
                </div>
                <nav>
                  <u1>
                    <li className="current"><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                  </u1>
                </nav>
              </div>
            </header>

      <section id="showcase">
        <div className="container">
          <h1>The Best Car Dealership Around</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus et augue vitae iaculis. Suspendisse fringilla ex ut odio ultrices, vel aliquam nulla mollis.</p>
        </div>
      </section>

      <section id="newsletter">
        <div className="container">
          <h1>Subscribe to our Newsletter</h1>
          <form>
            <input type="email" id="email" autocomplete="off" placeholder="Enter your Email..." />
            <button type="submit" class="button_1">Subscribe</button>
          </form>
        </div>
      </section>

      <section id="boxes">
        <div className="container">
                    <div className="box">
                      <Image src="/img/logo_buy.png"width={400} height={100} />
                      <h3>Buy Cars</h3>
                      <p>Nam in dignissim augue, at vestibulum lacus. Donec scelerisque nec risus quis lobortis.</p>
                    </div>

          <div className="box">
          <Image src="/img/logo_sell.png" width={400} height={100} /> 
            <h3>Sell Cars</h3>
            <p>Nam in dignissim augue, at vestibulum lacus. Donec scelerisque nec risus quis lobortis.</p>
          </div>

          <div className="box">
            <Image src="/img/logo_rent.png" width={400} height={100} /> 
            <h3>Rent Cars</h3>
            <p>Nam in dignissim augue, at vestibulum lacus. Donec scelerisque nec risus quis lobortis.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Car Dealership, Copyright &copy; 2024</p>
      </footer>
    </div>
  );
};

export default Home;