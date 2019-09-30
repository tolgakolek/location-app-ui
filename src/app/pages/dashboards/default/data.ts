import { ChartType } from './default.model';

// dummy data
const widgetData = [
    {
        icon: 'fe-heart',
        color: 'primary',
        value: '58947',
        text: 'Total Revenue'
    },
    {
        icon: 'fe-shopping-cart',
        color: 'success',
        value: '127',
        text: 'Today\'s Sales'
    },
    {
        icon: 'fe-bar-chart-line',
        color: 'info',
        value: '0.58',
        text: 'Conversion'
    },
    {
        icon: 'fe-eye',
        color: 'warning',
        value: '78.41',
        text: 'Today\'s Visits'
    }
];

const revenueRadialChart: ChartType = {
    chart: {
        height: 200,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '65%',
            },
            dataLabels: {
                name: {
                    show: false
                },
                value: {
                    fontSize: '24px',
                    color: 'rgb(241, 85, 108)',
                    offsetY: 10,
                    formatter: (val) => {
                        return val + '';
                    }
                }
            }
        }
    },
    colors: ['rgb(241, 85, 108)'],
    series: [60],
    stroke: {
        lineCap: 'round',
    },
};

const salesMixedChart: ChartType = {
    chart: {
        height: 370,
        type: 'line',
        padding: {
            right: 0,
            left: 0
        },
        stacked: false,
        toolbar: {
            show: false
        }
    },
    stroke: {
        width: [0, 2, 4],
        curve: 'straight'
    },
    plotOptions: {
        bar: {
            columnWidth: '50%'
        }
    },
    colors: ['#1abc9c', '#e3eaef', '#4a81d4'],
    series: [{
        name: 'Direct Sales',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
        name: 'Email Marketing',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
        name: 'Marketplaces',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
    fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
            inverseColors: false,
            shade: 'light',
            type: 'vertical',
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
        }
    },
    // tslint:disable-next-line: max-line-length
    labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
    markers: {
        size: 0
    },
    legend: {
        show: false
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    },
    yaxis: {
        title: {
            text: '',
        },
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter(y) {
                if (typeof y !== 'undefined') {
                    return y.toFixed(0) + ' points';
                }
                return y;

            }
        }
    },
    grid: {
        borderColor: '#f1f3fa'
    }
};


/* ----------------------------Top 5 Users Balance -------------------------*/

const userBalanceData = [
    {
        image: 'assets/images/users/user-2.jpg',
        name: 'Tomaslau',
        icon: 'mdi mdi-currency-btc',
        currency: 'BTC',
        balance: '0.00816117 BTC',
        order: '0.00097036 BTC'
    },
    {
        image: 'assets/images/users/user-2.jpg',
        name: 'Erwin E. Brown',
        icon: 'mdi mdi-currency-eth',
        currency: 'ETH',
        balance: '3.16117008 ETH',
        order: '1.70360009 ETH'
    },
    {
        image: 'assets/images/users/user-4.jpg',
        name: 'Margeret V. Ligon',
        icon: 'mdi mdi-currency-eur',
        currency: 'EUR',
        balance: '25.08 EUR',
        order: '12.58 EUR'
    },
    {
        image: 'assets/images/users/user-5.jpg',
        name: 'Jose D. Delacruz',
        icon: 'mdi mdi-currency-cny',
        currency: 'CNY',
        balance: '82.00 CNY',
        order: '30.83 CNY'
    },
    {
        image: 'assets/images/users/user-6.jpg',
        name: 'Luke J. Sain',
        icon: 'mdi mdi-currency-btc',
        currency: 'BTC',
        balance: '2.00816117 BTC',
        order: '1.00097036 BTC'
    }
];


const revenueData = [
    {
        marketplaces: 'Themes Market',
        date: 'Oct 15, 2018',
        payout: '$5848.68',
        status: 'Upcoming'
    },
    {
        marketplaces: 'Freelance',
        date: 'Oct 12, 2018',
        payout: '$5848.68',
        status: 'Paid'
    },
    {
        marketplaces: 'Share Holding',
        date: 'Oct 10, 2018',
        payout: '$815.89',
        status: 'Paid'
    },
    {
        marketplaces: 'Envato\'s Affiliates',
        date: 'Oct 03, 2018',
        payout: '$248.75',
        status: 'Overdue'
    },
    {
        marketplaces: 'Marketing Revenue',
        date: 'Sep 21, 2018',
        payout: '$978.21',
        status: 'Upcoming'
    },
    {
        marketplaces: 'Advertise Revenue',
        date: 'Sep 15, 2018',
        payout: '$358.10',
        status: 'Paid'
    },
];
export { widgetData, salesMixedChart, revenueRadialChart, userBalanceData, revenueData };
