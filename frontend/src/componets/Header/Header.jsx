

import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import "./Header.scss";

export default function Header({ name, roleLabel }) {
    const location = useLocation();

    // Розділяємо ім’я на слова
    const nameParts = name.trim().split(/\s+/);
    const firstName = nameParts[0];

    // Визначаємо заголовок сторінки
    let title = "Ваш простір Стременно";

    if (location.pathname === "/") {
        title = `Вітаємо, ${firstName}`;
    }

    // Беремо перші літери перших двох слів
    let initials = nameParts[0].charAt(0);

    if (nameParts.length > 1) {
        initials += nameParts[1].charAt(0);
    }

    initials = initials.toUpperCase();

    return (
        <header className="topbar">
            <div className="topbar-heading">
                <h1>{title}</h1>
                <p>Панель керування кінним клубом</p>
            </div>

            <div className="topbar-right">
                <span className="timezone">Час за Києвом</span>

                <Link
                    className="topbar-profile"
                    to="/settings"
                    aria-label="Налаштування профілю"
                >
                    <span className="profile-avatar">{initials}</span>

                    <span>
                        <strong>{name}</strong>
                        <small>{roleLabel}</small>
                    </span>

                    <ChevronDown size={15} />
                </Link>
            </div>
        </header>
    );
}