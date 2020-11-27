//import React from 'react';
import { store } from 'react-notifications-component';

interface NotifyProps {
    type: 'success' | 'danger' | 'info' | 'default' | 'warning',
    title: string;
    message: string;
    posicao: 'top-right'|'top-left'|'top-center'|'bottom-left'|'bottom-right'|'bottom-center';
}

export function Notify(values: NotifyProps) {

    const { type, title, message, posicao } = values;

    store.addNotification({
        title: title,
        message: message,
        type: type,
        insert: "top",
        container: posicao,
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        
        dismiss: {
            showIcon: true,
            duration: 5000,
            onScreen: true
        }
    });

}

