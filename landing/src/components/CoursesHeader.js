import React from 'react'

class CoursesHeader extends React.Component {
    render() {
        return (
            <article id="courses-header">
                <nav className="navbar navbar-default navbar-static-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Momentum</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                           {/*  <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul> */}
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="../navbar/">1. Foo</a></li>
                                <li><a href="../navbar/">2. Baz</a></li>
                                <li><a href="../navbar/">3. Bar</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </article>
        )
    }
}

export default CoursesHeader
