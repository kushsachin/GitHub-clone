import { Button, Card } from '@shopify/polaris'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../Actions/userAction';

function Home(props) {
  let [userData, setUserData] = useState()

  let profileNavigate = useNavigate();
  var handleViewProfile = () => {
    profileNavigate('/userprofile')
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${props.state.userName}`, {
      headers: {
        Authorization: `Bearer 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`
      }
    })
      .then((res) => res.json())
      .then((user) => {
        setUserData({ ...user })
      })
  }, [props.state.userName])

  return (
    <div className='cc'>
      {(userData !== undefined && userData.message !== 'Not Found') ? (<Card sectioned>
        <div className='userCard'>
          <img src={userData.avatar_url} alt="s" />
          <div className='userDetails'>
            <span className='userName'>{userData.login}{" "}
              <Button plain
                onClick={() => handleViewProfile()}> View profile</Button></span>
            <p>{userData.bio}</p>
            <div className='follow'>
              <span>{userData.followers} <b>Followers</b></span>
              <span>{userData.following} <b>Following</b></span>
              <span>{userData.public_repos} <b>Repos</b></span>
              <p></p>
            </div>
          </div>
        </div>
      </Card>) : <h1>
        No User Found
      </h1>}
    </div>
  )
}
const MapStateToProps = (state) => {
  return {
    state
  }
}
const MapDispatchToProps = (dispatch) => {
  return {
    userDisplay: (b) => dispatch(getUser(b))
  }
}
export default connect(MapStateToProps, MapDispatchToProps)(Home)