// Navigation item for sidebar
export interface NavItem {
    label: string;
    href: string;
    icon: string;
    active?: boolean;
    badge?: number;
}

// Trend direction for stat cards
export type TrendType = 'up' | 'down';

// Statistics card data
export interface StatCardData {
    icon: string;
    label: string;
    value: string;
    trend: TrendType;
    trendValue: string;
}

// Badge color variants
export type BadgeVariant = 'success' | 'warning' | 'danger';

// Order data for table
export interface Order {
    id: string;
    user: {
        name: string;
        initials: string;
        color: string;
    };
    date: string;
    amount: string;
    status: 'paid' | 'pending' | 'failed';
}

// Popular class data
export interface PopularClass {
    id: number;
    title: string;
    instructor: string;
    enrolled: number;
    progress: number;
    thumbnail: string;
}

// Breadcrumb item
export interface BreadcrumbItem {
    label: string;
    href?: string;
}

// Class status types
export type ClassStatus = 'published' | 'draft' | 'reviewing';

// Class item for class management
export interface ClassItem {
    id: number;
    title: string;
    category: string;
    price: number;
    originalPrice?: number;
    isFree?: boolean;
    modules: number;
    status: ClassStatus;
    thumbnail: string;
}

// Status badge variant mapping
export type StatusVariant = 'success' | 'warning' | 'default';
