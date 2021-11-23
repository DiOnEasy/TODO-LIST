import "./Profile.css"

function Profile(){
    return(
        <div className="profile">
            <div className="profile_photo"><img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/></div>
            <div className="profile_name">Denys Stasyshen</div>
            <div className="profile_description">It is my todo-list</div>
        </div>
    )
}

export default Profile;