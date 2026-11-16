

import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    CalendarDays,
    Users,
    GraduationCap,
    Sparkles,
    Wallet,
    Settings,
} from "lucide-react";

import "./SidebarMenu.scss";

const navigationItems = [
    {
        path: "/dashboard",
        title: "Огляд",
        icon: <LayoutDashboard size={24} />,
    },
    {
        path: "/schedule",
        title: "Розклад",
        icon: <CalendarDays size={24} />,
    },
    {
        path: "/horses",
        title: "Коні",
        icon: <img src="/icons/horse.svg" alt="" width={24} height={24} />,
    },
    {
        path: "/trainers",
        title: "Тренери",
        icon: <GraduationCap size={24} />,
    },
    {
        path: "/students",
        title: "Учні",
        icon: <Users size={24} />,
    },
    {
        path: "/payments",
        title: "Оплати",
        icon: <Wallet size={24} />,
    },
    {
        path: "/ai-assistant",
        title: "AI-помічник",
        icon: <Sparkles size={24} />,
    },
    {
        path: "/settings",
        title: "Налаштування",
        icon: <Settings size={24} />,
    },
];

export default function Navigation() {
    return (
        <>

            <nav className="navigation" aria-label="Основна навігація">
                <h3 className="navigation-title">Ваш кінний клуб</h3>
                <ul className="navigation-list">
                    {navigationItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "navigation-link navigation-link-active"
                                        : "navigation-link"
                                }
                            >
                                <span className="navigation-icon" aria-hidden="true">
                                    {item.icon}
                                </span>

                                <span>{item.title}</span>

                                {item.path === "/ai-assistant" && (
                                    <span className="navigation-badge">AI</span>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}