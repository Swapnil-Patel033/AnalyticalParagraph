import '../../assets/css/_header.css';
// import DatePicker from '../../..';
import DatePicker from '../DatePicker';

function Header({ setFlag,flag }) {

    return (
        <header className={`header ${flag ? 'WhiteBackground' : 'BlackBackgroundHeader'}`} >
            <div className="container" >
                <div className="header__logo">
                    <h1 className={`header__logo__name ${flag ? 'BlackColor' : 'WhiteColor'}`}>Logo</h1>
                </div>
                <nav className="header__nav">
                    <ul className="header__menu">
                        <li className="header__item">
                            {/* <DatePicker /> */}
                            <DatePicker flag={flag}/>
                        </li>
                        <li>
                            <div class="toggleWrapper" >
                                {/* <input type="checkbox" class="dn" id="dn" /> */}
                                <input type="checkbox" class="checkbox" id="checkbox"  onClick={()=>{setFlag(false)}}/>
                                <label for="checkbox" class={`checkbox-label ${flag ? 'WhiteBackground' : 'BlackBackground'}`} >
                                    <i class="fas fa-moon"></i>
                                    <i class="fas fa-sun"></i>
                                    <span class={`ball ${flag ? 'BlackBackground' : 'WhiteBackground    '}`}></span>
                                </label>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;