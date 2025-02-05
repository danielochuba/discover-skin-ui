import BodyContent from '@/organisms/welcome-page/BodyContent'
import React from 'react'
import imageUrl from '@/assets/images/welcome-image.png'
import ContinueAsGuest from '@/molecules/welcome-page/ContinueAsGuest'
const WelcomePage: React.FC = () => {

    return (
        <div style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <ContinueAsGuest />
            <BodyContent />
        </div>
    )
}

export default WelcomePage