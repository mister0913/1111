import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BaseModal } from 'components/Modal'

const EffectWrapper = styled(BaseModal) <{
        opacity: number,
}>`
  width: 100vw;
  height: 100vh;
  transition: opacity 0.3s ease-in;
  
  background: ${({ theme }) => theme.white};
  opacity: ${({ opacity }: { opacity: number }) => opacity};
`

export default function ScreenEffect({ onClose, ...rest }: { onClose: () => void; }) {
        const [opacity, setOpacity] = useState<number>(1);

        const closeModal = () => {
                setTimeout(() => {
                        onClose();
                }, 300);
        }

        useEffect(() => {
                setTimeout(() => {
                        setOpacity(0);
                        closeModal();
                }, 300);
        }, []);

        return (
                <>
                        <audio controls autoPlay>
                                <source src='/audio.wav'></source>
                        </audio>
                        <EffectWrapper isOpen={true} opacity={opacity} />
                </>
        )
}
