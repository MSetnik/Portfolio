import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://icon-library.com/images/avatar-icon/avatar-icon-4.jpg"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Matko Setnik</h1>
                            <h4 style={{color:'white'}}>bacc. comp. ing.</h4>

                            <hr/>

                            <p>Android | Javascript | HTML/CSS | C++/C# | SQL  </p>

                            
                            <div className="social-links">
                                <a href="https://github.com/MSetnik" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                </a>

                                <a href="https://www.linkedin.com/in/matko-setnik-2b8a491aa/" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;