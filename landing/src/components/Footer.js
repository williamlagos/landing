import React from 'react'
import MohubGray from '../assets/img/mohub_gray.png';

class Footer extends React.Component {
    render() {
        return (
          <footer className="footer">
            <div className="container">
              <div className="copyright"> &nbsp; © MoHub. Todos os direitos reservados. </div>
              <div> <img src={MohubGray}/> &nbsp; </div>
            </div>
          </footer>
        )
    }
}

export default Footer
