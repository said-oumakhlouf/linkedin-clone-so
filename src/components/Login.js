import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth } from '../firebase';
import linkedin from '../linkedin2019.svg';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                })
            );
        })
        .catch(error => alert(error));
    };

    const register = (e) => {
        if(!name) {
            return alert("Please enter a full name");
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic,
                    })
                );
            });
        }).catch((error) => alert(error));
    };

    return (
        <div className="login">
            <img 
                src={linkedin}
                alt="linkedin"
            />       

            <form>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nom (requis si enregistrement)" 
                    type="text" />
                
                <input
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                    placeholder="Profil pic URL (optional)" type="text" />

                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="E-mail" type="email" 
                />

                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mot de passe" 
                    type="password"
                />

                <button 
                    type="submit" 
                    onClick={loginToApp}>Sign in
                </button>
            </form>

                <p>Êtes vous un membre ?
                    <span className="login__register" onClick={register}>
                        Inscrivez-vous ? 
                    </span>
                </p>
        </div>
    );
};

export default Login;