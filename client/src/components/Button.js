import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = [
    "btn--primary-yellow",
    "btn--primary-blue",
    "btn--white",
    "btn--secondary-dark",
    "btn--cancel",
    "btn--login",
    "btn--outline",
    "btn--category",
    "btn--slim-category",
    "btn--slim-category-clicked",
];

const SIZES = [
    "btn--small",
    "btn--small-bold",
    "btn--medium",
    "btn--medium-bold",
    "btn--large",
    "btn--large-bold",
    "btn--small-wide",
    "btn--wide",
    "btn--small-wide-bold",
    "btn--wide-bold",
];

const RADIUS = ["btn--square", "btn--half-rounded", "btn--rounded"];

export const Button = ({ children, type, form, onClick, buttonStyle, buttonSize, buttonRadius, id }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkButtonRadius = RADIUS.includes(buttonRadius) ? buttonRadius : RADIUS[0];

    return (
        <button
            id={id}
            className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonRadius}`}
            onClick={onClick}
            type={type}
            form={form}
        >
            {children}
        </button>
    );
};
