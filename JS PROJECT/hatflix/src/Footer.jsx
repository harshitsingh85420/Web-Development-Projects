import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <div className='footer-containe'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Made with Love by Harshit Singh <i class="far fa-heart"></i>
        </p>
        <p className='footer-subscription-text'>
          Follow me @:
        </p>
        <div class='social-icons'><a class='social-logo' href="https://www.facebook.com/profile.php?id=100040311365865"><i class='fab fa-facebook-f' /></a>


          <a class='social-logo' href="https://www.instagram.com/harshitsingh85420/"><i class='fab fa-instagram' /></a>

          <a class='social-logo' href="https://www.linkedin.com/in/harshit-singh-417833193/"><i class='fab fa-linkedin' /></a>
        </div>
        <small class='website-rights'>HATFLIX © 2020</small>
      </section>

    </div >


  );
}

export default Footer;
