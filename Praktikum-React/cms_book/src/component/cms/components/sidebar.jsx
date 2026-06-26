"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu_CMS } from '@/const/menu_cms';

export default function Sidebar() {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };
    
    const handleMouseEnter = () => {
        if (isCollapsed) {
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    const isExpanded = !isCollapsed || isHovered;
    return (
    <aside
        className={`sidebar ${!isExpanded ? 'collapsed' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        <div className="sidebar-header"></div>