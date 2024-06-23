import '../../Assets/Admin/css/Profile_nav.css'
import Administator from '../../Assets/Admin/Img/administrator-p.png';

function Profile_nav() {
  return (
  <>
  <nav>
              <div className="profile-holder">
                <div className="class-p">
                  <img src={Administator} className="profile-picture" alt="#"/>
                </div>
                <div className="A-name">
                  <h3>Admin</h3>
                </div>
              </div>
              <div className='line-place'>
              <hr className="line"/>
              </div>
            </nav>
  </>
  )
}

export default Profile_nav
