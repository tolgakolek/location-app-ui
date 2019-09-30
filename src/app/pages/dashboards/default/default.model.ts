// Dashboard-1 card data
export interface Widget {
    icon: string;
    color: string;
    value: string;
    text: string;
}

// Top users balance data

export interface UserBalance {
    image: string;
    name: string;
    icon: string;
    currency: string;
    balance: string;
    order: string;
}

// Revenue table data
export interface RevenueData {
    marketplaces: string;
    date: string;
    payout: string;
    status: string;
}

// Chart data
export interface ChartType {
    chart?: any;
    plotOptions?: any;
    colors?: any;
    series?: any;
    stroke?: any;
    fill?: any;
    labels?: any;
    markers?: any;
    legend?: any;
    xaxis?: any;
    yaxis?: any;
    tooltip?: any;
    grid?: any;
}
