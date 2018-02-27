import React from "react";

export default class Toast extends React.Component {

    static show(text: string, options?: {
        duration: number,
        position: number,
        shadow: boolean,
        animation: boolean,
        hideOnPress: boolean,
        delay: number,
        onShow?: () => void;
        onShown?: () => void;
        onHide?: () => void;
        onHidden?: () => void;
    }): Toast;
    
    static hide(toast: Toast): void;

    static positions: {
        TOP: 20,
        BOTTOM: -20,
        CENTER: 0
    };

    static durations: {
        LONG: 3500,
        SHORT: 2000
    };
}