import Image from "next/image";
import router from "next/router";
import useAuth from "../data/hook/useAuth";
import loadingImg from '../../public/loading.gif'

import styles from '../styles/ForceAuthenticated.module.css'

export default function ForceAuthentication(props: any) {

    const { authenticated, user } = useAuth()

    function renderContent() {
        return (
            <>
                {props.children}
            </>
        )
    }

    function renderLoading() {
        return (
            <div className={styles.imgLo}> 
                <Image src={loadingImg}/>
            </div>
        )
    }

    // if(authenticated === true && user?.email) {
    //     return renderContent();
    // } else if(authenticated === false) {
    //     return renderLoading();
    // } else{
    //     return null;
    // }
    return renderLoading()
}